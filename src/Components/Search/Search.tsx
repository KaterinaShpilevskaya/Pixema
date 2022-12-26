import React, { FC, useState, ChangeEvent, forwardRef } from "react";

import classNames from 'classnames';
import styles from './Search.module.css';

import { SearchFilteredIcon } from '../../Assets/icons/SearchFilteredIcon';
import { SearchIcon } from '../../Assets/icons/SearchIcon';

type SearchProps = {
   value: string;
   // onChange: (value: string) => void;
   disabled: boolean;
   filters: boolean;
   className?: string;
};

const Search = forwardRef <HTMLInputElement, SearchProps> ((props, ref) => {
      
   const {
      value,
      // onChange,
      disabled,
      filters,
      className,
   } = props;

   return (
      <div className={styles.container}>
         <input
            placeholder="Search"
            className={classNames(styles.input, { [styles.disabled]: disabled })}
         />
      {filters ? (
         <div className={styles.svg}><SearchFilteredIcon /></div>
      ) : (
         <div className={styles.svg}><SearchIcon /></div>
      )}
   </div>
   );
});

export default Search;