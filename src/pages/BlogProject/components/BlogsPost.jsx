import React from "react";
import { Posts } from "./Posts";

export const BlogsPost = () => {
  return (
    <section className="blogs-main__posts-container">
      <div className="grid-container">
        <h3>Últimos blog post</h3>
        <div className="blogs-main__posts-container__posts">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </section>
  );
};
