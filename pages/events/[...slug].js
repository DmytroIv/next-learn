import Head from 'next/head';
import Link from 'next/link';
import { getFilteredEvents } from '@/helpers/dummy-events';
import EventsList from '@/components/Events-list';

import styles from '@/styles/FilteredEvents.module.scss';
import { monthNames } from '@/helpers/helpers';

export default function FilteredEvents({ filteredEvents }) {
  if (filteredEvents) {
    return (
      <>
        <Head>
          <title>Events</title>
        </Head>
        {filteredEvents.length ? (
          <EventsList events={filteredEvents} />
        ) : (
          <div className={styles.noEvents}>
            <h2 className={styles.h2}>
              Sorry no events at this date - {year} {monthNames[month]}
            </h2>
            <Link href="/events">
              <button type="button">Browse all events</button>
            </Link>
          </div>
        )}
      </>
    );
  }

  return <h2 className={styles.h2}>...loading</h2>;
}

export async function getServerSideProps(context) {
  const {
    query: { slug },
  } = context;

  const year = slug[0];
  const month = slug[1];
  const filteredEvents = getFilteredEvents({ year, month });

  return {
    props: { filteredEvents },
  };
}
