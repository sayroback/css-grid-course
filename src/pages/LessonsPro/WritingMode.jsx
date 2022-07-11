import React from "react";
import { useState } from "react";
import { WritingModeUI } from "./WritingModeUI";

export const WritingMode = ({ Lesson, Title }) => {
  const [writingMode, setWritingMode] = useState("horizontal-tb");
  return (
    <>
      <h1 className="Title">{`Lessons ${Lesson}: ${Title}`}</h1>
      <div className="buttons-lessons__container">
        <button
          className="buttons-lessons"
          onClick={() => setWritingMode("horizontal-tb")}
        >
          horizontal-tb
        </button>
        <button
          className="buttons-lessons"
          onClick={() => setWritingMode("vertical-lr")}
        >
          vertical-lr
        </button>
        <button
          className="buttons-lessons"
          onClick={() => setWritingMode("vertical-rl")}
        >
          vertical-rl
        </button>
      </div>
      <h3>{writingMode}</h3>
      <WritingModeUI writingMode={writingMode} Lesson={Lesson} />
    </>
  );
};
