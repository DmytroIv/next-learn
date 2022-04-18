import LinkUI from '@/components/ui/Link-UI';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <LinkUI className="home" href="/">
          Home
        </LinkUI>
        <LinkUI href="/posts">Posts</LinkUI>
        <LinkUI href="/contact">Contact</LinkUI>
      </nav>
    </header>
  );
};

export default Header;
