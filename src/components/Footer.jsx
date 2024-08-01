import React from "react";
import oso from "../assets/osoblanco.png";
import tiktok from "../assets/tik-tok.png";
import insta from "../assets/instagram.png";
import correo from "../assets/correo-electronico.png";
import whats from "../assets/whatsapp.png";

function Footer() {
  return (
    <div className="h-48 w-full place-content-center items-center space-y-3 bg-mygray text-white md:flex md:h-60 md:space-x-10 md:px-8">
      <div className="flex flex-col items-center space-y-1">
        <div className="flex place-content-center items-center">
          <img src={oso} className="w-32 md:w-48" />
        </div>
        <div className="flex space-x-2">
          <a href="https://www.tiktok.com/@maxwellparts" target="_blank">
            <img src={tiktok} alt="Tiktok" className="w-10" />
          </a>
          <a
            href="https://www.instagram.com/maxwell.parts/?hl=es"
            target="_blank"
          >
            <img src={insta} alt="Instagram" className="w-10" />
          </a>
          <a href="https://wa.me/584129697361" target="_blank">
            <img src={whats} alt="Whatsapp" className="w-10" />
          </a>
          <a href="mailto:admin@celena-internacional.com" target="_blank">
            <img src={correo} alt="Correo Electronico" className="w-10" />
          </a>
        </div>
      </div>
      <div className="px-1">
        <h3 className="text-center text-sm sm:text-base md:text-2xl xl:text-3xl">
          © 2024 Maxwell Parts. Todos los derechos reservados.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
