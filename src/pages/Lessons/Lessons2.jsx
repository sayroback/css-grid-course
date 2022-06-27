import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lessons2 = () => {
  return (
    <LayoutLessons>
      <h1>Lessons 2</h1>
      <div className="l2__contenedor">
        <div className="l2__contenedor__item 1">1</div>
        <div className="l2__contenedor__item 2">2</div>
        <div className="l2__contenedor__item 3">3</div>
        <div className="l2__contenedor__item 4">4</div>
        <div className="l2__contenedor__item 5">5</div>
        <div className="l2__contenedor__item 6">6</div>
      </div>
      <h2 className="Title">Reto 1</h2>
      <div className="l2__reto__contenedor">
        <div className="l2__reto__contenedor__item">1</div>
        <div className="l2__reto__contenedor__item">2</div>
        <div className="l2__reto__contenedor__item">3</div>
        <div className="l2__reto__contenedor__item">4</div>
        <div className="l2__reto__contenedor__item">5</div>
        <div className="l2__reto__contenedor__item">6</div>
      </div>
    </LayoutLessons>
  );
};
