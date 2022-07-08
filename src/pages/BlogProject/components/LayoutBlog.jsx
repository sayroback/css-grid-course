import React from "react";
import { HeaderBlog } from "./HeaderBlog";
import { NavBlog } from "./NavBlog";
import { Footer } from "./Footer";

export const LayoutBlog = ({ children, className }) => {
  return (
    <div className={`body-blog ${className}`}>
      <header>
        <HeaderBlog />
        <NavBlog />
      </header>
      {children}
      <Footer />
    </div>
  );
};
