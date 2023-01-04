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
        if (theme === Theme.Light) {
          onChangeTheme(Theme.Dark);
        } else {
          onChangeTheme(Theme.Light);
        }
      }}
      className={classNames(styles.switcher,{ 
        [styles.whiteSwitch]: theme === Theme.Light ,
        [styles.disabledSwitch]: disabled,
        
    })}
    >
      < div className={classNames(styles.circle,{ 
          [styles.darkSwitch]: theme === Theme.Dark
      })} />
    </div>
  );
};

export default Switch;
