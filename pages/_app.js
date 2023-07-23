import Head from "next/head";
import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TokyoState>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Codeefly" />
        <title>Alberto Márquez</title>
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </TokyoState>
  );
}
