import Footer from "../components/Footer";
import buscar from "../assets/buscar.png";
import Product from "../components/Product";
import algo from "../assets/productos/IMG_0629.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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
  const [products, setProducts] = useState(productos);
  const [search, setSearch] = useState(params.search || "");
  const [fill, setFill] = useState("");

  let filtrado = products;

  let lista_dropdown = ["quitar categoria"];

  for (let i = 0; i < productos.length - 1; i++) {
    let producto_tipo = productos[i].tipo;
    if (lista_dropdown.includes(producto_tipo)) {
    } else {
      lista_dropdown.push(producto_tipo);
    }
  }
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const filtrando = (e) => {
    e.preventDefault();
    if (e.target.categoria.value == "quitar categoria") setFill("");
    else {
      setFill(e.target.categoria.value);
    }
    setIsOpen((prev) => !prev);
  };

  if (fill && search) {
    let a = products.filter((p) =>
      p.tipo.toLowerCase().includes(fill.toLowerCase())
    );
    filtrado = a.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.marca.toLowerCase().includes(search.toLowerCase()) ||
        p.tipo.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (search && !fill) {
    filtrado = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.marca.toLowerCase().includes(search.toLowerCase()) ||
        p.tipo.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (fill && !search) {
    filtrado = products.filter((p) =>
      p.tipo.toLowerCase().includes(fill.toLowerCase())
    );
  }

  return (
    <div className="bg-gray-200">
      <div className="p-16">
        <h2 className="font-bold text-5xl mb-8 uppercase">Catalogo</h2>
        <div className="flex flex-wrap place-content-end">
          <div className="flex items-center mr-12">
            <div className="flex items-center place-content-end">
              <div className="relative flex flex-col items-center">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="bg-myred p-4 w-[175px] text-white font-bold text-xl text-start capitalize"
                >
                  {fill ? fill : "Categorias"}
                  {isOpen ? (
                    <IoIosArrowUp className="absolute size-12 text-black -mt-[35px] ml-[108px]" />
                  ) : (
                    <IoIosArrowDown className="absolute size-12 text-black -mt-[35px] ml-[108px]" />
                  )}
                </button>
                {isOpen ? (
                  <div className="absolute flex flex-col items-center text-center bg-myred mt-[60px] w-[175px]">
                    {lista_dropdown.map((item, i) => (
                      <form key={i} onSubmit={filtrando}>
                        <input value={item} type="hidden" name="categoria" />
                        <button
                          className={`w-full 
                          ${
                            item == "quitar categoria"
                              ? " text-black"
                              : "bg-myred text-white"
                          }
                          h-[50px] flex place-content-center items-center capitalize cursor-pointer text-xl font-bold `}
                        >
                          <h3>{item}</h3>
                        </button>
                      </form>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex place-content-end items-center">
            <input
              onChange={searcher}
              value={search}
              type="text"
              className=" h-14 lg:w-[500px] text-xl rounded-sm border-white p-2 text-black bg-white"
              placeholder="Buscar una pieza..."
            />
            <div className="absolute mt-1 mr-2 flex items-center">
              <button>
                <img src={buscar} alt="buscar" className="w-10 p-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap place-content-center">
          {filtrado.length > 0 ? (
            filtrado.map((p) => (
              <Product
                key={p.name}
                name={p.name}
                image={p.image}
                marca={p.marca}
              />
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
            className="m-5 p-6 bg-myred text-3xl font-bold text-white uppercase"
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
