import { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosInstance.get('/test')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return <h1 className="text-2xl p-5">{message}</h1>;
};

export default Home;
