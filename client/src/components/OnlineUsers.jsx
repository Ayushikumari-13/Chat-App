function OnlineUsers({ users }) {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
          borderBottom: "1px solid #475569",
          paddingBottom: "10px",
        }}
      >
        🟢 Online Users ({users.length})
      </h3>

      {users.length === 0 ? (
        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          No User Online
        </p>
      ) : (
        users.map((user, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 0",
              borderBottom: "1px solid #334155",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                background: "#22c55e",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>

            <span
              style={{
                fontSize: "16px",
              }}
            >
              {user}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default OnlineUsers;