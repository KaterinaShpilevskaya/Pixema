import classNames from "classnames";
import React from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./Switch.module.css";

const disabled = false;

const Switch = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div
      onClick={() => {
        if (theme === Theme.Dark) {
          onChangeTheme(Theme.Light);
        } else {
          onChangeTheme(Theme.Dark);
        }
      }}
      className={classNames(styles.switcher, {
        [styles.darkSwitch]: theme === Theme.Dark,
      })}
    >
      <div
        className={classNames(styles.circle, {
          [styles.lightSwitch]: theme === Theme.Light,
          [styles.disabledSwitch]: disabled,
        })}
      />
    </div>
  );
};

export default Switch;
