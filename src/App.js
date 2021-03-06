import React from "react";
import "./styles/lessons-styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Lessons } from "./pages/Lessons";
import { Lessons1 } from "./pages/Lessons/Lessons1";
import { Lessons2 } from "./pages/Lessons/Lessons2";
import { Lessons3 } from "./pages/Lessons/Lessons3";
import { Lessons4 } from "./pages/Lessons/Lessons4";
import { Lessons5 } from "./pages/Lessons/Lessons5";
import { BlogProject } from "./pages/BlogProject";
import { LessonsPro } from "./pages/LessonsPro";
import { LessonsPro1 } from "./pages/LessonsPro/LessonsPro1";
import { LessonsPro2 } from "./pages/LessonsPro/LessonsPro2";
import { LessonsPro3 } from "./pages/LessonsPro/LessonsPro3";
import { Blogs } from "./pages/BlogProject/Blogs";
import { Blog } from "./pages/BlogProject/Blog";
import { Perfil } from "./pages/BlogProject/Perfil";
import { PortadaProject } from "./pages/PortadaProject";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogProject />} />
        <Route path="lessons">
          <Route path="1" element={<Lessons1 />} />
          <Route path="2" element={<Lessons2 />} />
          <Route path="3" element={<Lessons3 />} />
          <Route path="4" element={<Lessons4 />} />
          <Route path="5" element={<Lessons5 />} />
          <Route index element={<Lessons />} />
        </Route>
        <Route path="lessons-pro">
          <Route path="1" element={<LessonsPro1 />} />
          <Route path="2" element={<LessonsPro2 />} />
          <Route path="3" element={<LessonsPro3 />} />
          <Route index element={<LessonsPro />} />
        </Route>
        <Route path="project">
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="perfil" element={<Perfil />}></Route>
          <Route index element={<BlogProject />}></Route>
        </Route>
        <Route path="portada">
          <Route index element={<PortadaProject />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
