import { useState, useRef, useEffect } from "react";

export default function ChatBlock({ onClick }) {
  const [chat, setChat] = useState([{ response: "Hello", role: "AI" }]);
  const [text, setText] = useState("");

  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function handleSubmit(prompt) {
    if (!prompt.trim()) return;

    setChat(prev => [...prev, { response: prompt, role: "user" }]);
    setText("");

    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/chatbot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt })
        }
      );

      const data = await res.json();

      setChat(prev => [...prev, { response: data.response, role: "AI" }]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="cb-mc">
      <div className="cb-c1con">
        <div className="cb-c1">Chat</div>
        <div className="cb-c1" onClick={onClick}>X</div>
      </div>

      <div className="cb-c2">
        {chat.map((item, index) =>
          item.role === "AI" ? (
            <div className="cbc2x" key={index}>{item.response}</div>
          ) : (
            <div className="cbc2y" key={index}>{item.response}</div>
          )
        )}
        <div ref={bottomRef} />
      </div>

      {chat.length < 4 && (
        <div className="cb-c4">
          <div className="cb-c4x">Frequently asked questions...</div>
          <div className="cb-c4y" onClick={() => handleSubmit("What is Infludot?")}>
            What is Infludot?
          </div>
          <div className="cb-c4y" onClick={() => handleSubmit("How does Infludot work?")}>
            How does Infludot work?
          </div>
          <div className="cb-c4y" onClick={() => handleSubmit("Is Infludot free?")}>
            Is Infludot free?
          </div>
        </div>
      )}

      <div className="cb-c3">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={e => e.key === "Enter" && handleSubmit(text)}
        />
        <button onClick={() => handleSubmit(text)}>Send</button>
      </div>
    </div>
  );
}
