import React from "react";
import { BlogMain } from "./components/BlogMain";
import { LayoutBlog } from "./components/LayoutBlog";

export const Blog = () => {
  return (
    <LayoutBlog className={"blog"}>
      <BlogMain />
    </LayoutBlog>
  );
};
