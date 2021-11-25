import { IFActionIntroductionCard, TypeSelectedCardOptions } from "../../types";

/**
 * REDUX ACTION - change introductionCard state
 * @param card - name of card that you want to change
 */
export const reduxChangeIntroductionCard = (card: TypeSelectedCardOptions) => ({
  type: "CHANGE_INTRODUCTION_CARD",
  selectedCard: card,
});

export {};
