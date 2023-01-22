import React from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../Assets";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Categories = () => {
  const { pathname } = useLocation();
  const navButtons = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "Trends", icon: <TrendsIcon />, link: "/trends" },
    { name: "Favorites", icon: <FavoritesIcon />, link: "/favorites" },
    { name: "Settings", icon: <SettingsIcon />, link: "/settings" },
  ];

  return (
    <>
      <div className={styles.container}>
        {navButtons.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={classNames(styles.navButton, {
                [styles.activeNavButton]: pathname === item.link,
              })}
            >
              <div>{item.icon}</div>
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
