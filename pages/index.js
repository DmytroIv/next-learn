import { useState, useContext } from 'react';
import Head from 'next/head';
import { getFeaturedEvents } from '@/helpers/dummy-events';

import styles from '@/styles/Home.module.scss';
import EventsList from '@/components/Events-list';
import NotificationContext from '@/context/notification-context';

export default function Home({ a }) {
  const [postData, setPostData] = useState('');
  const notificationContext = useContext(NotificationContext);

  const submitHandle = async (e) => {
    e.preventDefault();

    const res = await fetch('./api/hello', {
      method: 'POST',
      body: JSON.stringify({
        value: postData,
      }),
    });

    const data = await res.json();

    console.log(data);

    notificationContext.showNotification({ text: 'Success POST request', status: 'success' });
  };

  const inputHandle = (e) => {
    const { value } = e.target;
    setPostData(value);
  };

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <input type="text" value={postData} onChange={inputHandle} />
      <button onClick={submitHandle}>Submit</button>

      <h1 className={styles.title}>Featured events list</h1>
      {<EventsList events={getFeaturedEvents()} />}
    </>
  );
}
