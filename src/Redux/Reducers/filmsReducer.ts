import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType, CardsListType } from "../../Constants/@types";

type FilmsReducerState = {
  selectedFilm: CardType | null;
  allFilms: CardsListType;
  filmsFavorites: CardType[];
  searchValue: string;
};

const initialState: FilmsReducerState = {
  selectedFilm: null,
  allFilms: [],
  filmsFavorites: [],
  searchValue: '',
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
    setFilmsFavorites: (state, actions: PayloadAction<CardType>) => {
      const card = actions.payload;
      const filmsFavoritesIndex = state.filmsFavorites.findIndex(
        (value) => value.id === card.id
      );
      if (filmsFavoritesIndex === -1) {
        state.filmsFavorites.push(card);
      } else {
        state.filmsFavorites.splice(filmsFavoritesIndex);
      }
    },
    setSearchValue: (state, actions: PayloadAction<string>) => {
        state.searchValue = actions.payload;
      },
  },
});

export const {
  setSelectedFilm,
  getSelectedFilm,
  getFilms,
  setFilms,
  setFilmsFavorites,
  setSearchValue
} = filmsSlice.actions;
const filmsReducer = filmsSlice.reducer;

export default filmsReducer;
