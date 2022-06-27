import React from "react";
import { LayoutLessons } from "./LayoutLessons";
import { LessonUI } from "./LessonUI";

export const Lessons1 = () => {
  return (
    <LayoutLessons>
      <LessonUI Lesson={"1"} Title={"Propiedades del contenedor"} />
    </LayoutLessons>
  );
};
