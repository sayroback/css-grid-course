import React from "react";

export const LessonUI = ({ Lesson, Title }) => {
  return (
    <>
      <h1 className="Title">{`Lessons ${Lesson}: ${Title}`}</h1>
      <div className={`l${Lesson}__wrapper`}>
        <div className={`l${Lesson}__wrapper__contenedor --1`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            top left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --2`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --2`}>
            center left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --3`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --3`}>
            bottom left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --4`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --4`}>
            top center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --5`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --5`}>
            center center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --6`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --6`}>
            bottom center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --7`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --7`}>
            top right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --8`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --8`}>
            center right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --9`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --9`}>
            bottom right
          </div>
        </div>
      </div>
    </>
  );
};
