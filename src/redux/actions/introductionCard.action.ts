import { IFActionIntroductionCard, TypeSelectedCardOptions } from "../../types";
import { Dispatch } from "redux";
/**
 * REDUX ACTION - change introductionCard state
 * @param card - name of card that you want to change
 */
export const reduxChangeIntroductionCard = (card: TypeSelectedCardOptions) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "CHANGE_INTRODUCTION_CARD",
      card: card,
    });
  };
};

// ({
//     type: "CHANGE_INTRODUCTION_CARD",
//     selectedCard: card,
//   });
export {};
