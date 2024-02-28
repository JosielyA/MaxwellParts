import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/nosotrosImg1.jpg";
import img2 from "../assets/nosotrosImg2.jpg";
import cooperar from "../assets/icons/cooperar.png";
import mejorar from "../assets/icons/mejorar.png";
import modernizar from "../assets/icons/modernizar.png";
import simplificar from "../assets/icons/simplificar.png";
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
        <h2 className="font-bold text-5xl mb-8 uppercase">Nosotros</h2>
        <div className="flex place-content-around gap-10 mb-5">
          <div className="basis-1/2">
            <img src={img1} />
          </div>
          <div className="basis-1/2 w-40">
            <h3 className="text-6xl font-bold text-myred">MAXWELL PARTS</h3>
            <h4 className="font-bold text-4xl text-justify">
              is always looking for the best insterest of their clients.
            </h4>
            <h4 className="text-justify text-4xl">
              Thats why our two heads of corporation: Mona Asshak and Mansour
              Eld Almeilla are always on the hunt to becoming leaders on the
              airconditioning and refrigeration parts buisiness.
            </h4>
          </div>
        </div>
        <div className="flex place-content-around gap-10 items-center">
          <div className="basis-1/4 text-4xl font-bold">
            <h3>Actual CEO: </h3>
            <h4 className="text-myred mt-3">Mona Asshak</h4>
          </div>
          <div className="basis-3/4 w-full ml-32">
            <img src={img2} className="w-full" />
          </div>
        </div>
        <div className="text-4xl font-bold text-end mt-10 mb-10">
          <h3>Main business scope and industry: </h3>
          <div className="flex">
            <div className="basis-1/2"></div>
            <h4 className="text-myred mt-3 basis-1/2">
              Business of air-conditioning and refrigeration parts.
            </h4>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-5xl uppercase">Objetivo</h2>
          <p className="font-bold text-4xl mt-5 px-20 text-justify mb-10">
            La satisfacción de los clientes es la clave de nuestra organización,
            nos esforzamos por servir de manera oportuna y evaluando
            constantemente nuestros servicios para satisfacer las demandas de
            nuestros clientes.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-5xl text-myred uppercase">
            Equity structure
          </h2>
          <div className="flex place-content-center">
            <img src={fifty} className="w-[1200px]" />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-5xl uppercase">Logros</h2>
          <div className="flex flex-wrap place-content-around gap-5 mt-8">
            {logros.map((e) => (
              <div key={e.titulo} className="basis-1/4">
                <div className="flex place-content-around">
                  <img src={e.imagen} className="size-28" />
                </div>
                <div className="flex place-content-around">
                  <h3 className="font-bold text-2xl text-myred uppercase">
                    {e.titulo}
                  </h3>
                </div>
                <div className="flex place-content-around leading-4">
                  <p className="text-center font-bold text-md leading-4">
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
            className="bg-myred m-4 p-4 items-center text-white font-bold text-2xl"
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
