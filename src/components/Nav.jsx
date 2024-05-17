import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-maxwell_100px.png";
import tiktok from "../assets/tik-tok.png";
import insta from "../assets/instagram.png";
import correo from "../assets/correo-electronico.png";
import whats from "../assets/whatsapp.png";
import buscar from "../assets/buscar.png";
import { useRef, useState } from "react";
import menu from "../assets/menu.png";

function Nav() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [isOpen, setIsOpen] = useState(true);

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
      <Link to="/" className="">
        <img
          src={logo}
          alt="Logo"
          className="absolute z-50 ml-5 mt-2 xl:size-24"
        />
      </Link>
      <div className="flex h-14 items-center justify-end bg-black text-white">
        <div className="hidden items-center space-x-2 sm:flex">
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

      <div className="relative flex h-14 items-center justify-end  bg-myred font-bold text-white sm:static ">
        <nav>
          <button onClick={toggleMenu} className="sm:hidden">
            <img src={menu} alt="menu icon" className="mr-5 size-8" />
          </button>

          <div
            className={`${isOpen ? "" : "translate-x-full sm:translate-x-0"} absolute left-0 right-0 z-50 mt-2 h-screen transform space-y-4 bg-black p-4 transition duration-300 sm:static sm:left-auto sm:right-0 sm:mr-5 sm:mt-0 sm:flex sm:h-full sm:space-x-7 sm:space-y-0 sm:bg-transparent sm:p-0 lg:space-x-12`}
          >
            {pages.map(({ nombre, route }, i) => (
              <div
                key={i}
                className={`flex place-content-center items-center py-2 sm:py-0 
                ${location == route && "bg-myred sm:bg-transparent"}`}
              >
                <Link to={route} onClick={toggleMenu}>
                  {nombre}
                </Link>
                <div
                  className={`${location == route ? "" : "opacity-0"} 
                  ${location == "/" && "w-[40px]"}
                  ${(location == "/catalogo" || location == "/nosotros") && "w-[75px]"} 
                  ${location == "/contacto" && "w-[70px]"}
                  mt-7 hidden h-[5px]  place-self-center rounded-full bg-white transition-all duration-500 sm:absolute sm:flex`}
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
