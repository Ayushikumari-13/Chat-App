import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatBox({ messages = [] }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      style={{
        flex: 1,
        height: "500px",
        overflowY: "auto",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #d1d5db",
        background: "#ECE5DD",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {messages.length === 0 ? (
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          <h2>💬 No Messages Yet</h2>
          <p>Start chatting with your friends...</p>
        </div>
      ) : (
        messages
          .filter((msg) => msg)
          .map((msg) => (
            <MessageBubble
              key={msg._id || Math.random()}
              msg={msg}
            />
          ))
      )}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatBox;