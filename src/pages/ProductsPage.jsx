import Footer from "../components/Footer";
import buscar from "../assets/buscar.png";
import algo from "../assets/IMG_0629.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { productsName } from "../data/data";
import axios from "axios";

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
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(params.search || "");

  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const productsRef = useRef(null);

  let filtrado = products.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  if (search) {
    filtrado = products.filter((p) =>
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

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://get-products-maxwell-production.up.railway.app/api/products",
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-200">
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
              className="w-full rounded-sm border-white bg-white px-2 py-4 text-xl text-black "
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
          className="mt-5 flex flex-wrap place-content-center gap-4 px-3"
        >
          {filtrado.length > 0 ? (
            filtrado
              .map(({ name, link }, f) => (
                <div
                  key={f}
                  className="h-[400px] w-[250px] items-end bg-white text-black md:h-[360px] md:w-[240px]"
                >
                  <div className="flex h-full w-full flex-col">
                    <div>
                      <img
                        src={link}
                        className="max-h-[280px] min-h-[255px] w-full md:max-h-[240px] md:min-h-[180px]"
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
