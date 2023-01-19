import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType, CardsListType } from "../../Constants/@types";

type FilmsReducerState = {
  selectedFilm: CardType | null;
  allFilms: CardsListType;
  filmsBookmarks: CardType[];
};

const initialState: FilmsReducerState = {
  selectedFilm: null,
  allFilms: [],
  filmsBookmarks: [],
};

const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    getSelectedFilm: (state, action: PayloadAction<string | undefined>) => {},
    setSelectedFilm: (state, action: PayloadAction<CardType | null>) => {
      state.selectedFilm = action.payload;
    },
    getFilms: (state, action: PayloadAction<undefined>) => {},
    setFilms: (state, action: PayloadAction<CardsListType>) => {
      state.allFilms = action.payload;
    },
    setCardsBookmarks: (state, actions: PayloadAction<CardType>) => {
      const card = actions.payload;
      const cardsBookmarkIndex = state.filmsBookmarks.findIndex(
        (value) => value.id === card.id
      );
      if (cardsBookmarkIndex === -1) {
        state.filmsBookmarks.push(card);
      } else {
        state.filmsBookmarks.splice(cardsBookmarkIndex);
      }
    },
  },
});

export const {
  setSelectedFilm,
  getSelectedFilm,
  getFilms,
  setFilms,
  setCardsBookmarks,
} = filmsSlice.actions;
const filmsReducer = filmsSlice.reducer;

export default filmsReducer;
