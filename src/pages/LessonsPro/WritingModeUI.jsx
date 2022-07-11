import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  writing-mode: ${(props) => props.writingMode};
`;
export const WritingModeUI = ({ Lesson, writingMode }) => {
  return (
    <>
      <Wrapper writingMode={writingMode} className={`l${Lesson}__wrapper`}>
        <div className={`l${Lesson}__wrapper__contenedor --1c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --1i`}>1</div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --2c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --2i`}>2</div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --3c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --3i`}>3</div>
        </div>
        <div className={`l${Lesson}__wrapper__contenedor --4c`}>
          <div className={`l${Lesson}__wrapper__contenedor__item --4i`}>4</div>
        </div>
      </Wrapper>
    </>
  );
};
