import { RootState } from "../store";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSelectedFilm: (state: RootState) => state.filmsReducer.selectedFilm,
  getAllFilms: (state: RootState) => state.filmsReducer.allFilms,
  getBookmarksFilms: (state: RootState) => state.filmsReducer.filmsBookmarks,
};