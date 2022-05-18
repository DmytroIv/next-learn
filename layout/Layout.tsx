import { FunctionComponent, useState, KeyboardEvent, useRef } from "react";
import { ILayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "../context/app.context";

import cn from 'classnames';
import styles from './Layout.module.css';

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={ styles.wrapper }>
      <a className={ cn(styles.skipLink, { [styles.displayed]: isSkipLinkDisplayed }) }
         onFocus={ () => setIsSkipLinkDisplayed(true) }
         onKeyDown={ skipContentAction }
         tabIndex={ 1 }>Go to main content</a>
      <Header className={ styles.header } />
      <Sidebar className={ styles.sidebar } />
      <main className={ styles.body }>
        <div tabIndex={0} ref={bodyRef} >{ children }</div>
      </main>
      <Footer className={ styles.footer } />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {

  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={ props.menu } firstCategory={ props.firstCategory }>
        <Layout>
          <Component { ...props } />
        </Layout>
      </AppContextProvider>
    );
  };
};
