import NavBar from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { LinearGradient } from "react-text-gradients";
import ChatBlock from "../comps/Chatblock.jsx";
import chatlottie from "../comps/lotfiles/chatlottie.json";
import Lottie from "lottie-react";

export default function Contact() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState(false);
  

 

  const sendMessage = async () => {
  if (!firstName || !lastName || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "firstName": firstName.trim(),
        "lastName": lastName.trim(),
        "email": email.trim(),
        "message": message.trim(),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || "Failed to send message");
    }

    alert("Message sent successfully!");

    // Reset fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

  } catch (err) {
    console.error(err);
    alert(err.message || "Something went wrong");
  }

  setLoading(false);
};

  return (
    <>
      <NavBar />

      <main className="contact-page">
        <Lottie
          animationData={chatlottie}
          autoPlay={true}
          loop={true}
          onClick={() => setChat(true)}
          className="chatlot"
          initialSegment={[35, 120]}
        />
        {chat ? (
          <div className="chatoverlay">
            <ChatBlock onClick={() => setChat(false)} />
          </div>
        ) : null}
        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <LinearGradient
              className="contact-title"
              gradient={["to left", "#17acff ,#ff68f0"]}
            >
              CONTACT US
            </LinearGradient>

            <p className="contact-sub">
              Reach out and we’ll get back to you shortly.
            </p>
          </div>

          <div className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              className="contact-btn"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
