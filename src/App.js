import React from "react";
import "./styles/lessons-styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons";
import { Lessons1 } from "./pages/Lessons/Lessons1";
import { Lessons2 } from "./pages/Lessons/Lessons2";
import { Lessons3 } from "./pages/Lessons/Lessons3";
import { Lessons4 } from "./pages/Lessons/Lessons4";
import { Lessons5 } from "./pages/Lessons/Lessons5";
import { Project } from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lessons">
          <Route path="1" element={<Lessons1 />} />
          <Route path="2" element={<Lessons2 />} />
          <Route path="3" element={<Lessons3 />} />
          <Route path="4" element={<Lessons4 />} />
          <Route path="5" element={<Lessons5 />} />
          <Route index element={<Lessons />} />
        </Route>
        <Route path="project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
