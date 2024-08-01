import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoo.png";

import { useRef, useState } from "react";
import menu from "../assets/menu.png";

import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { BiSearch } from "react-icons/bi";

function Nav() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  let usingLocation = useLocation();
  let location = usingLocation.pathname;

  const handleInput = (e) => {
    setBusqueda(e.target.value);
  };

  const goToSearch = (e) => {
    e.preventDefault();
    navigate(`/catalogo/${busqueda}`);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(() => false);
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
    <div className="overflow-hidden">
      <Link to="/" onClick={closeMenu}>
        <img
          src={logo}
          alt="Logo"
          className=":w-36 absolute z-50 ml-10 mt-2 w-40 xl:w-44"
        />
      </Link>
      <div
        onClick={closeMenu}
        className="flex h-20 items-center justify-end bg-white text-white"
      >
        <div className="mr-2 hidden items-center space-x-0 sm:flex">
          <div className="relative">
            <form onSubmit={goToSearch} className="hidden md:flex">
              <input
                onChange={handleInput}
                type="text"
                name="search"
                className={`h-14 rounded-sm border border-black p-2 text-xl text-black placeholder-slate-500 md:w-[18rem] lg:w-[23rem]
              ${location.includes("/catalogo") ? "hidden" : "visible"}
              `}
                placeholder="Buscar una pieza..."
              />
              <div className="absolute inset-y-0 end-0 flex items-center">
                <button>
                  <BiSearch className="mr-2 size-10 text-black" />
                </button>
              </div>
            </form>
          </div>
          <a href="https://www.tiktok.com/@maxwellparts" target="_blank">
            <AiFillTikTok className="size-[4.5rem] text-black" />
          </a>
          <a
            href="https://www.instagram.com/maxwell.parts/?hl=es"
            target="_blank"
          >
            <FaSquareInstagram className="size-[4.2rem] text-black" />
          </a>
          <a href="https://wa.me/584129697361" target="_blank">
            <FaSquareWhatsapp className="size-[4.2rem] text-black" />
          </a>
          <a href="mailto:admin@celena-internacional.com" target="_blank">
            <ImMail className="size-[4.2rem] p-1 text-black" />
          </a>
        </div>
      </div>

      <div className="relative flex h-16 items-center justify-end  bg-white font-bold text-white sm:static ">
        <nav>
          <button onClick={toggleMenu} className="sm:hidden">
            <img src={menu} alt="menu icon" className="mr-5 size-8" />
          </button>

          <div
            className={`${isOpen ? "" : "translate-x-full sm:translate-x-0"} absolute left-0 right-0 z-50 mt-2 transform space-y-4 bg-white p-4 text-black transition duration-300 sm:static sm:left-auto sm:right-0 sm:mr-5 sm:mt-0 sm:flex sm:h-full sm:space-x-7 sm:space-y-0 sm:bg-transparent sm:p-0 lg:space-x-12`}
          >
            {pages.map(({ nombre, route }, i) => (
              <div
                key={i}
                className={`flex place-content-center items-center py-2 sm:py-0 
                ${location == route && "bg-myred sm:bg-transparent"}`}
              >
                <Link to={route} onClick={closeMenu} className="md:text-xl">
                  {nombre}
                </Link>
                <div
                  className={`${location == route ? "" : "opacity-0"} 
                  ${location == "/" && "w-[40px]"}
                  ${(location == "/catalogo" || location == "/nosotros") && "w-[75px]"} 
                  ${location == "/contacto" && "w-[70px]"}
                  mt-7 hidden h-[5px]  place-self-center rounded-full bg-black transition-all duration-500 sm:absolute sm:flex`}
                ></div>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
