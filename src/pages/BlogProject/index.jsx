import React from "react";
import "./styles/blog-project.scss";
import { HeaderBlog } from "./components/HeaderBlog";
import { NavBlog } from "./components/NavBlog";

export const BlogProject = () => {
  return (
    <div className="body-blog">
      <header>
        <HeaderBlog />
        <NavBlog />
      </header>
      <main className="home-main">
        <section>
          <p className="home-main__text">
            Conoce las novedades y noticias del mundo Tech
          </p>
          <button className="home-main__button">
            <a href="/">Entra</a>
          </button>
        </section>
      </main>
    </div>
  );
};
