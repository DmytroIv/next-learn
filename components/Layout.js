import { useContext } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Notification from '@/components/ui/notification';

import NotificationContext from '@/context/notification-context';
import styles from '@/styles/Layout.module.scss';

const Layout = ({ children }) => {
  const notificationContext = useContext(NotificationContext);

  const activeNotification = notificationContext.notification;

  return (
    <div className={styles.app}>
      {activeNotification && <Notification text={activeNotification.text} status={activeNotification.status} />}
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
