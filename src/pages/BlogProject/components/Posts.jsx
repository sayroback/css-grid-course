import React from "react";
import FirstPost from "../assets/img/post-1.png";

export const Posts = () => {
  return (
    <article className="blogs-main__posts-container__post">
      <img src={FirstPost} alt="" />
      <p>Título del blog post</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        deserunt voluptatum fugiat doloremque! Quaerat illo eaque inventore
        voluptates.
      </p>
      <a className="blogs-button" href="/project/blog">
        Leer más
      </a>
    </article>
  );
};
