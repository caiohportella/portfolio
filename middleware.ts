import createMiddleware from "next-intl/middleware";
import { localeConfig } from "./i18n/routing";

export default createMiddleware(localeConfig);

export const config = {
  matcher: ["/", "/(pt-BR|en-US)/:path*"],
};
