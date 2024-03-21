import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Inputs) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:caiohportella@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-10">
        <h4 className="text-4xl font-semibold text-center mt-10 mb-2">
          Ficou interessado?{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Mande uma mensagem
          </span>
        </h4>

        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            {/* @ts-ignore */}
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(11) 93018-0307</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            {/* @ts-ignore */}
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Jundiaí, SP - Brasil</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            {/* @ts-ignore */}
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">caiohportella@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className=" flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Nome"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Assunto"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Mensagem"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
