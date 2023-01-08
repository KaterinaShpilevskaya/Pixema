import React, { FC } from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";

import { CardType } from "../../Constants/@types";
import classNames from "classnames";
import { setSelectedCard } from "../../Redux/Reducers/CardsReducer";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

type CardProps = {
  card: CardType;
};

const Card: FC<CardProps> = ({ card }) => {
  const { id, image, rating, title, genres } = card;

  const dispatch = useDispatch();
  const onCardClick = () => {
    dispatch(setSelectedCard(card));
  };

  const { theme } = useThemeContext();

  return (
    <div onClick={onCardClick} className={styles.container}>
      <Link to={`/one-card/${id}`}>
        <span
          className={classNames(styles.rating, {
            [styles.ratingRed]: rating <= 5,
            [styles.ratingYellow]: rating > 5 && rating <= 7,
            [styles.ratingGreen]: rating > 7,
          })}
        >
          {rating}
        </span>
        <img className={styles.card} src={image} alt={""} />
        <div className={classNames(styles.title,{ 
      [styles.whiteTheme]: theme === Theme.Light
  })}>{title}</div>
        <div className={styles.genres}>{genres}</div>
      </Link>
    </div>
  );
};

export default Card;
