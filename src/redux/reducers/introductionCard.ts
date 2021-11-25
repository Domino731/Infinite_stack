import { IFActionIntroductionCard, TypeSelectedCardOptions } from "../../types";
import { EIntroductionCardActionType } from "../actions-types";

// initial state for redux
const initialState: TypeSelectedCardOptions = "your_project";

export interface IFIntroductionCard {
  type: EIntroductionCardActionType.CHANGE;
  selectedCard:
    | "your_project"
    | "need_help"
    | "create_your_team"
    | "develop_yourself"
    | "webpack_setup";
}

export type TypeActionIntroductionCard = IFIntroductionCard;

export const introductionCard = (
  state: TypeSelectedCardOptions = initialState,
  action: TypeActionIntroductionCard
) => {
  switch (action.type) {
    case EIntroductionCardActionType.CHANGE:
      return action.selectedCard;
    default:
      return state;
  }
};
