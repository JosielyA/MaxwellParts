import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-maxwell_100px.png";
import face from "../assets/facebook.png";
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

  const line_positions = {
    inicio: {
      inicio_xl: "xl:w-[50px] xl:mr-[730px]",
      inicio_md: "md:w-[50px] md:mr-[480px]",
      inicio_sm: "w-[45px] mr-[408px]",
    },
    catalogo: {
      inicio_xl: "xl:w-[80px] xl:mr-[518px]",
      inicio_md: "md:w-[80px] md:mr-[335px]",
      inicio_sm: "w-[70px] mr-[285px]",
    },
    nosotros: {
      inicio_xl: "xl:w-[80px] xl:mr-[290px]",
      inicio_md: "md:w-[80px] md:mr-[185px]",
      inicio_sm: "w-[70px] mr-[155px]",
    },
    contacto: {
      inicio_xl: "xl:w-[80px] xl:mr-[60px]",
      inicio_md: "md:w-[80px] md:mr-[30px]",
      inicio_sm: "w-[70px] mr-[22px]",
    },
  };

  return (
    <>
      <Link to="/">
        <img src={logo} alt="Logo" className="absolute xl:size-24 ml-5 mt-2" />
      </Link>
      <div className="flex h-14 bg-black text-white items-center justify-end">
        <div className="flex space-x-2 items-center">
          <div className="relative">
            <form onSubmit={goToSearch}>
              <input
                onChange={handleInput}
                type="text"
                name="search"
                className={`h-9 md:w-80 text-base rounded-sm border p-2 text-black
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
      <div className="flex h-14  bg-myred text-white items-center font-bold  justify-end ">
        <div
          className="xl:space-x-28 space-x-10
         xl:mr-12 mr-3 md:text-xl"
        >
          <Link to="/">INICIO</Link>
          <Link to="/catalogo">CATALOGO</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/contacto">CONTACTO</Link>
        </div>
        <div
          className={`bg-white h-[5px]  rounded-full absolute mt-8 
        invisible md:visible
        ${
          location == "/"
            ? `${line_positions.inicio.inicio_xl} ${line_positions.inicio.inicio_md} ${line_positions.inicio.inicio_sm}`
            : ""
        }
        ${
          location.includes("/catalogo")
            ? `${line_positions.catalogo.inicio_xl} ${line_positions.catalogo.inicio_md} ${line_positions.catalogo.inicio_sm}`
            : ""
        }
       ${
         location == "/nosotros"
           ? `${line_positions.nosotros.inicio_xl} ${line_positions.nosotros.inicio_md} ${line_positions.nosotros.inicio_sm}`
           : ""
       }
       ${
         location == "/contacto"
           ? `${line_positions.contacto.inicio_xl} ${line_positions.contacto.inicio_md} ${line_positions.contacto.inicio_sm}`
           : ""
       }
        
        w-[45px] mr-[408px]`}
        ></div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
