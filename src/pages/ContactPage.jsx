import { useRef } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import map from "../assets/maps.png";
import face from "../assets/icons_color/facebook.png";
import whats from "../assets/icons_color/whats.png";
import insta from "../assets/icons_color/instagram.png";
import correo from "../assets/icons_color/correo-electronico.png";
import horario from "../assets/icons/horario.png";
import ubicacion from "../assets/icons/ubicacion.png";

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
      }
    );
  };
  return (
    <div>
      <div className="p-16">
        <h2 className="font-bold text-5xl mb-8 uppercase">Contactanos</h2>
        <div className="flex flex-wrap items-center place-content-between">
          <div className="text-5xl font-bold">
            <ul>
              <li className="my-5 flex items-center">
                <img src={face} className="size-20 mr-3" />
                <span>Facebook</span>
              </li>
              <li className="my-5 flex items-center">
                <img src={insta} className="size-20 mr-3" />
                <span>Instagram</span>
              </li>
              <li className="my-5 flex items-center">
                <img src={whats} className="size-20 mr-3" />
                <span>Whatsapp</span>
              </li>
              <li className="my-5 flex items-center">
                <img src={correo} className="size-20 mr-3" />
                <span>Correo</span>
              </li>
            </ul>
          </div>
          <a
            href="https://www.google.com/maps/place/Maxwell+Auto+Parts+Connection/@34.0253477,-157.4729516,3z/data=!4m10!1m2!2m1!1smaxwell+parts!3m6!1s0x80c2cfa718c8d7ab:0x1547fa55d9568aee!8m2!3d34.0216937!4d-118.1567088!15sCg1tYXh3ZWxsIHBhcnRzWg8iDW1heHdlbGwgcGFydHOSARBhdXRvX3BhcnRzX3N0b3Jl4AEA!16s%2Fg%2F1260fss27?hl=es&entry=ttu"
            className="lg:w-7/12 w-full"
          >
            <img src={map} alt="" className="" />
          </a>
        </div>

        <div className="flex 2xl:place-content-end 2xl:mr-[545px] mt-4 place-content-start mr-0">
          <img src={ubicacion} className="size-12" />
          <div className="flex-col ml-3">
            <h3 className="font-bold text-5xl text-myred">Dirección</h3>
            <h3 className="font-bold text-3xl">Maracaibo, Zulia.</h3>
            <h3 className="font-bold text-3xl">San Francisco, Zulia.</h3>
            <h3 className="font-bold text-3xl">Venezuela.</h3>
          </div>
        </div>
        <div className="flex 2xl:place-content-end 2xl:mr-[545px] mt-4 place-content-start mr-0">
          <img src={horario} className="size-12" />
          <div className="flex-col ml-3">
            <h3 className="font-bold text-5xl text-myred">Horario</h3>
            <h3 className="font-bold text-3xl">Lunes a Viernes.</h3>
            <h3 className="font-bold text-3xl">09:00am - 04:00pm.</h3>
          </div>
        </div>

        <div className="mt-14">
          <div className="grid place-items-center">
            <h2 className="font-bold text-5xl uppercase text-center text-black">
              Dejanos un mensaje.
            </h2>
            <div className="bg-myred h-2 w-[450px] rounded-full mt-1 mb-5"></div>
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
              className="border m-3 p-2 text-xl w-full placeholder-gray-700 rounded-md font-bold bg-gray-300 lg:w-4/12 h-14"
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              className="border m-3 p-2 text-xl w-full placeholder-gray-700 rounded-md font-bold bg-gray-300 lg:w-4/12 h-14"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="border m-3 p-2 text-xl w-full placeholder-gray-700 rounded-md font-bold bg-gray-300 lg:w-4/12 h-14"
            />
            <textarea
              className="border m-3 p-2 text-xl w-full placeholder-gray-700 rounded-md font-bold bg-gray-300 lg:w-4/12"
              placeholder="Mensaje"
              name="mensaje"
              cols="30"
              rows="5"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="bg-myred w-36 h-14 p-2 border shadow text-white font-bold text-2xl"
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
