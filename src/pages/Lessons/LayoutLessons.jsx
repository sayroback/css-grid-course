import React from "react";
import { NavLessons } from "../../components/NavLessons";

export const LayoutLessons = ({ children }) => {
  return (
    <div>
      {children}
      <NavLessons />
    </div>
  );
};
