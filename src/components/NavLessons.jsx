import React from "react";
import { NavLink } from "react-router-dom";

export const NavLessons = () => {
  return (
    <nav className="nav-lessons">
      <ol>
        <li>
          <NavLink to="/lessons">Index</NavLink>
        </li>
        <li>
          <NavLink to="/lessons/1">Lessons1</NavLink>
        </li>
        <li>
          <NavLink to="/lessons/2">Lessons2</NavLink>
        </li>
      </ol>
    </nav>
  );
};
