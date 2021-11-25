import { TypeSelectedCardOptions } from "../../types";
import { Dispatch } from "redux";
import { EIntroductionCardActionType } from "../actions-types";
import { IFIntroductionCard } from "../reducers/introductionCard";

/**
 * REDUX ACTION - change introductionCard state
 * @param card - name of card that you want to change
 */
export const changeIntroductionCard = (card: TypeSelectedCardOptions) => {
  return (dispatch: Dispatch<IFIntroductionCard>) => {
    dispatch({
      type: EIntroductionCardActionType.CHANGE,
      selectedCard: card,
    });
  };
};
