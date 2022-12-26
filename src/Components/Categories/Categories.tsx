import React, { useMemo } from "react";
import styles from "./Categories.module.css";
import { NavLink, useLocation } from "react-router-dom";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../Assets";
import classNames from "classnames";

const Categories = () => {
  const { pathname } = useLocation();
  const navButtons = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "Trends", icon: <TrendsIcon />, link: "" },
    { name: "Favorites", icon: <FavoritesIcon />, link: "" },
    { name: "Settings", icon: <SettingsIcon />, link: "/settings" },
  ];

  return (
    <>
      <div className={styles.container}>
        {navButtons.map(({ link, name, icon }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className={classNames(styles.navButton, {
                [styles.activeNavButton]: pathname === link,
              })}
            >
              {icon}
              {name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
