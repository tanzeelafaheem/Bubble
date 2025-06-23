import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import Navbar from "../components/Others/Navbar";
import Sidebar from "../components/Chat/Sidebar";
import ChatBox from "../components/Chat/ChatBox";
import Profile from "../components/Others/Profile";
import { io } from "socket.io-client";
import socket from "../utils/socket";

const Home = () => {
  const [activeSection, setActiveSection] = useState("chat");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (id) {
      socket.connect();
      socket.emit("add-user", id);
    }

    return () => {
      socket.disconnect();
    };
  }, [id]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar onSectionChange={setActiveSection} />

        <div className="flex flex-1">
          <div className="w-[300px] h-full">
            <Sidebar onSelectFriend={setSelectedFriend} />

          </div>

          <div className="flex-1 h-full">
            {activeSection === "chat" && selectedFriend && (
              <ChatBox selectedFriend={selectedFriend} />
            )}
            {activeSection === "profile" && <Profile />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
