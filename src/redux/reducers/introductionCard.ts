import { IFActionIntroductionCard } from "../../types";

export const introductionCard = (
  state: "your_project",
  action: IFActionIntroductionCard
) => {
  switch (action.type) {
    case "CHANGE_INTRODUCTION_CARD":
      return action.selectedCard;
    default:
      return "your_project";
  }
};
