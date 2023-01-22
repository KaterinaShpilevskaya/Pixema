import React from "react";
import Button, { ButtonTypes } from "../../Button";

import { useNavigate } from "react-router-dom";
import { Theme } from "../../../Constants/@types";

import styles from "./Menu.module.css";
import { useThemeContext } from "../../../Context/Theme";
import classNames from "classnames";

const Menu = () => {
  const { theme } = useThemeContext();

  const isLoggedIn = true;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {isLoggedIn && (
        <div
          className={classNames(styles.buttonsContainer, {
            [styles.lightContainer]: theme === Theme.Light,
          })}
        >
          <Button
            title={"Edit profile"}
            onClick={() => {
              navigate("/settings");
            }}
            type={ButtonTypes.Secondary}
            className={classNames(styles.editProfileButton, {
              [styles.lighteditProfileButton]: theme === Theme.Light,
            })}
          />

          <Button
            title={"Log Out"}
            onClick={() => {}}
            type={ButtonTypes.Secondary}
            className={classNames(styles.logOutButton, {
              [styles.lightContainerLogout]: theme === Theme.Light,
            })}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
