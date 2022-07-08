import React from "react";
import { GitHubIcon } from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export const HeaderBlog = () => {
  return (
    <>
      <section className="header-icons-container">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993"
            rel="noreferrer noopener"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/sayroback"
            rel="noreferrer noopener"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </section>
    </>
  );
};
