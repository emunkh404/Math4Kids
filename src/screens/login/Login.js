import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      Login
      <button onClick={() => handleNavigate("/home")}>Home</button>
      <button onClick={() => handleNavigate("/statistics")}>Statistics</button>
      <button onClick={() => handleNavigate("/contact")}>Contact</button>
    </div>
  );
}
