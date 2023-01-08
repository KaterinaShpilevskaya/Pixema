import { RootState } from "../store";

export default {
  getSelectedCard: (state: RootState) => state.cardsReducer.selectedCard
};