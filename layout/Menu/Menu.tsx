import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, KeyboardEvent } from "react";
import { AppContext } from "../../context/app.context";
import { firstLevelMenu } from "../../helpers/helpers";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/Menu.interface";
import { motion } from 'framer-motion';

import cn from "classnames";
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
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
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>{ firstLevelMenu.map((m) => (
        <div key={ m.route }>
          <Link href={ `/${ m.route }` }>
            <a>
              <span className={ cn(styles.firstLevel, { [styles.firstLevelActive]: m.id === firstCategory }) }>
                <span>{ m.icon }</span>
                <span>{ m.name }</span>
              </span>
            </a>
          </Link>
          { m.id === firstCategory && buildSecondLevel(m) }
        </div>
      )) }</>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <div className={ styles.secondBlock }>
        { menu.map((m) => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={ m._id.secondCategory }>
              <div tabIndex={ 0 }
                   className={ styles.secondLevel }
                   onClick={ () => {
                     openSecondLevel(m._id.secondCategory);
                   } }
                   onKeyDown={ (e: KeyboardEvent) => {
                     if (e.code === 'Space' || e.code === 'Enter') {
                       e.preventDefault();
                       openSecondLevel(m._id.secondCategory);
                     }
                   } }
              >{ m._id.secondCategory }</div>
              <motion.div
                layout
                variants={ variants }
                initial={ m.isOpened ? 'visible' : 'hidden' }
                animate={ m.isOpened ? 'visible' : 'hidden' }
                className={ cn(styles.secondLevelBlock) }
              >
                { buildThirdLevel(m.pages, menuItem.route, !!m.isOpened) }
              </motion.div>
            </div>
          );
        }) }
      </div>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string, isOpened: boolean) => {

    return pages.map((p) => (
      <motion.div
        variants={ variantsChildren }

        key={ p.alias }
      >
        <Link href={ `/${ route }/${ p.alias }` }>
          <a tabIndex={ isOpened ? 0 : -1 } className={ cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${ route }/${ p.alias }` === router.asPath
          }) }>{ p.category }</a>
        </Link>
      </motion.div>
    ));
  };

  return (
    <div className={ styles.menu }>
      <div>
        { buildFirstLevel() }
      </div>
    </div>
  );
};
