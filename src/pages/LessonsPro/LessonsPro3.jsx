import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro3 = () => {
  return (
    <LayoutLessonsPro>
      <LessonUI
        Lesson={"7--pro"}
        Title={"Técnicas de alineamiento con Flexbox"}
      />
    </LayoutLessonsPro>
  );
};
