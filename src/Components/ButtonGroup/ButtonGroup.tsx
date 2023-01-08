import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./ButtonGroup.module.css";
import { BookMarkIcon } from "../../Assets/icons/BookMarkIcon";
import { ShareIcon } from "../../Assets/icons/ShareIcon";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

type ButtonGroupProps = {
   title?: ReactElement;
   onClick?: () => void;
   className?: string;
   disabled?: boolean;
};

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
   const { title, onClick, className, disabled } = props;

   const { theme } = useThemeContext();

   return (
      <div className={styles.ButtonGroup}>

      <div
         className={classNames(styles.button, styles.rightButton, className, {[styles.disabled]: !!disabled, [styles.whiteTheme]: theme === Theme.Light})}
         onClick={onClick}
      >
         {<BookMarkIcon />}
      </div>

      <div
         className={classNames(styles.button, styles.leftButton, className, {[styles.disabled]: !!disabled, [styles.whiteTheme]: theme === Theme.Light})}
         onClick={onClick}
      >
      {<ShareIcon />}
      </div>

      </div>
   );
};

export default ButtonGroup;
