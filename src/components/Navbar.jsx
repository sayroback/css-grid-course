import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/lessons">Lessons</Link> |{" "}
        {/* <Link to="/lessons-pro">Lessons Pro</Link> |{" "} */}
        <Link to="/project">Project</Link> |{" "}
      </nav>
    </div>
  );
};
