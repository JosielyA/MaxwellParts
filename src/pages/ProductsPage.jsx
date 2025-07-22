import Footer from "../components/Footer";
import buscar from "../assets/buscar.png";
import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Import all product images from src/assets/Productos
import img1 from "../assets/Productos/1 ADAPTADOR R-410.jpg";
import img2 from "../assets/Productos/2 AMBIENTADOR ENERGIA SOLAR.jpg";
import img3 from "../assets/Productos/3 AMPERIMETRO DIGITAL GRANDE MAXWELL.jpg";
import img4 from "../assets/Productos/4 AMPERIMETRO DIGITAL PEQUEÑO.jpg";
import img4b from "../assets/Productos/4 AMPERIMETRO.jpg";
import img5 from "../assets/Productos/5 ARMAFLEX MAXWELL TUBE.jpg";
import img6 from "../assets/Productos/6 BIMETAL DE NEVERA MAXWELL.jpg";
import img7 from "../assets/Productos/7 BIMETAL MAXWELL BLISTER LG 66151.jpg";
import img8 from "../assets/Productos/8 BIMETAL BLISTER SAMSUNG CABLE LARGO.jpg";
import img9 from "../assets/Productos/9 BIMETAL BLISTER SAMSUNG DA47101438.jpg";
import img10 from "../assets/Productos/10 BIMETAL MAXWELL BLISTER SAMSUNG DA4710150F.jpg";
import img11 from "../assets/Productos/11 BIMETAL MAXWELL BLISTER SAMSUNG DA4710160F.jpg";
import img12 from "../assets/Productos/12 BIMETAL MASTER BLISTER SAMSUNG DA4710160H.jpg";
import img13 from "../assets/Productos/13 BIMETAL MAXWELL BLISTER SAMSUNG WHIRPOOL.jpg";
import img14 from "../assets/Productos/14 BOMBONA AMARILLA.jpg";
import img15 from "../assets/Productos/15 CAPACITOR ACEITE MAXWELL.jpg";
import img16 from "../assets/Productos/16 CAPACITOR ACEITE MAXWELL.jpg";
import img17 from "../assets/Productos/17 CAPACITOR ACEITE MAXWELL.jpg";
import img18 from "../assets/Productos/18 CAPACITOR ACEITE MAXWELL.jpg";
import img19 from "../assets/Productos/19 CAPACITOR ACEITE MAXWELL.jpg";
import img20 from "../assets/Productos/20 CAPACITOR BLANCO.jpg";
import img21 from "../assets/Productos/21 CAPACITOR PLAST.jpg";
import img22 from "../assets/Productos/22  CAPACITOR PLAST.jpg";
import img23 from "../assets/Productos/23 CAPILAR MAXWELL ALTA CALIDAD.jpg";
import img24 from "../assets/Productos/24 CINTA DE ALUMINIO.jpg";
import img25 from "../assets/Productos/25 CINTA GRIS.jpg";
import img26 from "../assets/Productos/26 CODO DE COBRE.jpg";
import img27 from "../assets/Productos/27 COMPRESOR AA.jpg";
import img28 from "../assets/Productos/28 COMPRESOR NEVERA MAXWELL.jpg";
import img29 from "../assets/Productos/29 CONTACTOR MAXWEELL 2P.jpg";
import img30 from "../assets/Productos/30 CONTACTOR MAXWELL 3P.jpg";
import img31 from "../assets/Productos/31 COPA DE COBRE.jpg";
import img32 from "../assets/Productos/32 CORTA CAPILAR.jpg";
import img33 from "../assets/Productos/33 CORTA TUBO GRANDE HEAVY DUTY.jpg";
import img34 from "../assets/Productos/34 DOBLADOR DE TUBO.jpg";
import img35 from "../assets/Productos/35 FILTRO SECADOR.jpg";
import img36 from "../assets/Productos/36 FILTRO SECADOR.jpg";
import img37 from "../assets/Productos/37 FILTRO STRAINER.jpg";
import img38 from "../assets/Productos/38 FILTRO STRAINER 4 SALIDAS.jpg";
import img39 from "../assets/Productos/39 FORRO PARA LAVAR AIRE.jpg";
import img40 from "../assets/Productos/40 FUNDENTE PARA SOLDAR.jpg";
import img41 from "../assets/Productos/41 GOMAS PARA VALVULAS.jpg";
import img42 from "../assets/Productos/42 JUEGO DE MANGUERA PARA MANOMETRO.jpg";
import img43 from "../assets/Productos/43 MEDIDOR CAPILAR.jpg";
import img44 from "../assets/Productos/44 MONOMETRO CON MANG 36.jpg";
import img45 from "../assets/Productos/45 MOTOR 10W.jpg";
import img46 from "../assets/Productos/46 MOTOR VENT MAXWELL.jpg";
import img47 from "../assets/Productos/47 MULTIAMPERIMETRO CAPACIMETRO.jpg";
import img48 from "../assets/Productos/48 PICO PARA SOLDAR MAXWELL.jpg";
import img49 from "../assets/Productos/49 PROTECTOR DE VOLT 3.jpg";
import img50 from "../assets/Productos/50 PROTECTOR DE VOLT 120 VOL.jpg";
import img51 from "../assets/Productos/51 PROTECTOR DE VOLT 220V.jpg";
import img52 from "../assets/Productos/52 PROTECTOR DE VOLT.jpg";
import img53 from "../assets/Productos/53 PROTECTOR DE VOLTAJE 220V.jpg";
import img54 from "../assets/Productos/54 REALAY PARA TARJETA DE AIRE.jpg";
import img55 from "../assets/Productos/55 RELAY PTC.jpg";
import img56 from "../assets/Productos/56 RELAY CUCARACHA.jpg";
import img57 from "../assets/Productos/57 RELAY DE NEVERA 13HP.jpg";
import img58 from "../assets/Productos/58 RELAY FAN 364.jpg";
import img59 from "../assets/Productos/59 RELAY MARRON MAXWELL.jpg";
import img60 from "../assets/Productos/60 RELAY POTENCIAL.jpg";
import img62a from "../assets/Productos/62 RELOJ DE NEVERA AJUSTABLE.jpg";
import img62b from "../assets/Productos/62 RELOJ DE NEVERA.jpg";
import img63 from "../assets/Productos/63 RELOJ ROJO.jpg";
import img64 from "../assets/Productos/64 RESISTENCIA HIERRO MAXWELL.jpg";
import img65 from "../assets/Productos/65 RETARDADOR TIMER OF MAXWELL.jpg";
import img66 from "../assets/Productos/66 ROLINERA 6000.jpg";
import img67 from "../assets/Productos/67 ROLINERA 6006.jpg";
import img68a from "../assets/Productos/68 ROLINERA TUBO.jpg";
import img68b from "../assets/Productos/68 ROLINERA.jpg";
import img69 from "../assets/Productos/69 SENSOR PARA AC PUNTA NEGRA.jpg";
import img70 from "../assets/Productos/70 SENSOR.jpg";
import img71 from "../assets/Productos/71 SUPER START KIT.jpg";
import img72 from "../assets/Productos/72 TARJETA UNIVERSAL PARA AIRE.jpg";
import img73 from "../assets/Productos/73 TERMICO ELECTRINICO.jpg";
import img74 from "../assets/Productos/74 VALVULA DE PINCHAR MAXWELL.jpg";

