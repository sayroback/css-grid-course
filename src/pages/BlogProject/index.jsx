import React from "react";
import "./styles/blog-project.scss";
import { HeaderBlog } from "./components/HeaderBlog";
import { NavBlog } from "./components/NavBlog";
import { HomeMain } from "./components/HomeMain";

export const BlogProject = () => {
  return (
    <div className="body-blog">
      <header>
        <HeaderBlog />
        <NavBlog />
      </header>
      <HomeMain />
    </div>
  );
};
