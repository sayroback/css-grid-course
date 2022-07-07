import React from "react";

export const HomeMain = () => {
  return (
    <main className="home-main">
      <section>
        <p className="home-main__text">
          Conoce las novedades y noticias del mundo Tech
        </p>
        <button className="home-main__button">
          <a href="/project/blogs">Entra</a>
        </button>
      </section>
    </main>
  );
};
