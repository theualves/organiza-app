"use client";
import React from "react";
import Link from "next/link";

import Logo from "../../../public/assets/logo-header.svg";

function HeaderC() {
  return (
    <nav className="bg-custom-green">
      <div className="flex flex-wrap justify-between py-4 px-8">
        <a href="/" class="flex items-center">
          <img src={Logo} alt="logo-do-site" />
        </a>

        <div className="">
          <ul className="font-medium flex mr-2 p-4 md:p-0 items-center ">
            <li>
              <Link
                href="/login"
                className="block py-2 pl-3 pr-4  text-white text-lg hover:text-gray-300"
                aria-current="page"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/cadastro"
                className="block py-3 px-6 rounded border-2 border-white text-white text-lg hover:bg-hover-button hover:text-gray-300 hover:border-gray-300"
              >
                Cadastre-se
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default HeaderC;
