import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import { defineRouting } from "next-intl/routing";
 
export const localeConfig = defineRouting({
  locales: ["en-US", "pt-BR"],
  defaultLocale: "pt-BR",
});
 
export type Locale = (typeof localeConfig.locales)[number];
 
export const {Link, redirect, permanentRedirect, usePathname, useRouter} = createLocalizedPathnamesNavigation(localeConfig);