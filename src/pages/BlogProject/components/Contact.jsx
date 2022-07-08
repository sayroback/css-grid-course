import React from "react";
import Contacto from "../assets/img/013-newsletter.png";
import Escribe from "../assets/img/006-like.png";

export const Contact = () => {
  return (
    <section className="contact-main">
      <div className="contact-main__left">
        <img src={Contacto} alt="" />
        <div>
          <a
            href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993"
            rel="noreferrer noopener"
            target="_blank"
          >
            Contacto
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptates.
          </p>
        </div>
      </div>
      <div className="contact-main__right">
        <img src={Escribe} alt="" />
        <div>
          <a
            href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993"
            rel="noreferrer noopener"
            target="_blank"
          >
            Escribe
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptates.
          </p>
        </div>
      </div>
    </section>
  );
};
