import { combineReducers } from "redux";
import { introductionCard } from "./reducers/introductionCard";

export const reducers = combineReducers({
  introductionCard: introductionCard,
});

export type ReduxState = ReturnType<typeof reducers>;
