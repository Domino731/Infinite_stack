import { FunctionComponent, JSXElementConstructor, ReactElement } from "react";

// components props
export interface IFPropsBenefitItem {
  title: string;
  graphicSource: string;
  description: string;
}
export interface IFPropsIntroductionCard {
  title: string;
  description: JSX.Element;
  active: boolean;
}

export interface IFPropsPrivateRoute {
  Component: JSX.Element;
  path: string;
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

export interface IFSettingsStateFlag {
  general: boolean;
  password: boolean;
  delete: boolean;
}

export interface IFSettingsHeaderProps {
  flags: IFSettingsStateFlag;
  changeFlagFnc: (key: "general" | "password" | "delete") => void;
}
export interface IFNavigationActiveListState {
  teams: boolean;
  projects: boolean;
  community: boolean;
}
