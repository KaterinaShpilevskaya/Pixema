import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./ButtonGroup.module.css";
import { BookMarkIcon } from "../../Assets/icons/BookMarkIcon";
import { ShareIcon } from "../../Assets/icons/ShareIcon";


type ButtonGroupProps = {
   title?: ReactElement;
   onClick?: () => void;
   className?: string;
   disabled?: boolean;
};

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
   const { title, onClick, className, disabled } = props;

   return (
      <div className={styles.ButtonGroup}>

      <div
         className={classNames(styles.button, styles.rightButton, className, {[styles.disabled]: !!disabled,})}
         onClick={onClick}
      >
      {<BookMarkIcon />}
      </div>

      <div
         className={classNames(styles.button, styles.leftButton, className, {[styles.disabled]: !!disabled,})}
         onClick={onClick}
      >
      {<ShareIcon />}
      </div>

      </div>
   );
};

export default ButtonGroup;