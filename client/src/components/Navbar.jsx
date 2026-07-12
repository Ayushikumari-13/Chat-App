function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        background: "#075E54",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
          }}
        >
          💬
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            Chat App
          </h2>

          <small
            style={{
              color: "#d1fae5",
            }}
          >
            Real-Time Messaging
          </small>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#22c55e",
            display: "inline-block",
          }}
        ></span>

        Online
      </div>
    </nav>
  );
}

export default Navbar;