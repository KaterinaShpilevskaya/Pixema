import React, {FC, useState} from "react";
import { ArrowDownIcon } from "../../Assets/icons/ArrowDownIcon";
import { ArrowRightIcon } from "../../Assets/icons/ArrowRightIcon";
import { useThemeContext } from "../../Context/Theme";
import Button, { ButtonTypes } from "../Button";
import Menu from "./Menu";
import { Theme } from "../../Constants/@types";

import styles from "./UserName.module.css"
import classNames from "classnames";
import { Link } from "react-router-dom";

const registerUser = false;

type UserNameProps = {
   username: string;
};

const UserName: FC<UserNameProps> = ({ username }) => {

   const { theme } = useThemeContext();

   const [isOpened, setOpened] = useState(false);

   const onArrowClick = () => {
      setOpened(!isOpened);
   };

   return <div className={styles.container}>
            <div className={styles.letter}>{ username[0] }</div>
            <div className={classNames(styles.username,{ [styles.black]: theme === Theme.Light })}>
               {registerUser ? 'username' : 'Sign In' }
            </div>
               {
                  registerUser ?
                  <Button
                     title={isOpened ? <ArrowRightIcon /> : <ArrowDownIcon />}
                     onClick={onArrowClick}
                     type={ButtonTypes.Primary}
                     className={styles.arrowButton}
                  /> :
                  <Link to={`/sign-in`}>
                     <Button
                        title={<ArrowRightIcon />}
                        onClick={onArrowClick}
                        type={ButtonTypes.Primary}
                        className={styles.arrowButton}
                     />
                  </Link>
               }
               
               {isOpened && registerUser && <Menu />}
      </div>
};

export default UserName;
