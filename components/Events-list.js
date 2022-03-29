import EventsListItem from '@/components/Events-list_item';
import styles from '@/styles/EventList.module.scss';

const EventsList = ({ events }) => {
  return (
    <div className={styles.eventList}>
      {events && events.map((event, i) => <EventsListItem key={i} {...event} />)}
      {!events && <h3>Sorry no events !</h3>}
    </div>
  );
};

export default EventsList;
