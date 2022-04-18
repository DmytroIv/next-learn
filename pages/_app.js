import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { NoteProvider } from '@/context/notification';

import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <NoteProvider>
      <Layout>
        <Head>
          <meta name="description" content="Blogs" />
          <link rel="icon" href="/favicon.ico" />
          <title>Posts app</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NoteProvider>
  );
}

export default MyApp;
