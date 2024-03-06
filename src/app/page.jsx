"use client";
import Footer from "@/components/Footer";
import Desenvolva from "@/components/home/Desenvolva";
import HeaderC from "@/components/home/HeaderC";
import SeuDinheiro from "@/components/home/SeuDinheiro";
import LayoutAdmin from "@/components/login-cadastro/LayoutAdmin";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Background from "../../public/assets/vector-main.svg";
import vectorDec1 from "../../public/assets/vector-dec1.svg";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/principal");
    }
  }, [status, router]);

  return (
    <>
      <HeaderC />
      <section>
        <div>
          <div className="grid grid-cols-2 max-w-7xl mx-auto my-32 ">
            <div className="max-w-75">
              <h1 className="text-6xl font-semibold text-cor-fundo leading-tight mb-8 ">
                MANEJE SUAS FINANÇAS DE FORMA RÁPIDA E SEGURA.
              </h1>
              <p className="block text-2xl mb-8">
                O Gerenciador de finanças Organiza é privado, seguro e oferece
                uma organização financeira por áreas com porcentagens.
              </p>
              <button className="text-lg text-white font-medium bg-custom-green border-2 border-gray-300 rounded py-4 px-8 hover:bg-neutral-800 hover:text-white hover:border-white">
                <a href="/cadastro">Inicie agora</a>
              </button>
            </div>

            <img
              src={Background}
              alt="ilustração"
              className="ml-32 max-w-full"
            />
          </div>

          <div className="hidden h-60 bg-cor-fundo md:flex justify-center items-center">
            <p className="text-2xl font-semibold text-center text-white mr-6 w-56">
              faça o seu cadastro
            </p>
            <img src={vectorDec1} alt="vetor" className="mr-10" />

            <p className="text-2xl font-semibold text-white mr-10 w-56 text-center">
              crie um planejamento
            </p>
            <img src={vectorDec1} alt="vetor" className="mr-10" />

            <p className="text-2xl font-semibold text-white w-56 text-center">
              controle suas finanças
            </p>
          </div>
        </div>
      </section>
      <SeuDinheiro />
      <Desenvolva />
      <Footer />
    </>
  );
}
