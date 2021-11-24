import { IFPropsBenefitItem } from "../types";
import designGraphic from "../images/landing-page/interface.svg";
import peopleGraphic from "../images/landing-page/team.svg";
import managementGraphic from "../images/landing-page/planning.svg";
const designBenefit: IFPropsBenefitItem = {
  title: "Design",
  description:
    "Friendly and easy to use interface will save you valuable time in project management",
  graphicSource: designGraphic,
};

const managementBenefit: IFPropsBenefitItem = {
  title: "Management",
  description:
    "Control your project and increase your productivity easily with special dashboard  dashboard.  ",
  graphicSource: managementGraphic,
};
const peopleBenefit: IFPropsBenefitItem = {
  title: "People",
  description:
    "meet passionate people, create teams, solve the problems together. Change the world with your team. ",
  graphicSource: peopleGraphic,
};

/** array with benefits data */
export const benefitsData: IFPropsBenefitItem[] = [
  designBenefit,
  managementBenefit,
  peopleBenefit,
];
