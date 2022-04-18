import { useContext } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Notification from '@/components/ui/Notification';
import NoteCtx, { NoteProvider } from '@/context/notification';

import styles from '@/styles/Layout.module.scss';

const Layout = ({ children }) => {
  const noteCtx = useContext(NoteCtx);

  console.log(noteCtx.data);

  return (
    <div className={styles.app}>
      <NoteProvider>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        {noteCtx.data && <Notification text={noteCtx.data.message} state={noteCtx.data.state} />}
      </NoteProvider>
    </div>
  );
};

export default Layout;
