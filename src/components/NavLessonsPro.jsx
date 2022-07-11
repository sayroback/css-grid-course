import React from "react";
import { NavLink } from "react-router-dom";

export const NavLessonsPro = () => {
  return (
    <nav className="nav-lessons">
      <ol>
        <li>
          <NavLink to="/lessons-pro">Index</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/1">
            Técnicas de alineamiento antes de CSS Grid
          </NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/2">
            Modos de escritura y ejes de alineamiento + Reto
          </NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/3">
            Técnicas de alineamiento con Flexbox
          </NavLink>
        </li>
        {/* 
        <li>
          <NavLink to="/lessons-pro/4">Lessons 7 y 8</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/5">Lessons 9 y 10</NavLink>
        </li> */}
      </ol>
    </nav>
  );
};
