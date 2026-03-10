import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

export default function LoginOverlay({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("token")){
      nav('/admin')
    }
  },[])

  async function handleLogin() {
    const res = await fetch("https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username":username, "password":password }),
    })
    const data = await res.json()
    if(data.status === "success"){
      localStorage.setItem("token", data.token)
      nav('/admin')
    }
    else{
      alert("Invalid credentials")
    }
  };

  return (
    <motion.div
      className="login-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="login-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="login-close" onClick={onClose}>✕</div>

        <div className="login-title">WELCOME BACK</div>
        <div className="login-sub">Login to continue to INFLUDOT</div>

        <div className="login-input-con">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="login-input-con">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="login-btn-glossy"
          onClick={handleLogin}
        >
          LOGIN
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
