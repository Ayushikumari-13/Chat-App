import { useState } from "react";
import socket from "../socket/socket";

function MessageInput({ username }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

    socket.emit("send_message", {
      username,
      message,
    });

    socket.emit("stop_typing");

    setMessage("");
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    socket.emit("typing", username);

    clearTimeout(window.typingTimeout);

    window.typingTimeout = setTimeout(() => {
      socket.emit("stop_typing");
    }, 1000);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "15px",
        borderTop: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleTyping}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        style={{
          flex: 1,
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "25px",
          outline: "none",
          fontSize: "15px",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          background: "#25D366",
          color: "#fff",
          border: "none",
          padding: "12px 22px",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;