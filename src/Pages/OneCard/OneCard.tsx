import classNames from "classnames";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import ButtonGroup from "../../Components/ButtonGroup";
import Categories from "../../Components/Categories";
import cardsSelectors from "../../Redux/Selectors/filmsSelectors";
import { getSelectedFilm, setCardsBookmarks } from "../../Redux/Reducers/filmsReducer";
import { Theme } from "../../Constants/@types";


import styles from "./OneCard.module.css";
import { useThemeContext } from "../../Context/Theme";

const OneCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSelectedFilm(id));
    }
  }, [dispatch, id]);


  const card = useSelector(cardsSelectors.getSelectedFilm);

  const { theme } = useThemeContext();

  return card ? (
    <>
      <div className={styles.container}>
        <Categories />
        <div>
          <div className={styles.image}>
            <img src={card.large_cover_image} alt="img" />
          </div>
          <div
            className={classNames(styles.icons, {
              [styles.whiteTheme]: theme === Theme.Light,
            })}
          >
            <ButtonGroup onClick={() => {
                    if (card) {
                      dispatch(setCardsBookmarks(card));
                    }
                  }} />
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
            {card.description_full}
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
              <li>{card.year}</li>
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
              
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default OneCard;
