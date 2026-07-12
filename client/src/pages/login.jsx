import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const name = username.trim();

    if (name.length < 3) {
      alert("Username must be at least 3 characters.");
      return;
    }

    localStorage.setItem("username", name);
    onLogin(name);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "35px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            marginBottom: "10px",
          }}
        >
          💬 Chat Login
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "20px",
          }}
        >
          Enter your username to join the chat
        </p>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          autoFocus
          maxLength={20}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #475569",
            outline: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Join Chat
        </button>
      </div>
    </div>
  );
}

export default Login;