// Array of all products
const productos = [
  { name: "ADAPTADOR R-410", image: img1 },
  { name: "AMBIENTADOR ENERGIA SOLAR", image: img2 },
  { name: "AMPERIMETRO DIGITAL GRANDE MAXWELL", image: img3 },
  { name: "AMPERIMETRO DIGITAL PEQUEÑO", image: img4 },
  { name: "AMPERIMETRO", image: img4b },
  { name: "ARMAFLEX MAXWELL TUBE", image: img5 },
  { name: "BIMETAL DE NEVERA MAXWELL", image: img6 },
  { name: "BIMETAL MAXWELL BLISTER LG 66151", image: img7 },
  { name: "BIMETAL BLISTER SAMSUNG CABLE LARGO", image: img8 },
  { name: "BIMETAL BLISTER SAMSUNG DA47101438", image: img9 },
  { name: "BIMETAL MAXWELL BLISTER SAMSUNG DA4710150F", image: img10 },
  { name: "BIMETAL MAXWELL BLISTER SAMSUNG DA4710160F", image: img11 },
  { name: "BIMETAL MASTER BLISTER SAMSUNG DA4710160H", image: img12 },
  { name: "BIMETAL MAXWELL BLISTER SAMSUNG WHIRPOOL", image: img13 },
  { name: "BOMBONA AMARILLA", image: img14 },
  { name: "CAPACITOR ACEITE MAXWELL", image: img15 },
  { name: "CAPACITOR ACEITE MAXWELL", image: img16 },
  { name: "CAPACITOR ACEITE MAXWELL", image: img17 },
  { name: "CAPACITOR ACEITE MAXWELL", image: img18 },
  { name: "CAPACITOR ACEITE MAXWELL", image: img19 },
  { name: "CAPACITOR BLANCO", image: img20 },
  { name: "CAPACITOR PLAST", image: img21 },
  { name: "CAPACITOR PLAST", image: img22 },
  { name: "CAPILAR MAXWELL ALTA CALIDAD", image: img23 },
  { name: "CINTA DE ALUMINIO", image: img24 },
  { name: "CINTA GRIS", image: img25 },
  { name: "CODO DE COBRE", image: img26 },
  { name: "COMPRESOR AA", image: img27 },
  { name: "COMPRESOR NEVERA MAXWELL", image: img28 },
  { name: "CONTACTOR MAXWEELL 2P", image: img29 },
  { name: "CONTACTOR MAXWELL 3P", image: img30 },
  { name: "COPA DE COBRE", image: img31 },
  { name: "CORTA CAPILAR", image: img32 },
  { name: "CORTA TUBO GRANDE HEAVY DUTY", image: img33 },
  { name: "DOBLADOR DE TUBO", image: img34 },
  { name: "FILTRO SECADOR", image: img35 },
  { name: "FILTRO SECADOR", image: img36 },
  { name: "FILTRO STRAINER", image: img37 },
  { name: "FILTRO STRAINER 4 SALIDAS", image: img38 },
  { name: "FORRO PARA LAVAR AIRE", image: img39 },
  { name: "FUNDENTE PARA SOLDAR", image: img40 },
  { name: "GOMAS PARA VALVULAS", image: img41 },
  { name: "JUEGO DE MANGUERA PARA MANOMETRO", image: img42 },
  { name: "MEDIDOR CAPILAR", image: img43 },
  { name: "MONOMETRO CON MANG 36", image: img44 },
  { name: "MOTOR 10W", image: img45 },
  { name: "MOTOR VENT MAXWELL", image: img46 },
  { name: "MULTIAMPERIMETRO CAPACIMETRO", image: img47 },
  { name: "PICO PARA SOLDAR MAXWELL", image: img48 },
  { name: "PROTECTOR DE VOLT 3", image: img49 },
  { name: "PROTECTOR DE VOLT 120 VOL", image: img50 },
  { name: "PROTECTOR DE VOLT 220V", image: img51 },
  { name: "PROTECTOR DE VOLT", image: img52 },
  { name: "PROTECTOR DE VOLTAJE 220V", image: img53 },
  { name: "REALAY PARA TARJETA DE AIRE", image: img54 },
  { name: "RELAY PTC", image: img55 },
  { name: "RELAY CUCARACHA", image: img56 },
  { name: "RELAY DE NEVERA 13HP", image: img57 },
  { name: "RELAY FAN 364", image: img58 },
  { name: "RELAY MARRON MAXWELL", image: img59 },
  { name: "RELAY POTENCIAL", image: img60 },
  { name: "RELOJ DE NEVERA AJUSTABLE", image: img62a },
  { name: "RELOJ DE NEVERA", image: img62b },
  { name: "RELOJ ROJO", image: img63 },
  { name: "RESISTENCIA HIERRO MAXWELL", image: img64 },
  { name: "RETARDADOR TIMER OF MAXWELL", image: img65 },
  { name: "ROLINERA 6000", image: img66 },
  { name: "ROLINERA 6006", image: img67 },
  { name: "ROLINERA TUBO", image: img68a },
  { name: "ROLINERA", image: img68b },
  { name: "SENSOR PARA AC PUNTA NEGRA", image: img69 },
  { name: "SENSOR", image: img70 },
  { name: "SUPER START KIT", image: img71 },
  { name: "TARJETA UNIVERSAL PARA AIRE", image: img72 },
  { name: "TERMICO ELECTRINICO", image: img73 },
  { name: "VALVULA DE PINCHAR MAXWELL", image: img74 },
];

