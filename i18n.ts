import { getRequestConfig, getTimeZone } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  locale = locale || "pt-BR";
  const timeZone = await getTimeZone();
  
  return {
    locale,
    timeZone,
    messages: (await import(`../messages/${locale}/common.json`)).default
  };
});
