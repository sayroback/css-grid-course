import React from "react";
import { BlogsNews } from "./BlogsNews";
import { BlogsPost } from "./BlogsPost";

export const BlogsMain = () => {
  return (
    <main className="blogs-main">
      <BlogsNews />
      <BlogsPost />
    </main>
  );
};
