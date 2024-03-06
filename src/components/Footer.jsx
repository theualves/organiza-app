"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

import Logo from "../..//public/assets/logo-organiza.svg";

export default function Footer() {
  return (
    <div>
      <div className="bg-black text-white py-16 px-52 flex items-start flex-wrap">
        <img src={Logo} alt="logo" />

        <div>
          <h1 className="text-2xl mb-10 ml-40 font-medium">Informações</h1>
          <a
            className="text-lg ml-40 text-bg-links hover:text-stone-50"
            href="/termos"
          >
            Termos e Condições
          </a>
        </div>

        <div>
          <h1 className="text-2xl mb-10 ml-40 font-medium">Contato</h1>
          <p className="text-lg ml-40 text-bg-links">programador@gmail.com</p>
          <p className="mt-2 text-lg ml-40 text-bg-links">(00) 12345-6789</p>
        </div>

        <div>
          <h1 className="text-2xl mb-10 ml-40 font-medium">Crie sua conta</h1>
          <a
            className="text-lg font-medium ml-40 border-2 border-gray-300 text-gray-300 rounded py-4 px-8 hover:bg-neutral-800 hover:text-white hover:border-white"
            href="/cadastro"
          >
            Começar agora
          </a>
        </div>
      </div>
      <p className="mt-auto bg-black text-white py-16 px-52 flex items-start flex-wrap text-bg-copyrights">
        Organiza © Alguns direitos reservados.
      </p>
    </div>
  );
}
