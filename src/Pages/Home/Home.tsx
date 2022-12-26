import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import NavBar from "../../Components/Categories";

import styles from "./Home.module.css";

const MOCK_CARD = {
  id: 0,
  image:
    "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
  title: "Тут будет название фильма",
  genres: ["Жанр"],
  rating: 0,
};

const MOCK_CARDS_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
];

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
