import React, { FC } from "react";
import styles from "./Card.module.css"

import { CardType } from "../../Constants/@types";

type CardProps = {
  card: CardType;
};

const Card: FC<CardProps> = ({ card }) => {
  const { image, rating, title, genres } = card;

  return (
      <div className={styles.container}>
        {/* <div className={styles.rating}>{rating}</div> */}
        <img className={styles.card} src={image} alt={''} />
        <div className={styles.title}>{title}</div>
      <div className={styles.genres}>{genres}</div>
      
    </div>
  );
};

export default Card;
