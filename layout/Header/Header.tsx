import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { ButtonIcon } from "../../components";
import { IHeaderProps } from './Header.props';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '100%'
    }
  };

  return (
    <header className={ cn(className, styles.header) } { ...props }>
      <div className={ styles.logo }>Zoo... 🦉🐳🐜🦍🐆</div>
      <ButtonIcon icon="menu" appearance="white" onClick={ () => setIsOpen(true) } />
      <motion.div variants={ variants }
                  initial={ 'closed' }
                  animate={ isOpen ? 'opened' : 'closed' }
                  className={ styles.mobileMenu }>
        <Sidebar />
        <ButtonIcon className={ styles.menuClose }
                    icon="close"
                    appearance="white"
                    onClick={ () => setIsOpen(false) } />
      </motion.div>
    </header>
  );
};
