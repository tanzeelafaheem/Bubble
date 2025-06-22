import { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import Navbar from '../components/Others/Navbar';
import Sidebar from '../components/Chat/Sidebar';
import ChatBox from '../components/Chat/ChatBox';
import Profile from '../components/Others/Profile';

const Home = () => {
  const [activeSection, setActiveSection] = useState("chat");

  return (
    <>
     <div className="flex flex-col h-screen">

      <Navbar onSectionChange={setActiveSection} />

      <div className="flex flex-1">
        <div className="w-[300px] h-full">
          <Sidebar />
        </div>

        <div className="flex-1 h-full">
           {activeSection === "chat" && <ChatBox />}
          {activeSection === "profile" && <Profile />}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
