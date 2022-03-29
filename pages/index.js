import Head from 'next/head';
import { getFeaturedEvents } from '@/helpers/dummy-events';

import styles from '@/styles/Home.module.scss';
import EventsList from '@/components/Events-list';

export default function Home() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <h1 className={styles.title}>Featured events list</h1>
      {<EventsList events={getFeaturedEvents()} />}
    </>
  );
}
