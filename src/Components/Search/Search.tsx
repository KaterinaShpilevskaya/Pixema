import React, { FC, useState, ChangeEvent, forwardRef } from "react";

import classNames from 'classnames';
import styles from './Search.module.css';

import { SearchFilteredIcon } from '../../Assets/icons/SearchFilteredIcon';
import { SearchIcon } from '../../Assets/icons/SearchIcon';
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

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

   const { theme } = useThemeContext();

   return (
      <div className={styles.container}>
         <input
            placeholder="Search"
            className={classNames(styles.input, { [styles.disabled]: disabled, 
               [styles.whiteTheme]: theme === Theme.Light,
               [styles.whiteThemeBorder]: theme === Theme.Light })}
            
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