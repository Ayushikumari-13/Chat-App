import Message from "../models/Message.js";

const onlineUsers = {};

const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("🟢 User Connected:", socket.id);

    // ==========================
    // User Join
    // ==========================
    socket.on("join", (username) => {
      onlineUsers[socket.id] = username;

      console.log(`🟢 ${username} Joined`);

      io.emit("online_users", Object.values(onlineUsers));
    });

    // ==========================
    // Typing Indicator
    // ==========================
    socket.on("typing", (username) => {
      socket.broadcast.emit("show_typing", username);
    });

    socket.on("stop_typing", () => {
      socket.broadcast.emit("hide_typing");
    });

    // ==========================
    // Send Message
    // ==========================
    socket.on("send_message", async (data) => {
      try {
        const newMessage = await Message.create({
          username: data.username,
          message: data.message,
          status: "Delivered",
        });

        console.log(
          `💬 ${newMessage.username}: ${newMessage.message}`
        );

        io.emit("receive_message", newMessage);
      } catch (error) {
        console.error("❌ Message Error:", error);
      }
    });

    // ==========================
    // Read Message
    // ==========================
    socket.on("message_read", async (messageId) => {
      try {
        const updatedMessage = await Message.findByIdAndUpdate(
          messageId,
          {
            status: "Read",
          },
          {
            new: true,
          }
        );

        if (updatedMessage) {
          io.emit("message_status_updated", updatedMessage);
        }
      } catch (error) {
        console.error("❌ Read Status Error:", error);
      }
    });

    // ==========================
    // User Disconnect
    // ==========================
    socket.on("disconnect", () => {
      const username = onlineUsers[socket.id];

      delete onlineUsers[socket.id];

      io.emit("online_users", Object.values(onlineUsers));

      console.log(
        `🔴 ${username || "Unknown User"} Disconnected`
      );
    });
  });
};

export default setupSocket;