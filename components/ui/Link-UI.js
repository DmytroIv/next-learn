import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/Link-UI.module.scss';

const LinkUI = ({ href, children, title = '', className = '' }) => {
  const router = useRouter();

  const activeClassName = router.pathname === href ? styles.active : '';

  return (
    <Link href={href} title={title}>
      <a className={`${styles.link} ${activeClassName} ${className}`}>{children}</a>
    </Link>
  );
};

export default LinkUI;
