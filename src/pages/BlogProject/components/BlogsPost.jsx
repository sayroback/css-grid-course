import React from "react";
import { Posts } from "./Posts";

export const BlogsPost = () => {
  return (
    <section className="blogs-main__posts-container">
      <div>
        <h3>Últimos blog post</h3>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </section>
  );
};
