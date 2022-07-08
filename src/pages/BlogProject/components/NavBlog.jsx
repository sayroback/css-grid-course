import React from "react";
import logoBlogNegro from "../assets/img/Logo-negro.png";

export const NavBlog = () => {
  return (
    <>
      <nav>
        <section className="nav-logo-container">
          <a href="/project">
            <img src={logoBlogNegro} alt="Logo del blog" />
          </a>
        </section>
        <section className="profile-link">
          <a href="project/perfil">Sobre mi</a>
        </section>
      </nav>
    </>
  );
};
