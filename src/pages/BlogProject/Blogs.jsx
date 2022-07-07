import React from "react";
import { HeaderBlog } from "./components/HeaderBlog";
import { NavBlog } from "./components/NavBlog";
import { BlogsMain } from "./components/BlogsMain";

export const Blogs = () => {
  return (
    <div className="body-blog blogs">
      <header>
        <HeaderBlog />
        <NavBlog />
      </header>
      <BlogsMain />

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </footer>
    </div>
  );
};
