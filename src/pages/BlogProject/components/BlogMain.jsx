import React from "react";
import MainNews from "../assets/img/main-news-img.png";
import Contacto from "../assets/img/013-newsletter.png";
import Escribe from "../assets/img/006-like.png";

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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos officiis possimus placeat magnam reiciendis suscipit,
              saepe quas aliquam inventore iure perferendis quaerat, nobis sint
              quisquam quia corrupti similique? Pariatur, a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              tempora voluptates adipisci consequuntur at! Excepturi voluptates
              quibusdam, possimus veniam autem voluptate minus sequi harum
              eligendi, error asperiores nesciunt minima tempora!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit consequuntur molestias quo eum, ratione iusto aut
              inventore perferendis quaerat obcaecati iure delectus, est
              voluptas vero dignissimos neque nihil, blanditiis veniam?
            </p>
          </article>
        </div>
      </section>
      <section className="contact-main">
        <div className="contact-main__left">
          <img src={Contacto} alt="" />
          <div>
            <a href="/">Contacto</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptates.
            </p>
          </div>
        </div>
        <div className="contact-main__right">
          <img src={Escribe} alt="" />
          <div>
            <a href="/">Escribe</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
