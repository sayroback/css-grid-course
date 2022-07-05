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
          <NavLink to="/lessons-pro/1">Lessons1</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/2">Lessons2</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/3">Lessons3</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/4">Lessons4</NavLink>
        </li>
        <li>
          <NavLink to="/lessons-pro/5">Lessons5</NavLink>
        </li>
      </ol>
    </nav>
  );
};
