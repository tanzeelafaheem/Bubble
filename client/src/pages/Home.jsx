import { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Chat/Sidebar';
import ChatBox from '../components/Chat/ChatBox';

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosInstance.get('/')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
     <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main section with sidebar and chatbox */}
      <div className="flex flex-1">
        {/* Sidebar - fixed width */}
        <div className="w-[300px] h-full">
          <Sidebar />
        </div>

        {/* ChatBox - fills remaining space and matches sidebar height */}
        <div className="flex-1 h-full">
          <ChatBox />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
