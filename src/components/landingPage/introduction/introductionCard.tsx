import { FunctionComponent } from "react";
import { IFPropsIntroductionCard } from "../../../types";
import { CardDescription, CardTitle, IntroductionCardContainer } from "./styles";

export const IntroductionCard : FunctionComponent<IFPropsIntroductionCard> = ({title, description, active}) => {
    return <IntroductionCardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </IntroductionCardContainer>
}