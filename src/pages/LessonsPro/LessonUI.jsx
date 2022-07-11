import React from "react";

export const LessonUI = ({ Lesson, Title }) => {
  return (
    <>
      <h1 className="Title">{`Lessons ${Lesson}: ${Title}`}</h1>
      <div className={`l${Lesson}__wrapper`}>
        <div className={`l${Lesson}__wrapper__contenedor --1c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1i`}>
            top left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --2c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --2i`}>
            center left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --3c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --3i`}>
            bottom left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --4c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --4i`}>
            top center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --5c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --5i`}>
            center center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --6c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --6i`}>
            bottom center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --7c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --7i`}>
            top right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --8c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --8i`}>
            center right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --9c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --9i`}>
            bottom right
          </div>
        </div>
      </div>
    </>
  );
};
