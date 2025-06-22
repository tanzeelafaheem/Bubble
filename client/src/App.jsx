import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Test from './components/Others/Test';
import Profile from './components/Others/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/testing' element={<Test/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}

export default App