function MessageBubble({ msg }) {
  // Safety Check
  if (!msg) return null;

  const getStatus = () => {
    switch (msg.status) {
      case "Sent":
        return "✓";
      case "Delivered":
        return "✓✓";
      case "Read":
        return "✓✓";
      default:
        return "";
    }
  };

  const getStatusColor = () => {
    return msg.status === "Read" ? "#3B82F6" : "#64748B";
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "10px",
        marginBottom: "15px",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "18px",
          flexShrink: 0,
        }}
      >
        {msg.username ? msg.username.charAt(0).toUpperCase() : "?"}
      </div>

      {/* Message Bubble */}
      <div
        style={{
          background: "#DCF8C6",
          padding: "12px 16px",
          borderRadius: "18px",
          maxWidth: "75%",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            color: "#075E54",
            marginBottom: "5px",
          }}
        >
          {msg.username || "Unknown User"}
        </div>

        <div
          style={{
            color: "#111827",
            fontSize: "15px",
            lineHeight: "1.5",
            wordBreak: "break-word",
          }}
        >
          {msg.message || ""}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "6px",
            marginTop: "8px",
          }}
        >
          <small style={{ color: "#6B7280" }}>
            {msg.createdAt
              ? new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </small>

          <small
            style={{
              color: getStatusColor(),
              fontWeight: "bold",
            }}
          >
            {getStatus()}
          </small>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;