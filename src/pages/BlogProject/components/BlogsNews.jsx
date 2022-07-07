import React from "react";
import MainNews from "../assets/img/main-news-img.png";

export const BlogsNews = () => {
  return (
    <section className="blogs-main__news-container">
      <div className="blogs-main__news-container__new">
        <h3>Soy un titulo</h3>
        <div className="blogs-main__news-container__new__img-container">
          <img src={MainNews} alt="" />
        </div>
        <div className="blogs-main__news-container__info">
          <h2>Título del blog post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deserunt voluptatum fugiat doloremque! Quaerat illo eaque inventore
            voluptates.
          </p>
          <a className="blogs-button" href="">
            Leer más
          </a>
        </div>
      </div>
    </section>
  );
};
