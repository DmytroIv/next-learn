import Link from 'next/link';

import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">Home</Link>
    </footer>
  );
};

export default Footer;
