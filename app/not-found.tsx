import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NotFoundPage from "./_components/NotFoundPage";
import { headers } from "next/headers";

export default async function NotFound() {
  // In a Server Component, you can get the locale from the headers
  // For `not-found.tsx` outside of `[locale]` route group, the locale is not available via params.
  const locale = headers().get("x-next-intl-locale") || "en-US"; // Default to a locale if not found
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NotFoundPage />
    </NextIntlClientProvider>
  );
}
