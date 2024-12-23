import React, { use, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState("pt-BR");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLanguage(newLocale);
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target={"_blank"}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        onClick={() => {
          window.location.href = "#contact";
        }}
      >
        {/* Email */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {t("contact")}
        </p>

        {/* Language Dropdown */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="ml-4 bg-transparent text-gray-400 border border-gray-400 rounded-md p-1 inline-flex items-center select-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
      </motion.div>
    </header>
  );
};

export default Header;
