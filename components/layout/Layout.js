import { useContext } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Notification from '@/components/ui/Notification';
import NoteCtx from '@/context/notification';

import styles from '@/styles/Layout.module.scss';

const Layout = ({ children }) => {
  const noteCtx = useContext(NoteCtx);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      {noteCtx.data && <Notification text={noteCtx.data.message} state={noteCtx.data.state} />}
    </div>
  );
};

export default Layout;
