import { useEffect, useState } from "react";
import socket from "../utils/socket";
import Navbar from "../components/Others/Navbar";
import Sidebar from "../components/Chat/Sidebar";
import ChatBox from "../components/Chat/ChatBox";
import Profile from "../components/Others/Profile";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

const Home = () => {
  const [activeSection, setActiveSection] = useState("chat");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      socket.connect();
      socket.emit("add-user", userId);
    }
    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar onSectionChange={setActiveSection} />

      <div className="flex flex-1 overflow-hidden relative">
        <div
          className={`absolute z-10 md:static transition-all duration-300 ease-in-out bg-white border-r border-gray-200 h-full w-[250px] ${
            isSidebarVisible ? "left-0" : "-left-full"
          }`}
        >
          <Sidebar onSelectFriend={setSelectedFriend} />
        </div>

        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-2 left-2 z-20 bg-white text-green-700 px-3 py-1 rounded shadow"
        >
          {isSidebarVisible ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>

        <div
          className={`flex-1 h-full overflow-hidden transition-all duration-300 ${
            isSidebarVisible ? "md:ml-[40px]" : ""
          }`}
        >
          {activeSection === "chat" ? (
            selectedFriend ? (
              <ChatBox selectedFriend={selectedFriend} />
            ) : (
              <div className="flex justify-center items-center h-full text-gray-500">
                Select a friend to start chatting
              </div>
            )
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
