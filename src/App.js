import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Statistics from "./screens/statistics/Statistics";
import Contact from "./screens/contact/Contact";
import NoPage from "./screens/nopage/NoPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>     
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />      
      </Routes>
    </BrowserRouter>   
   </div>
  );
}

export default App;
