from typing import Optional
from fastapi import FastAPI, HTTPException, Depends, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from psycopg.rows import dict_row
from pydantic import BaseModel
from datetime import datetime, timedelta
from psycopg_pool import ConnectionPool
from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq
from retriever import ragbot
import jwt
import os
import uvicorn
import cloudinary
import cloudinary.uploader
import requests

# -------------------- APP INIT --------------------

app = FastAPI()
security = HTTPBearer()

secret = os.getenv("JWT_SECRET", "influiscrazy")

# -------------------- DATABASE --------------------

pool = ConnectionPool(conninfo=os.getenv("DATABASE_URL"),
                      min_size=1,
                      max_size=5)

# -------------------- CLOUDINARY --------------------

cloudinary.config(cloud_name="dkwojvvtd",
                  api_key="812465811574886",
                  api_secret=os.getenv("CLOUDINARY_API_KEY"))

# -------------------- CORS --------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://3e818194-f111-4755-8683-08e1cefb31ed-00-33k8a80ml1udi.sisko.replit.dev",
        "https://9519ea0c-331c-4868-a6fe-a0f947e0dfd5-00-xk3zi4mg732w.pike.replit.dev"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"])

# -------------------- LLM + RAG --------------------

prompt = """
You are a Smart Chatting Assistant, help the user answer his question only in small sentence and humanly tone, based on the reference data and user question.
NOTE: STRICTLY ANSWER BASED ON DATA.

Reference DATA:
*Contact-info:9032610137
Location:
*Rushikonda, Visakhapatnam, Andhra Pradesh, India
Instagram:
https://infludot.com/

DATA: {reference}
USER QUESTION: {question}
"""

mainprompt = PromptTemplate.from_template(prompt)
llm = ChatGroq(model="llama-3.3-70b-versatile")
ret = ragbot()
model = mainprompt | llm

# -------------------- MODELS --------------------
class ContactForm(BaseModel):
    firstName: str
    lastName: str
    email: str
    message: str


class LoginModel(BaseModel):
    username: str
    password: str


class InputModel(BaseModel):
    prompt: str


# -------------------- AUTH --------------------


def header_check(creds: HTTPAuthorizationCredentials = Depends(security)):
    token = creds.credentials
    try:
        payload = jwt.decode(token, secret, algorithms=["HS256"])

        if payload.get("auth") != "admin" or payload.get("sub") != "infludot":
            raise HTTPException(status_code=403, detail="UNAUTHORIZED")

        return payload.get("auth")

    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")

    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# -------------------- ROUTES --------------------


@app.get("/")
def home():
    return {"status": "API ONLINE"}


@app.post("/login")
def login(sample: LoginModel):
    if sample.username == "infludot" and sample.password == "infludot123":
        payload = {
            "sub": sample.username,
            "auth": "admin",
            "exp": datetime.utcnow() + timedelta(days=365)
        }

        token = jwt.encode(payload, secret, algorithm="HS256")

        return {"status": "success", "token": token}

    raise HTTPException(status_code=401, detail="Invalid credentials")


@app.post("/chatbot")
def chatbot(query: InputModel):
    raw = ret.invoke(query.prompt)
    data = [item.page_content for item in raw]

    res = model.invoke({"reference": data, "question": query.prompt})

    return {"response": res.content, "role": "AI"}


@app.post('/addcreator')
async def addCreator(link: str = Form(...),
                     reach: int = Form(...),
                     suff: Optional[str] = Form(...),
                     file: UploadFile = File(...),
                     name: str = Form(...),
                     verdict: str = Depends(header_check)):
    if verdict != "admin":
        raise HTTPException(status_code=403, detail="UNAUTHORIZED")

    try:
        # Upload video to Cloudinary
        upload_result = cloudinary.uploader.upload(file.file,
                                                   resource_type="video")

        video_url = upload_result.get("secure_url")

        # Save to database
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO infdb (infvid, inflink, infreach, infsuff,infname)
                    VALUES (%s, %s, %s, %s,%s);
                """, (video_url, link, reach, suff,name))
            conn.commit()

        return {"status": "success", "video_url": video_url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete('/deletecreator')
def deleteCreator(id: int, verdict: str = Depends(header_check)):
    if verdict != "admin":
        raise HTTPException(status_code=403, detail="UNAUTHORIZED")
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM infdb WHERE infid = %s", (id,))
            conn.commit()
            return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete('/deletebrand')
def deleteBrand(id: int, verdict: str = Depends(header_check)):
    if verdict != "admin":
        raise HTTPException(status_code=403, detail="UNAUTHORIZED")
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM branddb WHERE bid = %s", (id,))
            conn.commit()
            return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post('/addbrand')
async def addBrand(btxt: str = Form(...),
                   file: UploadFile = File(...),
                   verdict: str = Depends(header_check)):
    if verdict != "admin":
        raise HTTPException(status_code=403, detail="UNAUTHORIZED")

    try:
        # Upload image to Cloudinary
        upload_result = cloudinary.uploader.upload(file.file,
                                                   resource_type="image")

        image_url = upload_result.get("secure_url")

        # Save to DB
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO branddb (bimg, btxt)
                    VALUES (%s, %s);
                """, (image_url, btxt))
            conn.commit()

        return {"status": "success", "image_url": image_url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get('/getbrand')
def getBrand():
    try:
        with pool.connection() as conn:
            with conn.cursor(row_factory=dict_row) as cur:
                cur.execute("SELECT * FROM branddb")
                data = cur.fetchall()
                return {"status": "success", "data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get('/getcreator')
def getCreator():
    try:
        with pool.connection() as conn:
            with conn.cursor(row_factory=dict_row) as cur:
                cur.execute("SELECT * FROM infdb")
                data = cur.fetchall()
                return {"status": "success", "data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/send-email")
def send_simple_message(sample: ContactForm):
    response =  requests.post(
        "https://api.mailgun.net/v3/sandbox3f3013f5eab6432ea6539fdfe8b1a631.mailgun.org/messages",
        auth=("api", os.getenv("MAIL_GUN_API")),
        data={"from": "Mailgun Sandbox <postmaster@sandbox3f3013f5eab6432ea6539fdfe8b1a631.mailgun.org>",
            "to": "Uma Ganesh Allada <infludottechnologies@gmail.com>",
            "subject": "Hello Uma Ganesh Allada",
             "text": f"""
             Name: {sample.firstName} {sample.lastName}
             Email: {sample.email}

             Message:
             {sample.message}
             """})
    return {
        "status_code": response.status_code,
        "response": response.text
    }




# -------------------- RUN SERVER --------------------

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)