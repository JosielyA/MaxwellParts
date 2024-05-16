import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import slider1 from "../assets/IMG_0629.png";
import slider2 from "../assets/IMG_0652.png";
import slider3 from "../assets/IMG_0689.png";
import img2 from "../assets/Call-center.png";
import blanco from "../assets/blanco diagonal.png";
import dialogo from "../assets/burbuja-de-dialogo.png";
import producto from "../assets/producto.png";
import entrega from "../assets/servicio-de-entrega.png";
import Footer from "../components/Footer";

const slides = [slider1, slider2, slider3];
const ofrecemos = [
  {
    imagen: entrega,
    titulo: "Entrega rapida",
    texto:
      "'Nuestra empresa se distingue por entregas rápidas y fiables.' Combina eficiencia y tecnología para un servicio excepcional. ",
  },
  {
    imagen: producto,
    titulo: "variedad de productos",
    texto:
      "'Explora una amplia variedad de productos en nuestra empresa.' Ofrecemos opciones para satisfacer las necesidades y gustos de todos.  ",
  },
  {
    imagen: dialogo,
    titulo: "ventas personalizadas",
    texto:
      "'Nuestra empresa ofrece ventas personalizadas para una experiencia única.' Adaptamos nuestros productos y servicios a tus preferencias. ",
  },
];
function IndexPage() {
  return (
    <>
      <div className="z-20 justify-between md:flex-wrap lg:flex">
        <div>
          <div className="z-30 flex h-[600px] items-center p-16 text-black lg:absolute lg:ml-9 lg:h-4/5 lg:w-6/12">
            <div className="mx-10">
              <h1 className="mb-2 text-6xl font-bold uppercase">
                Calidad
                <span className="text-myred"> Garantizada.</span>
              </h1>
              <h2 className="mb-4 text-xl font-light leading-6">
                Garantizamos la excelencia en cada artículo, desde la selección
                de materiales hasta el proceso de fabricación. Revisa nuestro...
              </h2>
              <Link
                to="/catalogo"
                className="items-center bg-myred p-4 text-2xl font-bold text-white lg:absolute"
              >
                Catalogo
              </Link>
            </div>
          </div>

          <img
            src={blanco}
            className="invisible  absolute z-20 lg:visible lg:w-4/6"
          />
        </div>
        <div className="w-full lg:w-7/12">
          <Carousel>
            {slides.map((s, i) => (
              <img key={i} src={s} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="z-50 mt-5 flex h-[600px] place-content-center lg:mt-0 lg:h-[700px] lg:place-content-start">
        <img
          src={img2}
          className="absolute h-[500px] w-full lg:z-50 lg:-mt-10 lg:ml-20 lg:h-[700px] lg:w-5/12"
        />
        <div className="absolute z-30 flex h-[700px] w-full place-content-center items-center text-black">
          <div className="inset-y-0 mb-56 w-full flex-col place-content-center items-center bg-gray-700/50 p-10 lg:absolute lg:right-12 lg:mx-10 lg:mb-0 lg:mt-20 lg:w-5/12 lg:bg-transparent lg:p-0">
            <h1 className="mb-2 text-xl font-bold uppercase md:text-3xl">
              Servicio Al Cliente
              <span className="text-myred"> Excepcional.</span>
            </h1>
            <h2 className="mb-4 text-lg font-light md:text-2xl lg:mb-2">
              Nuestra empresa se compromete a brindar un servicio al cliente
              excepcional, atento a sus necesidades y expectativas. Si tienes
              alguna sugerencia o duda...
            </h2>
            <Link
              to="/contacto"
              className="items-center bg-myred p-4 text-xl font-bold text-white lg:absolute lg:text-2xl"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-7 text-center font-bold uppercase">
          <h2 className="mb-10 text-5xl">
            Lo que <span className="text-myred">ofrecemos</span>
          </h2>
          <div className="flex-grap place-content-around lg:flex">
            {ofrecemos.map((e, f) => (
              <div key={f} className="my-8 p-5 lg:my-0 lg:p-0">
                <div className="flex place-content-around">
                  <img src={e.imagen} className="size-32" />
                </div>
                <div className="flex place-content-around">
                  <h3 className="mb-1 text-2xl font-bold">{e.titulo}</h3>
                </div>
                <div className="flex place-content-around leading-4 lg:w-[400px]">
                  <p className="text-sm font-light normal-case">{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10 flex place-content-around text-center">
          <Link
            to="/catalogo"
            className="m-4 items-center bg-myred p-4 text-2xl font-bold text-white"
          >
            Catalogo
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IndexPage;
