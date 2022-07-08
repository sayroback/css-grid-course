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
          <a
            href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993"
            rel="noreferrer noopener"
            target="_blank"
          >
            Sobre mi
          </a>
        </section>
      </nav>
    </>
  );
};
