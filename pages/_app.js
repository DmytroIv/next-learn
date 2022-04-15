import Head from 'next/head';
import Layout from '@/components/Layout';
import { NotificationContextProvider } from '@/context/notification-context';

import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="description" content="Events" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
