import React from "react";
import "./styles/blog-project.scss";
import { HomeMain } from "./components/HomeMain";
import { LayoutBlog } from "./components/LayoutBlog";

export const BlogProject = () => {
  return (
    <LayoutBlog className={"main"}>
      <HomeMain />
    </LayoutBlog>
  );
};
