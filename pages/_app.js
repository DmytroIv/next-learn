import Head from 'next/head';
import Layout from '@/components/layout/Layout';

import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Blogs" />
        <link rel="icon" href="/favicon.ico" />
        <title>Posts app</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
