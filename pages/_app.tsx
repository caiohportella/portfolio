import { NextIntlClientProvider } from "next-intl";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, messages } = pageProps;
  const router = useRouter();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

export default MyApp;
