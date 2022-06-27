import React from "react";
import "./styles/project.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons";
import { Lessons1 } from "./pages/Lessons/Lessons1";
import { Lessons2 } from "./pages/Lessons/Lessons2";
import { Lessons3 } from "./pages/Lessons/Lessons3";

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
          <Route index element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
