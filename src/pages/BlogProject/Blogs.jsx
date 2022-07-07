import React from "react";
import { HeaderBlog } from "./components/HeaderBlog";
import { NavBlog } from "./components/NavBlog";

export const Blogs = () => {
  return (
    <div className="body-blog">
      <header>
        <HeaderBlog />
        <NavBlog />
      </header>
      <main className="blogs-main">
        <section className="blogs-main__news-container">
          <div className="blogs-main__news-container__new">
            <h3></h3>
            <div className="blogs-main__news-container__new__img-container">
              <img src="" alt="" />
            </div>
          </div>
          <div className="blogs-main__news-container__info">
            <h2></h2>
            <p></p>
            <a className="blogs-button" href=""></a>
          </div>
        </section>
        <section className="blogs-main__posts-container">
          <div>
            <h3></h3>
            <article className="blogs-main__posts-container__post">
              <img src="" alt="" />
              <p></p>
              <p></p>
              <a href=""></a>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
