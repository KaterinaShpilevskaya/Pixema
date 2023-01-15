import React, { FC } from "react";
import { CardsListType } from "../../Constants/@types";
import Card from "../Card/Card";
import styles from "./CardsList.module.css";

type CardsListProps = {
  cardsList: CardsListType | null;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList && cardsList.length > 0 ? (
    <div  className={styles.container}>
      
      <Card card={cardsList[0]} />

      {cardsList.map((card, index) => {
        if (index > 0 && index < 50) {
          return <Card key={index} card={card} />;
        }
      })}

    </div>
  ) : null;
};

export default CardsList;
