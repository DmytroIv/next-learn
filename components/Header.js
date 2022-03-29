import Link from 'next/link';
import LinkUI from '@/components/Link-UI';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">NextEvents</Link>
      <LinkUI href="/events">Browse all events</LinkUI>
    </header>
  );
};

export default Header;
