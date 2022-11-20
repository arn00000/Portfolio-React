import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Skill } from "./component/Skill";
import { Achievement } from "./component/Achievement";
import { Project } from "./component/Project";
import { About } from "./component/About";
import { Navbar } from "./component/Navbar";
import { Sidebar } from "./component/Sidebar";
import { BottomNav } from "./component/BottomNav";

function App() {
  return (
    <>
      <div className="lg:h-screen lg:flex">
        <div className="lg:w-4/5 mb-16 md:mb-24">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/aboutme" element={<About />} />
          </Routes>
          <BottomNav />
        </div>
        <div className="lg:w-1/5 hidden text-lg 2xl:text-2xl lg:grid fixed right-0 h-screen content-evenly bg-black text-white">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
