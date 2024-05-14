import Footer from "../components/Footer";
import buscar from "../assets/buscar.png";
import algo from "../assets/productos/IMG_0629.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { productsName } from "../data/data";

const productos = [
  {
    name: "CAPACITOR A AAAA AAAAAA AAAAA AAAAAA",
    image: algo,
    marca: "Maxwell",
    tipo: "capacitor",
  },
  {
    name: "CAPACITOR B",
    image: algo,
    marca: "Maxwell",
    tipo: "capacitor",
  },
  {
    name: "CAPACITOR C",
    image: algo,
    marca: "Maxwell",
    tipo: "capacitor",
  },
  {
    name: "BOBINA A",
    image: algo,
    marca: "Maxwell",
    tipo: "bobina",
  },
  {
    name: "BOBINA B",
    image: algo,
    marca: "Maxwell",
    tipo: "bobina",
  },
  {
    name: "BOBINA C",
    image: algo,
    marca: "Maxwell",
    tipo: "bobina",
  },
  {
    name: "CABLE A",
    image: algo,
    marca: "Maxwell",
    tipo: "cable",
  },
  {
    name: "CABLE B",
    image: algo,
    marca: "Maxwell",
    tipo: "cable",
  },
  {
    name: "CABLE C",
    image: algo,
    marca: "Maxwell",
    tipo: "cable",
  },
];

function ProductsPage(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const [products, setProducts] = useState(productsName);
  const [search, setSearch] = useState(params.search || "");
  const [fill, setFill] = useState("");

  let filtrado = products.sort((a, b) => {
    const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
    const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  let lista_dropdown = ["quitar categoria"];

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  if (search) {
    filtrado = products.filter((p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="bg-gray-200">
      <div className="p-16">
        <h2 className="mb-8 text-5xl font-bold uppercase">Catalogo</h2>
        <div className="flex flex-wrap place-content-end">
          <div className="flex place-content-end items-center">
            <input
              onChange={searcher}
              value={search}
              type="text"
              className=" h-14 rounded-sm border-white bg-white p-2 text-xl text-black lg:w-[500px]"
              placeholder="Buscar una pieza..."
            />
            <div className="absolute mr-2 mt-1 flex items-center">
              <button>
                <img src={buscar} alt="buscar" className="w-10 p-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap place-content-center">
          {filtrado.length > 0 ? (
            filtrado.map(({ nombre, url }, f) => (
              <div
                key={f}
                className="m-7 h-[500px] w-[400px] items-end bg-white text-black md:h-[380px] md:w-[250px]"
              >
                <div className="flex h-full w-full flex-col">
                  <div>
                    <img
                      src={`/src/images/${url}`}
                      className="max-h-[350px] min-h-[350px] w-full md:max-h-[230px] md:min-h-[230px]"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold uppercase leading-5">
                      {nombre}
                    </h2>
                  </div>
                  <div className="flex h-full place-content-end items-end  p-4 ">
                    <a
                      href={`https://wa.me/584129697361?text=${encodeURIComponent(`Hola! Quisiera información del producto '${nombre}' que esta publicado en su página web.`)}`}
                      target="_blank"
                      className="text-sm font-bold text-myred"
                    >
                      Pregunta por este producto.
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="m-10 text-3xl font-bold">
              No se encontró producto.
            </div>
          )}
        </div>
        <div className="flex place-content-center">
          <h2 className="text-6xl font-bold uppercase">
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
