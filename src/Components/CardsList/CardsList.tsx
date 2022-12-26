import React, { FC } from "react";
import { CardsListType } from "../../Constants/@types";
import Card from "../Card/Card";
import styles from "./CardsList.module.css"

type CardsListProps = {
    cardsList: CardsListType
}

const CardsList:FC<CardsListProps> = ({cardsList}) => {
    return (<div className={styles.container}> {cardsList.map((card,index)=>{
        return <Card key={index} card ={card} />
    })}</div>
    )
}

export default CardsList;