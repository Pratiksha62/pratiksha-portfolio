import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Service } from "./Pages/Service";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import SideBar from "./Components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 bg-gray-100 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
