import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro1 = () => {
  return (
    <LayoutLessonsPro>
      <LessonUI
        Lesson={"1--pro"}
        Title={"Técnicas de alineamiento antes de CSS Grid - Margin"}
      />
      <LessonUI
        Lesson={"2--pro"}
        Title={"Técnicas de alineamiento antes de CSS Grid - Line-height"}
      />
    </LayoutLessonsPro>
  );
};
