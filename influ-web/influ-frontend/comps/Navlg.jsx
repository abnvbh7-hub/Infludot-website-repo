import { useState, useEffect } from "react";

export default function NavTyper({ texts, typingSpeed = 100, deletingSpeed = 50, pause = 1000 }) {
  const [textIndex, setTextIndex] = useState(0); // which string we're on
  const [displayedText, setDisplayedText] = useState(""); // current text to show
  const [isDeleting, setIsDeleting] = useState(false); // typing or deleting

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 1) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <div className="maintype">
      {displayedText.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}

    </div>
  );
}
