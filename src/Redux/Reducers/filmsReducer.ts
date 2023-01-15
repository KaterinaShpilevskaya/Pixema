import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType, CardsListType } from "../../Constants/@types";

type FilmsReducerState = {
    selectedFilm: CardType | null;
    allFilms: CardsListType;
}

const initialState: FilmsReducerState = {
    selectedFilm: null,
    allFilms: []
}

const filmsSlice = createSlice ( {
    name: "filmsReducer",
    initialState,
    reducers: {
        getSelectedFilm: (state, action: PayloadAction<string | undefined>) => {},
        setSelectedFilm: (state, action: PayloadAction<CardType | null>) => {
            state.selectedFilm = action.payload;
        },
        getFilms: (state, action: PayloadAction<undefined>) => {},
        setFilms: (state, action: PayloadAction<CardsListType>) => {state.allFilms = action.payload},
   }
})

export const { setSelectedFilm, getSelectedFilm, getFilms, setFilms } = filmsSlice.actions;
const filmsReducer = filmsSlice.reducer;

export default filmsReducer;
