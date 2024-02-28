import React from "react";
import oso from "../assets/icons_color/oso-solo.png";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import correo from "../assets/correo-electronico.png";
import whats from "../assets/whatsapp.png";

function Footer() {
  return (
    <div className="bg-mygray text-white w-full h-52 flex place-content-center items-center p-10">
      <div>
        <div className="flex place-content-around mb-2">
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
        <h3 className="xl:text-3xl md:text-2xl text-xl">
          © 2024 Maxwell Parts. Todos los derechos reservados.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
