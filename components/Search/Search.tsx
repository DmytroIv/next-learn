import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/router";
import { ISearchProps } from "./Search.props";
import { Input } from "../Input/Input";

import { Button } from "../Button/Button";
import cn from 'classnames';
import styles from './Search.module.css';

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <form className={ cn(className, styles.search) } { ...props } role="search">
      <Input className={ styles.input }
             onChange={ (e) => setSearch(e.target.value) }
             onKeyDown={ handleKeyDown }
             placeholder="Search..."
             value={ search } />
      <Button appearance="primary"
              className={ styles.button }
              onClick={ goToSearch }
              aria-label="Search on the site."
      >🔍</Button>
    </form>
  );
};