function ProductsPage(props) {
  const params = useParams();
  const [search, setSearch] = useState(params.search || "");
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const productsRef = useRef(null);

  // Filtering and sorting
  let filtrado = productos.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  const searcher = (e) => {
    setCurrentPage(() => 1);
    setSearch(e.target.value);
  };
  if (search) {
    filtrado = productos.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const productsQuantity = filtrado.length;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    pageNumbers.push(i);
  }
  const onSpecificPage = (n) => {
    setCurrentPage(n);
    scrollToSection(productsRef);
  };
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white">
      <div className="pt-10">
        <h2 className="mb-8 px-10 text-center text-5xl font-bold uppercase sm:text-start">
          Catalogo
        </h2>
        <div className="flex flex-wrap place-content-center md:place-content-end">
          <div className="flex w-10/12 place-content-end items-center sm:mr-14 sm:w-5/12">
            <input
              onChange={searcher}
              value={search}
              type="text"
              className="w-full rounded-sm border-white bg-slate-200 px-5 py-5 text-xl text-black placeholder-slate-500 "
              placeholder="Buscar una pieza..."
            />
            <div className="absolute mr-2 mt-1 flex items-center">
              <button>
                <img src={buscar} alt="buscar" className="w-10 p-1" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={productsRef}
          className={`${filtrado.length <= productsPerPage && "mb-5"} mt-5 flex flex-wrap place-content-center gap-4 px-3`}
        >
          {filtrado.length > 0 ? (
            filtrado
              .map(({ name, image }, f) => (
                <div
                  key={f}
                  className="h-[400px] w-[250px] items-end bg-white text-black drop-shadow-[0_5px_5px_rgba(0,0,0,1)] md:h-[360px] md:w-[240px] lg:h-[400px] lg:w-[20%]"
                >
                  <div className="flex h-full w-full flex-col">
                    <div>
                      <img
                        src={image}
                        className="max-h-[280px] min-h-[255px] w-full md:max-h-[240px] md:min-h-[180px] lg:max-h-[17rem]"
                        alt={name}
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-bold uppercase leading-5">
                        {name}
                      </h2>
                    </div>
                    <div className="flex h-full place-content-end items-end  p-4 ">
                      <a
                        href={`https://wa.me/584129697361?text=${encodeURIComponent(`Hola! Quisiera información del producto '${name}' que esta publicado en su página web.`)}`}
                        target="_blank"
                        className="text-sm font-bold text-myred"
                        rel="noopener noreferrer"
                      >
                        Pregunta por este producto.
                      </a>
                    </div>
                  </div>
                </div>
              ))
              .slice(firstIndex, lastIndex)
          ) : (
            <div className="m-10 text-3xl font-bold">
              No se encontró producto.
            </div>
          )}
        </div>
        <div className={`${filtrado.length > productsPerPage ? "" : "hidden"}`}>
          <div className="flex flex-wrap place-content-center items-center gap-3 p-5">
            {pageNumbers.map((nopage) => (
              <button
                key={nopage}
                onClick={() => onSpecificPage(nopage)}
                className={`${currentPage == nopage ? "bg-white text-myred outline outline-1 outline-myred" : "bg-myred  text-white"} size-10 text-2xl`}
              >
                {nopage}
              </button>
            ))}
          </div>
        </div>
        <div className="flex place-content-center">
          <h2 className="text-center text-4xl font-bold uppercase sm:px-10 sm:text-5xl">
            ¿No has encontrado lo que buscabas?
          </h2>
        </div>
        <div className="flex place-content-center">
          <Link
            to="/contacto"
            className="m-5 bg-myred p-6 text-3xl font-bold uppercase text-white"
          >
            Contactanos
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
