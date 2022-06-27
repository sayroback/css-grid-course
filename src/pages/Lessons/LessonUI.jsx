import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const LessonUI = ({ Lesson, Title }) => {
  return (
    <>
      <h1 className="Title">{`Lessons ${Lesson}: ${Title}`}</h1>
      <div className={`l${Lesson}__contenedor`}>
        <div className={`l${Lesson}__contenedor__item`}>1</div>
        <div className={`l${Lesson}__contenedor__item`}>2</div>
        <div className={`l${Lesson}__contenedor__item`}>3</div>
        <div className={`l${Lesson}__contenedor__item`}>4</div>
        <div className={`l${Lesson}__contenedor__item`}>5</div>
        <div className={`l${Lesson}__contenedor__item`}>6</div>
      </div>
      <h2 className="Title">{`Reto ${Lesson}`}</h2>
      <div className={`reto-l${Lesson}__contenedor`}>
        <div className={`reto-l${Lesson}__contenedor__item`}>1</div>
        <div className={`reto-l${Lesson}__contenedor__item`}>2</div>
        <div className={`reto-l${Lesson}__contenedor__item`}>3</div>
        <div className={`reto-l${Lesson}__contenedor__item`}>4</div>
        <div className={`reto-l${Lesson}__contenedor__item`}>5</div>
        <div className={`reto-l${Lesson}__contenedor__item`}>6</div>
      </div>
    </>
  );
};
