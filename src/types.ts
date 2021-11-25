export interface IFPropsBenefitItem {
  title: string;
  graphicSource: string;
  description: string;
}

// REDUX //
export type TypeSelectedCardOptions =
  | "your_project"
  | "need_help"
  | "create_your_team"
  | "develop_yourself"
  | "webpack_setup";
export interface IFActionIntroductionCard {
  type: "CHANGE_INTRODUCTION_CARD";
  selectedCard: TypeSelectedCardOptions;
}
export {};
