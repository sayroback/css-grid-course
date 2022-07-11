import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro2 = () => {
  return (
    <LayoutLessonsPro>
      <LessonUI Lesson={""} Title={"Propiedades del contenedor"} />
    </LayoutLessonsPro>
  );
};
