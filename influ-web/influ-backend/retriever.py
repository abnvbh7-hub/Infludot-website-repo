import os
from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel
from langchain_groq import ChatGroq
from langchain_openai import OpenAIEmbeddings
import trafilatura
import requests
from langchain_community.embeddings import HuggingFaceEmbeddings
from pinecone import Pinecone
from pinecone import ServerlessSpec
from langchain_pinecone import PineconeVectorStore
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter


os.environ['GROQ_API_KEY']='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'
os.environ["PINECONE_API_KEY"] = "pcsk_4GzayL_47bMBQFHLuMkL6wDEGavMVGGhkqLAg6mesrztrE6JE67kMmPp6RC1fVrQwWr3RX"
os.environ["OPENAI_API_KEY"] = "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"

llm = ChatGroq(model = "llama-3.3-70b-versatile")
pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY"))
embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

def ragbot():
  if not pc.has_index("infludot"):
    #if no index, create one
    pc.create_index(
        name="infludot",
        metric= "cosine",
      dimension= 384,
        spec = ServerlessSpec(cloud="aws", region="us-east-1")
    )
    index = pc.Index("infludot")
    vectordb = PineconeVectorStore(index=index,embedding = embedding)
    #extrat data from  url
    html = requests.get("https://infludot.com/").text
    text = trafilatura.extract(html)
    doc = Document(page_content=text,metadata={"source":'INFLUDOT.COM'})
    splitter  = RecursiveCharacterTextSplitter(chunk_size=300,chunk_overlap=50)
    docs = splitter.split_documents([doc])
    #add docs into index
    vectordb.add_documents(docs)
    retriever = vectordb.as_retriever()
    return retriever
  else:
    index = pc.Index("infludot")
    vectordb = PineconeVectorStore(index=index,embedding = embedding)
    retriever = vectordb.as_retriever()
    return retriever


