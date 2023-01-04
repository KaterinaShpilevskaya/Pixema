import classNames from "classnames";
import React from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./Switch.module.css";

const Switch = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div
      onClick={() => onChangeTheme(Theme.Dark)}
      className={styles.switcher}
      
    >
      <div
      onClick={() => onChangeTheme(Theme.Light)}
        className={styles.circle}
      ></div>
    </div>
  );
};

export default Switch;
