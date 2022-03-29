import Link from 'next/link';

import { monthNames, wrapLocationByComa } from '@/helpers/helpers';
import styles from '@/styles/EventListItem.module.scss';

const EventsListItem = ({ id, title, location, date, image }) => {
  const dateObj = new Date(date);

  return (
    <div className={styles.eventListItem}>
      <div className={styles.image} style={{ backgroundImage: `URL(/${image})` }} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{`${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`}</p>
        <address>{wrapLocationByComa(location)}</address>
        <br />
        <Link href={`/events/${id}`}>
          <a className={styles.eventLink}>Explore Event</a>
        </Link>
      </div>
    </div>
  );
};

export default EventsListItem;
