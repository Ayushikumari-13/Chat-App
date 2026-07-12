# 💬 Real-Time Chat Application

A full-stack Real-Time Chat Application built using React.js, Node.js, Express.js, MongoDB, and Socket.IO. The application allows users to chat instantly with features similar to WhatsApp.

---

# 🚀 Features

- 🔐 User Login
- 🚪 Logout
- 💬 Real-Time Messaging
- ⚡ Socket.IO Integration
- 🗄️ MongoDB Message Storage
- 📜 Chat History
- 👥 Online Users
- ⌨️ Typing Indicator
- ✅ Delivered Status
- 👀 Read Status
- 🎨 WhatsApp Inspired UI
- 📱 Responsive Design

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- CSS
- Axios
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- CORS
- dotenv

---

# 📁 Project Structure

```
Real-Time-Chat-App/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── socket/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/real-time-chat-app.git
```

---

## Backend Setup

```bash
cd server
```

Install Dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
```

Install Dependencies

```bash
npm install
```

Start Frontend

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Get All Messages

```
GET /api/messages
```

## Send Message

```
POST /api/messages
```

---

# 📷 Project Features

### ✅ Login

User enters username before joining chat.

### ✅ Real-Time Chat

Messages are sent instantly using Socket.IO.

### ✅ MongoDB Storage

All chat messages are stored in MongoDB.

### ✅ Online Users

Displays currently online users.

### ✅ Typing Indicator

Shows when another user is typing.

### ✅ Read Status

Displays Sent, Delivered and Read status.

### ✅ Chat History

Previous messages are loaded automatically.

### ✅ WhatsApp Style Interface

Professional chat UI with avatars and message bubbles.

---

# 📦 Dependencies

## Frontend

- react
- react-dom
- axios
- socket.io-client

## Backend

- express
- mongoose
- socket.io
- cors
- dotenv
- nodemon

---

# ▶️ Run Project

## Backend

```bash
cd server
npm run dev
```

## Frontend

```bash
cd client
npm run dev
```

---

# 👩‍💻 Author

**Ayushi Kumari**

Frontend Developer | MERN Stack Developer

GitHub:
https://github.com/Ayushikumari-13

LinkedIn:
https://www.linkedin.com/in/ayushi-kumari-307805266

---

# 📄 License

This project is created for educational and internship assignment purposes.
