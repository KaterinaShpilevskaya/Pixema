import classNames from "classnames";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import ButtonGroup from "../../Components/ButtonGroup";
import CardsList from "../../Components/CardsList";
import Categories from "../../Components/Categories";
import cardsSelectors from "../../Redux/Selectors/cardsSelectors";
import { getSelectedCard } from "../../Redux/Reducers/CardsReducer";
import { Theme } from "../../Constants/@types";

import styles from "./OneCard.module.css";
import { useThemeContext } from "../../Context/Theme";

const MOCK_CARD = {
  id: 0,
  image:
    "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
  title: "Тут будет название фильма",
  genres: ["Жанр"],
  rating: 7,
};

const MOCK_CARDS_LIST = [MOCK_CARD, MOCK_CARD];

const OneCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSelectedCard(id));
    }
  }, [id]);

  const card = useSelector(cardsSelectors.getSelectedCard);

  const { theme } = useThemeContext();

  return card ? (
    <>
      <div className={styles.container}>
        <Categories />
        <div>
          <div className={styles.image}>
            <img src={card.image} alt="img" />
          </div>
          <div
            className={classNames(styles.icons, {
              [styles.whiteTheme]: theme === Theme.Light,
            })}
          >
            <ButtonGroup />
          </div>
        </div>
        <div
          className={classNames(styles.secondContainer, {
            [styles.whiteTheme]: theme === Theme.Light,
          })}
        >
          <ul className={styles.genres}>
            <li className={styles.genre}>Adventure</li>
            <li className={styles.genre}>Action</li>
            <li className={styles.genre}>Fantasy</li>
          </ul>

          <h3
            className={classNames(styles.title, {
              [styles.whiteTheme]: theme === Theme.Light,
            })}
          >
            {card.title}
          </h3>
          <div className={styles.label}>
            <span className={styles.raiting}>{card.rating}</span>
            <span className={styles.raitingImdb}>Imdb</span>
            <span className={styles.time}>136 min</span>
          </div>
          <p className={styles.description}>
            In 1984, after saving the world in Wonder Woman (2017), the immortal
            Amazon warrior, Princess Diana of Themyscira, finds herself trying
            to stay under the radar, working as an archaeologist at the
            Smithsonian Museum. With the memory of the brave U.S. pilot, Captain
            Steve Trevor, etched on her mind, Diana Prince becomes embroiled in
            a sinister conspiracy of global proportions when a transparent,
            golden-yellow citrine gemstone catches the eye of the power-hungry
            entrepreneur, Maxwell Lord.
          </p>

          <div className={styles.containerList}>
            <ul className={styles.leftList}>
              <li>Year</li>
              <li>Released</li>
              <li>BoxOffice</li>
              <li>Country</li>
              <li>Production</li>
              <li>Actors</li>
              <li>Director</li>
              <li>Writers</li>
            </ul>
            <ul className={styles.rightList}>
              <li>2011</li>
              <li>15 Jul 2011</li>
              <li>$381,409,310</li>
              <li>United Kingdom, United States</li>
              <li>Heyday Films, Moving Picture Company, Warner Bros.</li>
              <li>Daniel Radcliffe, Emma Watson, Rupert Grint</li>
              <li>David Yates</li>
              <li>J.K. Rowling, Steve Kloves</li>
            </ul>
          </div>
          <div className={styles.therdContainer}>
            <div className={styles.recomendations}>Recomendations</div>
            <div className={styles.cards}>
              <CardsList cardsList={MOCK_CARDS_LIST} />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default OneCard;
