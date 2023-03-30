import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Box } from '@mui/material';
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Profile from './pages/Profile';
import { useState } from 'react';

const appStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}

function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
    <>
      <Box sx={appStyle}>
        <Routes>
          <Route path={"/"} element={<Home login={login} setLogin={setLogin}/>}/>
          <Route path={"/about"} element={<About />}/>
          <Route path={"/contact"} element={<Contact />}/>
          <Route path={"/profile/:id"} element={<Profile />}/>
          {login && <Route path={"/admin"} element={<Admin setLogin={setLogin}/>}/>}
          <Route path={"*"} element={<Error />}/>
        </Routes>
        <nav>
          <NavLink to={"/"} className="navItem">Home</NavLink>{" "}|{" "}
          <NavLink to={"/about"} className="navItem">About</NavLink>{" "}|{" "}
          <NavLink to={"/contact"} className="navItem">Contact</NavLink>{" "}|{" "}
          <NavLink to={"/profile"} className="navItem">Profile</NavLink>{" "}|{" "}
          <NavLink to={"/admin"} className="navItem">Admin</NavLink>
        </nav>
      </Box>
    </>
    </BrowserRouter>
    
  )
}

export default App
