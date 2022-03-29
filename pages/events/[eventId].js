import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getEventById } from '@/helpers/dummy-events';
import { wrapLocationByComa } from '@/helpers/helpers';
import styles from '@/styles/Event.module.scss';

const Event = ({}) => {
  const router = useRouter();
  const currentEvent = getEventById(router.query.eventId);

  if (currentEvent) {
    const { id, title, description, location, date, image, isFeatured } = currentEvent;

    return (
      <>
        <Head>
          <title>{title.slice(0, 25)}</title>
        </Head>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.eventInfoWrapper}>
          <div className={styles.eventInfo}>
            <div className={styles.image}>
              <img src={`/${image}`} alt={title} />
            </div>
            <div className="">
              <p>{date}</p>
              <address>{wrapLocationByComa(location)}</address>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </>
    );
  }

  return (
    <div>
      Sorry this event not exists any more, try another <Link href="/events">Browse all events</Link>
    </div>
  );
};

export default Event;
