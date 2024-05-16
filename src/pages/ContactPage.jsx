import { useRef } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import map from "../assets/maps.png";
import tiktok from "../assets/tiktok2.png";
import whats from "../assets/whats-color.png";
import insta from "../assets/instagram-color.png";
import correo from "../assets/correo-electronico-color.png";
import horario from "../assets/horario.png";
import ubicacion from "../assets/ubicacion.png";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(
      emailjs
        .sendForm("service_lv26qfh", "template_huwzsas", form.current, {
          publicKey: "RGekvYqfLQqQrBBiq",
        })
        .then(() => {
          form.current.reset();
        }),
      {
        loading: "Saving...",
        success: <b>Mensaje enviado.</b>,
        error: <b>Error al enviar el mensaje.</b>,
      },
    );
  };
  return (
    <div>
      <div className="p-16">
        <h2 className="mb-8 text-5xl font-bold uppercase">Contactanos</h2>
        <div className="flex flex-wrap place-content-between items-center">
          <div className="text-3xl font-bold lg:w-4/12">
            <ul>
              <li className="my-5">
                <a
                  className="flex items-center"
                  href="https://www.tiktok.com/@maxwellparts"
                  target="_blank"
                >
                  <img src={tiktok} className="mr-3 size-16" />
                  <span>@maxwellparts</span>
                </a>
              </li>
              <li className="my-5">
                <a
                  className="flex items-center"
                  href="https://www.instagram.com/maxwell.parts/?hl=es"
                  target="_blank"
                >
                  <img src={insta} className="mr-3 size-16" />
                  <span>@maxwell.parts</span>
                </a>
              </li>
              <li className="my-5">
                <a
                  className="flex items-center"
                  href="https://wa.me/584129697361"
                  target="_blank"
                >
                  <img src={whats} className="mr-3 size-16" />
                  <span>0412-9697361</span>
                </a>
              </li>
              <li className="my-5">
                <a
                  className="flex items-center"
                  href="mailto:admin@celena-internacional.com"
                  target="_blank"
                >
                  <img src={correo} className="mr-3 size-16" />
                  <span>admin@celena-internacional.com</span>
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://www.google.com/maps/place/Maxwell+Auto+Parts+Connection/@34.0253477,-157.4729516,3z/data=!4m10!1m2!2m1!1smaxwell+parts!3m6!1s0x80c2cfa718c8d7ab:0x1547fa55d9568aee!8m2!3d34.0216937!4d-118.1567088!15sCg1tYXh3ZWxsIHBhcnRzWg8iDW1heHdlbGwgcGFydHOSARBhdXRvX3BhcnRzX3N0b3Jl4AEA!16s%2Fg%2F1260fss27?hl=es&entry=ttu"
            className="w-full lg:w-7/12"
          >
            <img src={map} alt="" className="" />
          </a>
        </div>

        <div className="mr-0 mt-4 flex place-content-start 2xl:mr-[545px] 2xl:place-content-end">
          <img src={ubicacion} className="size-12" />
          <div className="ml-3 flex-col">
            <h3 className="text-5xl font-bold text-myred">Dirección</h3>
            <h3 className="text-3xl font-bold">Maracaibo, Zulia.</h3>
            <h3 className="text-3xl font-bold">San Francisco, Zulia.</h3>
            <h3 className="text-3xl font-bold">Venezuela.</h3>
          </div>
        </div>
        <div className="mr-0 mt-4 flex place-content-start 2xl:mr-[545px] 2xl:place-content-end">
          <img src={horario} className="size-12" />
          <div className="ml-3 flex-col">
            <h3 className="text-5xl font-bold text-myred">Horario</h3>
            <h3 className="text-3xl font-bold">Lunes a Viernes.</h3>
            <h3 className="text-3xl font-bold">09:00am - 04:00pm.</h3>
          </div>
        </div>

        <div className="mt-14">
          <div className="grid place-items-center">
            <h2 className="text-center text-5xl font-bold uppercase text-black">
              Dejanos un mensaje.
            </h2>
            <div className="mb-5 mt-1 h-2 w-[450px] rounded-full bg-myred"></div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 place-items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="m-3 h-14 w-full rounded-md border bg-gray-300 p-2 text-xl font-bold placeholder-gray-700 lg:w-4/12"
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              className="m-3 h-14 w-full rounded-md border bg-gray-300 p-2 text-xl font-bold placeholder-gray-700 lg:w-4/12"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="m-3 h-14 w-full rounded-md border bg-gray-300 p-2 text-xl font-bold placeholder-gray-700 lg:w-4/12"
            />
            <textarea
              className="m-3 w-full rounded-md border bg-gray-300 p-2 text-xl font-bold placeholder-gray-700 lg:w-4/12"
              placeholder="Mensaje"
              name="mensaje"
              cols="30"
              rows="5"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="h-14 w-36 border bg-myred p-2 text-2xl font-bold text-white shadow"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
