import React from "react";
import { NavLessonsPro } from "../../components/NavLessonsPro";

export const LayoutLessonsPro = ({ children }) => {
  return (
    <div>
      <NavLessonsPro />
      {children}
    </div>
  );
};
