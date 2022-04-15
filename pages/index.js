import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <h1 className={styles.title}>Featured events list</h1>
    </>
  );
}
