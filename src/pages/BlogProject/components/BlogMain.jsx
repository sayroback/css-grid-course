import React from "react";
import MainNews from "../assets/img/main-news-img.png";

export const BlogMain = () => {
  return (
    <main className="blogs-main blog-post">
      <section className="blog-post__img grid-container">
        <img src={MainNews} alt="" />
      </section>
      <section className="blog-post__main-container">
        <div className="grid-container">
          <h3>Noticias</h3>
          <article>
            <h1>Titulo del Blog Post</h1>
            <p></p>
            <p></p>
            <p></p>
          </article>
        </div>
      </section>
      <section className="contact-main">
        <div className="contact-main__left">
          <img src="" alt="" />
          <div>
            <a href="/">Contacto</a>
            <p></p>
          </div>
        </div>
        <div className="contact-main__right">
          <img src="" alt="" />
          <div>
            <a href="/">Escribe</a>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
};
