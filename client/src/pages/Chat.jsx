import { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";
import OnlineUsers from "../components/OnlineUsers";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getMessages } from "../services/api";
import socket from "../socket/socket";

function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
    loadMessages();

    socket.emit("join", username);

    socket.on("receive_message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);

      socket.emit("message_read", newMessage._id);
    });

    socket.on("message_status_updated", (updatedMessage) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === updatedMessage._id
            ? updatedMessage
            : msg
        )
      );
    });

    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    socket.on("show_typing", (user) => {
      if (user !== username) {
        setTypingUser(user);
      }
    });

    socket.on("hide_typing", () => {
      setTypingUser("");
    });

    return () => {
      socket.off("receive_message");
      socket.off("message_status_updated");
      socket.off("online_users");
      socket.off("show_typing");
      socket.off("hide_typing");
    };
  }, [username]);

  const loadMessages = async () => {
    try {
      const data = await getMessages();

      setMessages(data);

      data.forEach((msg) => {
        if (msg.status !== "Read") {
          socket.emit("message_read", msg._id);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ECE5DD",
        padding: "20px",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "280px",
          }}
        >
          <Sidebar />

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <OnlineUsers users={onlineUsers} />
          </div>
        </div>

        {/* Chat Area */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.15)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#075E54",
              color: "#fff",
              padding: "18px 25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                }}
              >
                💬 Chat Room
              </h2>

              <small>
                Welcome {username}
              </small>
            </div>

            <button
              onClick={handleLogout}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </div>

          {/* Chat */}
          <div
            style={{
              padding: "20px",
              flex: 1,
            }}
          >
            <ChatBox messages={messages} />

            {typingUser && (
              <p
                style={{
                  color: "#075E54",
                  fontStyle: "italic",
                  marginBottom: "10px",
                }}
              >
                ✍ {typingUser} is typing...
              </p>
            )}

            <MessageInput username={username} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;