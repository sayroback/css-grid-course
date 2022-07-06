import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro1 = () => {
  return (
    <LayoutLessonsPro>
      <LessonUI Lesson={"1--pro"} Title={"Propiedades del contenedor"} />
    </LayoutLessonsPro>
  );
};