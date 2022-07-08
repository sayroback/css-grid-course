import React from "react";
import MainNews from "../assets/img/main-news-img.png";
import { Contact } from "./Contact";
import { Post } from "./Post";

export const BlogMain = () => {
  return (
    <main className="blogs-main blog-post">
      <section className="blog-post__img grid-container">
        <img src={MainNews} alt="" />
      </section>
      <Post />
      <Contact />
    </main>
  );
};
