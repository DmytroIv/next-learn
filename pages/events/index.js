import { DUMMY_EVENTS, getAllEvents } from '@/helpers/dummy-events';
import EventsList from '@/components/Events-list';
import Filter from '@/components/Filter';

const Events = ({ dates, events }) => {
  return (
    <div>
      <Filter dates={dates} />
      {<EventsList events={events} />}
    </div>
  );
};

export async function getStaticProps(context) {
  const datesRaw = DUMMY_EVENTS.reduce(
    (acc, e) => {
      const date = new Date(e.date);

      return {
        years: { ...acc.years, [date.getFullYear()]: true },
        months: { ...acc.months, [date.getMonth()]: true },
      };
    },
    { years: {}, months: {} }
  );

  const dates = {
    years: [...Object.keys(datesRaw.years)],
    months: [...Object.keys(datesRaw.months)],
  };

  return {
    props: {
      dates,
      events: getAllEvents(),
    },
    // revalidate: 10, // get new data in 10 sec for build version
    // notFount: true, // if true will give 404 page
    /*redirect: { will redirect to /no-data rout
      destination: '/no-data'
    }*/
  };
}

export default Events;
