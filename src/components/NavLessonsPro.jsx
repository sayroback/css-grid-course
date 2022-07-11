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
          <NavLink to="/lessons-pro/1">Lessons 1 y 2</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/2">Lessons 3 y 4</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/3">Lessons 5 y 6</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/4">Lessons 7 y 8</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/5">Lessons 9 y 10</NavLink>
        </li>
      </ol>
    </nav>
  );
};
