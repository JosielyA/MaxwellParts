import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/nosotrosImg1.jpg";
import img2 from "../assets/nosotrosImg2.jpg";
import cooperar from "../assets/cooperar.png";
import mejorar from "../assets/mejorar.png";
import modernizar from "../assets/modernizar.png";
import simplificar from "../assets/simplificar.png";
import fifty from "../assets/50_50.png";

const logros = [
  {
    imagen: simplificar,
    titulo: "simplificar",
    texto:
      "¡Nuestra nueva oferta simplificará su forma de trabajar y le brindará una gran variedad de productos en el mercado. ¡Esperamos ayudarlo pronto!",
  },
  {
    imagen: modernizar,
    titulo: "modernizar",
    texto:
      "Estamos renovando nuestra imagen y estandarizando los empaques para una presentación modernizada y única de nuestros productos.",
  },
  {
    imagen: mejorar,
    titulo: "mejorar",
    texto:
      "Mejoramos nuestro servicio al cliente con un nuevo sistema de pedidos, lo que nos permite una gestión más eficiente de los pedidos. ¡Esperamos su opinión!",
  },
  {
    imagen: cooperar,
    titulo: "cooperar contigo",
    texto:
      "Siempre queremos escuchar a nuestros clientes, si tiene alguna pregunta o sugerencia...",
  },
];

function AboutPage() {
  return (
    <div>
      <div className="p-16">
        <h2 className="mb-8 text-5xl font-bold uppercase">Nosotros</h2>
        <div className="mb-5 flex place-content-around gap-10">
          <div className="basis-1/2">
            <img src={img1} />
          </div>
          <div className="w-40 basis-1/2">
            <h3 className="text-6xl font-bold text-myred">MAXWELL PARTS</h3>
            <h4 className="text-justify text-4xl font-bold">
              is always looking for the best insterest of their clients.
            </h4>
            <h4 className="text-justify text-4xl">
              Thats why our heads of corporation are always on the hunt to
              becoming leaders on the airconditioning and refrigeration parts
              buisiness.
            </h4>
          </div>
        </div>
        <div className="flex place-content-center items-center">
          <div className="w-11/12 sm:w-9/12">
            <img src={img2} className="w-full" />
          </div>
        </div>
        <div className="mb-10 mt-4 text-center text-4xl font-bold">
          <h3>Main business scope and industry: </h3>
          <h4 className="mt-3 basis-1/2 text-myred">
            Business of air-conditioning and refrigeration parts.
          </h4>
        </div>
        <div>
          <h2 className="text-5xl font-bold uppercase">Objetivo</h2>
          <p className="mb-10 mt-5 px-20 text-justify text-4xl font-normal">
            La satisfacción de los clientes es la clave de nuestra organización,
            nos esforzamos por servir de manera oportuna y evaluando
            constantemente nuestros servicios para satisfacer las demandas de
            nuestros clientes.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold uppercase">Logros</h2>
          <div className="mt-8 flex flex-wrap place-content-around gap-5">
            {logros.map((e) => (
              <div key={e.titulo} className="basis-1/4">
                <div className="flex place-content-around">
                  <img src={e.imagen} className="size-28" />
                </div>
                <div className="flex place-content-around">
                  <h3 className="text-2xl font-bold uppercase text-myred">
                    {e.titulo}
                  </h3>
                </div>
                <div className="flex place-content-around leading-4">
                  <p className="text-md text-center font-light leading-4">
                    {e.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex place-content-around text-center">
          <Link
            to="/contacto"
            className="m-4 items-center bg-myred p-4 text-2xl font-bold text-white"
          >
            Contactanos
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
