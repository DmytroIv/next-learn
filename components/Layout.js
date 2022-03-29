import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from '@/styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
