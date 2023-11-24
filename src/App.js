import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Statistics from "./screens/statistics/Statistics";
import Contact from "./screens/contact/Contact";
import NoPage from "./screens/nopage/NoPage";
import Game from "./components/game/Game";
import FlashCards from "./components/flash-card/FlashCards";
import UserStore from './contexts/user-context/UserContext';
import SignUp from "./screens/sign-up/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserStore>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/flash-mul" element={<FlashCards />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserStore>
    </div>
  );
}

export default App;
