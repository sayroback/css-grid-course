import React from "react";
import { LayoutLessonsPro } from "./LayoutLessonsPro";
import { WritingMode } from "./WritingMode";

export const LessonsPro2 = () => {
  return (
    <LayoutLessonsPro>
      <WritingMode
        Lesson={"5--pro"}
        Title={"Modos de escritura y ejes de alineamiento Flex Box"}
      />
      <WritingMode
        Lesson={"6--pro"}
        Title={"Modos de escritura y ejes de alineamiento Grid"}
      />
    </LayoutLessonsPro>
  );
};
