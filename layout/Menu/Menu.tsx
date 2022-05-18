import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, KeyboardEvent, useState } from "react";
import { AppContext } from "../../context/app.context";
import { firstLevelMenu } from "../../helpers/helpers";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/Menu.interface";
import { motion, useReducedMotion } from 'framer-motion';

import cn from "classnames";
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announced, setAnnounced] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnnounced(m.isOpened ? 'closed' : 'opened');
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <ul>{ firstLevelMenu.map((m) => (
        <li key={ m.route } aria-expanded={ m.id === firstCategory }>
          <Link href={ `/${ m.route }` }>
            <a>
              <span className={ cn(styles.firstLevel, { [styles.firstLevelActive]: m.id === firstCategory }) }>
                <span>{ m.icon }</span>
                <span>{ m.name }</span>
              </span>
            </a>
          </Link>
          { m.id === firstCategory && buildSecondLevel(m) }
        </li>
      )) }</ul>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <ul className={ styles.secondBlock }>
        { menu.map((m) => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={ m._id.secondCategory }>
              <button className={ styles.secondLevel }
                      onClick={ () => {
                        openSecondLevel(m._id.secondCategory);
                      } }
                      onKeyDown={ (e: KeyboardEvent) => {
                        if (e.code === 'Space' || e.code === 'Enter') {
                          e.preventDefault();
                          openSecondLevel(m._id.secondCategory);
                        }
                      } }
                      aria-expanded={ m.isOpened }
              >{ m._id.secondCategory }</button>
              <motion.ul
                layout
                variants={ variants }
                initial={ m.isOpened ? 'visible' : 'hidden' }
                animate={ m.isOpened ? 'visible' : 'hidden' }
                className={ cn(styles.secondLevelBlock) }
              >
                { buildThirdLevel(m.pages, menuItem.route, !!m.isOpened) }
              </motion.ul>
            </li>
          );
        }) }
      </ul>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string, isOpened: boolean) => {

    return pages.map((p) => (
      <motion.li
        variants={ variantsChildren }

        key={ p.alias }
      >
        <Link href={ `/${ route }/${ p.alias }` }>
          <a aria-current={ `/${ route }/${ p.alias }` === router.asPath ? 'page' : false }
             tabIndex={ isOpened ? 0 : -1 }
             className={ cn(styles.thirdLevel, {
               [styles.thirdLevelActive]: `/${ route }/${ p.alias }` === router.asPath
             }) }>{ p.category }</a>
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={ styles.menu } role="navigation">
      { announced && <span role="log"
                           className="visuallyHidden">{ announced === 'opened' ? 'Expanded' : 'Collapsed' }</span> }
      <div>
        { buildFirstLevel() }
      </div>
    </nav>
  );
};
