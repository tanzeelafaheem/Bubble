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
    <Navbar/>
    <Sidebar/>
    <ChatBox/>
      <h1 className="text-2xl p-5">{message}</h1>
    </>
  )
};

export default Home;
