"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:caiohportella@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  }

  const t = useTranslations("Contact");

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        {t("heading")}
      </h3>

      <div className="flex flex-col space-y-4 sm:space-y-2 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        {/* <h4 className="hidden sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          {t("subtitleStart")}{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
          {t("subtitleEnd")}
          </span>
        </h4> */}

        <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-12 justify-start">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">(11) 93018-0307</p>
          </div>

          <div className="flex items-center space-x-12 justify-start">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">Jundiaí, SP - Brasil</p>
          </div>

          <div className="flex items-center space-x-12 justify-start">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">caiohportella@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className=" flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              className="contactInput w-70 md:w-auto"
              type="text"
              placeholder={t("name")}
            />
            <input
              {...register("email")}
              className="contactInput w-70 md:w-auto"
              type="email"
              placeholder={t("email")}
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder={t("subject")}
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder={t("message")}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
