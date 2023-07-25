import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbarx from "./comp/Navbarx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./screens/Home";
import Admin from "./screens/Admin";
import Login from "./screens/Login";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarx />
      <ToastContainer />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
