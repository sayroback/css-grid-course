import React from "react";
import { LayoutBlog } from "./components/LayoutBlog";
import { PerfilMail } from "./components/PerfilMail";

export const Perfil = () => {
  return (
    <LayoutBlog className={"main"}>
      <PerfilMail />
    </LayoutBlog>
  );
};
