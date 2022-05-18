import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from "next/head";

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My app</title>
      <meta name="description" content="My app" />
    </Head>
    <Component { ...pageProps } />
  </>;
}

export default MyApp;
