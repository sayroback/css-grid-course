import React from "react";
import { Link } from "react-router-dom";

export const HomeMain = () => {
  return (
    <main className="home-main">
      <section>
        <p className="home-main__text">
          Conoce las novedades y noticias del mundo Tech
        </p>
        <button className="home-main__button">
          <Link to="/project/blogs">Entra</Link>
        </button>
      </section>
    </main>
  );
};
