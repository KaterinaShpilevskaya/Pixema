import React from "react";
import CardsList from "../../Components/CardsList";
import Categories from "../../Components/Categories";
import OneCard from "../OneCard";
import SettingsPage from "../SettingsPage";
import SignIn from "../SignIn";

import styles from "./Home.module.css";

const MOCK_CARD = {
  id: 0,
  image:
    "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
  title: "Тут будет название фильма",
  genres: ["Жанр"],
  rating: 7,
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
        <Categories />
        {/* <CardsList cardsList={ MOCK_CARDS_LIST }  /> */}
        {/* <OneCard /> */}
       
        
       
      </div>
    </>
  );
};

export default Home;
