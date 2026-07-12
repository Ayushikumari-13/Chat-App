function Sidebar() {
  const users = [
    {
      name: "Ayushi",
      online: true,
    },
    {
      name: "Shobhit",
      online: true,
    },
    {
      name: "Neha",
      online: false,
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
        height: "100%",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          color: "#075E54",
          marginBottom: "20px",
        }}
      >
        👥 Contacts
      </h3>

      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            background: "#f8fafc",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#25D366",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {user.name.charAt(0)}
          </div>

          {/* User Info */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {user.name}
            </div>

            <small
              style={{
                color: user.online ? "#16a34a" : "#64748b",
              }}
            >
              {user.online ? "🟢 Online" : "⚪ Offline"}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;