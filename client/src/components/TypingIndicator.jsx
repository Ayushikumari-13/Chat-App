function TypingIndicator({ typingUser }) {
  if (!typingUser) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "10px 0",
        padding: "10px 15px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "fit-content",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {typingUser.charAt(0).toUpperCase()}
      </div>

      <div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#075E54",
          }}
        >
          {typingUser}
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#6B7280",
            fontStyle: "italic",
          }}
        >
          ✍️ is typing...
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;