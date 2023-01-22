import classNames from "classnames";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useThemeContext } from "../../Context/Theme";
import styles from "./PagesWrapper.module.css";
import { Theme } from "../../Constants/@types";

const PagesWrapper = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PagesWrapper;
