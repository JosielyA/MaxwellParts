import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import slider1 from "../assets/productos/IMG_0629.png";
import slider2 from "../assets/productos/IMG_0652.png";
import slider3 from "../assets/productos/IMG_0689.png";
import img2 from "../assets/icons_color/Call-center.png";
import blanco from "../assets/blanco diagonal.png";
import tigre from "../assets/tigre.jpg";
import dialogo from "../assets/icons/burbuja-de-dialogo.png";
import producto from "../assets/icons/producto.png";
import entrega from "../assets/icons/servicio-de-entrega.png";
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
      <div className="md:flex-wrap lg:flex justify-between z-20">
        <div>
          <div className="xl:absolute z-30 text-black xl:h-4/5 xl:w-6/12 flex items-center xl:ml-9 p-16">
            <div className="mx-10">
              <h1 className="font-bold text-6xl mb-2 uppercase">
                Calidad
                <span className="text-myred"> Garantizada.</span>
              </h1>
              <h2 className="font-bold text-xl mb-4 leading-6">
                Garantizamos la excelencia en cada artículo, desde la selección
                de materiales hasta el proceso de fabricación. Revisa nuestro...
              </h2>
              <Link
                to="/catalogo"
                className="bg-myred p-4 items-center text-white font-bold text-2xl xl:absolute"
              >
                Catalogo
              </Link>
            </div>
          </div>

          <img
            src={blanco}
            className="absolute  z-20 lg:w-4/6 invisible xl:visible"
          />
        </div>
        <div className="xl:w-7/12 w-full">
          <Carousel>
            {slides.map((s) => (
              <img src={s} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="z-50">
        <img
          src={img2}
          className="xl:-mt-10 xl:w-5/12 xl:h-5/6 xl:z-50 xl:ml-20 h-[500px] w-full absolute"
        />
        <div className="absolute z-30 text-black h-4/5 w-full flex items-center place-content-center">
          <div className="xl:mx-10 xl:w-5/12 w-9/12 xl:mt-20 xl:absolute inset-y-0 xl:right-12 bg-white bg-opacity-50 mb-16 p-4 xl:bg-transparent xl:p-0 xl:mb-0">
            <h1 className="font-bold text-3xl mb-2 uppercase xl:text-6xl">
              Servicio Al Cliente
              <span className="text-myred"> Excepcional.</span>
            </h1>
            <h2 className="font-bold text-2xl mb-4 xl:mb-2">
              Nuestra empresa se compromete a brindar un servicio al cliente
              excepcional, atento a sus necesidades y expectativas. Si tienes
              alguna sugerencia o duda...
            </h2>
            <Link
              to="/contacto"
              className="bg-myred p-4 items-center text-white font-bold text-xl xl:text-2xl xl:absolute"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="xl:mt-[650px] mt-[550px] mb-7 text-center uppercase font-bold">
          <h2 className="text-5xl mb-10">
            Lo que <span className="text-myred">ofrecemos</span>
          </h2>
          <div className="xl:flex flex-grap place-content-around">
            {ofrecemos.map((e) => (
              <div key={e.titulo} className="my-8 xl:my-0 p-5 xl:p-0">
                <div className="flex place-content-around">
                  <img src={e.imagen} className="size-32" />
                </div>
                <div className="flex place-content-around">
                  <h3 className="font-bold text-2xl mb-1">{e.titulo}</h3>
                </div>
                <div className="flex place-content-around leading-4 xl:w-[400px]">
                  <p>{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex place-content-around text-center mb-10">
          <Link
            to="/catalogo"
            className="bg-myred m-4 p-4 items-center text-white font-bold text-2xl"
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
