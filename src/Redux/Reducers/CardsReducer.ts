import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../Constants/@types";


type CardsReducerState = {
    selectedCard: CardType | null;
}


const initialState: CardsReducerState = {
    selectedCard: null,
}

const cardsSlice = createSlice ( {
    name: "cardsReducer",
    initialState,
    reducers: {
        getSelectedCard: (state, action: PayloadAction<string | undefined>) => {},
        setSelectedCard: (state, action: PayloadAction<CardType | null>) => {
            state.selectedCard = action.payload;
        },

    }
})

export const { setSelectedCard, getSelectedCard  } = cardsSlice.actions;
const cardsReducer = cardsSlice.reducer;

export default cardsReducer;