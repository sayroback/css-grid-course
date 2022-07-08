import React from "react";
import { BlogsMain } from "./components/BlogsMain";
import { Contact } from "./components/Contact";
import { LayoutBlog } from "./components/LayoutBlog";

export const Blogs = () => {
  return (
    <LayoutBlog className={"blogs"}>
      <BlogsMain />
      <Contact />
    </LayoutBlog>
  );
};
