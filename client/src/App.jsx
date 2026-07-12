import { useState } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  return (
    <>
      {username ? (
        <Chat username={username} />
      ) : (
        <Login onLogin={setUsername} />
      )}
    </>
  );
}

export default App;