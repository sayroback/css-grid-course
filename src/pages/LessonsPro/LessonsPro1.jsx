import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro1 = () => {
  return (
    <LayoutLessonsPro>
      <h1>Técnicas de alineamiento antes de CSS Grid</h1>
      <LessonUI Lesson={"1--pro"} Title={"Margin"} />
      <LessonUI Lesson={"2--pro"} Title={"Line-height"} />
      <LessonUI Lesson={"3--pro"} Title={"Table-cell"} />
      <LessonUI Lesson={"4--pro"} Title={"Positions"} />
    </LayoutLessonsPro>
  );
};
