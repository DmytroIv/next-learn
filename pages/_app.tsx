import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from "next/head";

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My app</title>
      <meta name="description" content="My app" />
      <meta property="og:url" content={ process.env.NEXT_PUBLIC_DOMAIN + router.asPath } />
      <meta property="og:locale" content="en_US" />
    </Head>
    <Component { ...pageProps } />
  </>;
}

export default MyApp;
