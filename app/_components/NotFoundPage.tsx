"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const NotFoundPage = () => {
  const t = useTranslations("NotFound");

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen flex flex-col items-center justify-center space-y-3 px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl font-extrabold text-white md:text-9xl"
      >
        {t("heading")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-400 md:text-2xl"
      >
        {t("subheading")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/">
          <button className="heroButton mt-5 text-base md:text-lg flex items-center space-x-2">
            <span>{t("goHome")}</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
