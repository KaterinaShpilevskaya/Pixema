import classNames from "classnames";
import React from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./Switch.module.css";

const Switch = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div
      className={classNames(styles.switcher, {
        [styles.activeButton]: theme === Theme.Light,
      })}
      onClick={() => onChangeTheme(Theme.Light)}
    >
      <div
        className={classNames(styles.circle, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={() => onChangeTheme(Theme.Dark)}
      ></div>
    </div>
  );
};

export default Switch;
