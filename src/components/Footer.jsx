import React from "react";
import oso from "../assets/oso-solo-color.png";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import correo from "../assets/correo-electronico.png";
import whats from "../assets/whatsapp.png";

function Footer() {
  return (
    <div className="flex h-52 w-full place-content-center items-center bg-mygray p-10 text-white">
      <div>
        <div className="mb-2 flex place-content-around">
          <img src={oso} className="w-60 md:w-48" />
        </div>
        <div className="flex space-x-2">
          <a href="#">
            <img src={face} alt="Facebook" className="w-10" />
          </a>
          <a href="#">
            <img src={insta} alt="Instagram" className="w-10" />
          </a>
          <a href="#">
            <img src={whats} alt="Whatsapp" className="w-10" />
          </a>
          <a href="#">
            <img src={correo} alt="Correo Electronico" className="w-10" />
          </a>
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-xl md:text-2xl xl:text-3xl">
          © 2024 Maxwell Parts. Todos los derechos reservados.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
