import React from "react";

export const LessonUI = ({ Lesson, Title }) => {
  return (
    <>
      <h1 className="Title">{`Lessons ${Lesson}: ${Title}`}</h1>
      <div className={`l${Lesson}__wrapper`}>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            top left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            center left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            bottom left
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            top center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            center center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            bottom center
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            top right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            center right
          </div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1`}>
            bottom right
          </div>
        </div>
      </div>
    </>
  );
};
