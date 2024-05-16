import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-maxwell_100px.png";
import tiktok from "../assets/tik-tok.png";
import insta from "../assets/instagram.png";
import correo from "../assets/correo-electronico.png";
import whats from "../assets/whatsapp.png";
import buscar from "../assets/buscar.png";
import { useRef, useState } from "react";
import { CloudSnow } from "react-feather";

function Nav() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  let usingLocation = useLocation();
  let location = usingLocation.pathname;

  const handleInput = (e) => {
    setBusqueda(e.target.value);
  };

  const goToSearch = (e) => {
    e.preventDefault();
    navigate(`/catalogo/${busqueda}`);
  };

  const pages = [
    {
      route: "/",
      nombre: "INICIO",
    },
    {
      route: "/catalogo",
      nombre: "CATALOGO",
    },
    {
      route: "/nosotros",
      nombre: "NOSOTROS",
    },
    {
      route: "/contacto",
      nombre: "CONTACTO",
    },
  ];
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Logo" className="absolute ml-5 mt-2 xl:size-24" />
      </Link>
      <div className="flex h-14 items-center justify-end bg-black text-white">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <form onSubmit={goToSearch}>
              <input
                onChange={handleInput}
                type="text"
                name="search"
                className={`h-9 rounded-sm border p-2 text-base text-black md:w-80
              ${location.includes("/catalogo") ? "hidden" : "visible"}
              `}
                placeholder="Buscar una pieza..."
              />
              <div className="absolute inset-y-0  end-0 flex items-center">
                <button>
                  <img src={buscar} alt="buscar" className="w-10 p-1" />
                </button>
              </div>
            </form>
          </div>
          <a href="https://www.tiktok.com/@maxwellparts" target="_blank">
            <img src={tiktok} alt="tiktok logo" className="w-10" />
          </a>
          <a
            href="https://www.instagram.com/maxwell.parts/?hl=es"
            target="_blank"
          >
            <img src={insta} alt="Instagram logo" className="w-10" />
          </a>
          <a href="https://wa.me/584129697361" target="_blank">
            <img src={whats} alt="Whatsapp logo" className="w-10" />
          </a>
          <a href="mailto:admin@celena-internacional.com" target="_blank">
            <img src={correo} alt="Email logo" className="w-10" />
          </a>
        </div>
      </div>
      <div className="flex h-14  items-center justify-end bg-myred font-bold  text-white ">
        <div className="mr-10 flex space-x-10">
          {pages.map(({ nombre, route }, i) => (
            <div key={i} className="flex place-content-center items-center">
              <Link to={route}>{nombre}</Link>
              <div
                className={`${location == route ? "" : "opacity-0"} absolute mt-7 h-[5px] w-[50px] 
        place-self-center rounded-full bg-white transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
