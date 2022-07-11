import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { LessonUI } from "./LessonUI";

export const LessonsPro2 = () => {
  return (
    <LayoutLessonsPro>
      <LessonUI
        Lesson={"5--pro"}
        Title={"Modos de escritura y ejes de alineamiento + Reto"}
      />
    </LayoutLessonsPro>
  );
};
