import { FunctionComponent } from "react";
import { IFPropsBenefitItem } from "../../../types";
import { BenefitDescription, BenefitGraphic, BenefitItemContainer, BenefitTitle } from "./styles";

/**
 * Component with content for a single benefit - title, description and graphic
 * @param title - benefit title
 * @param description - description text
 * @param graphicSource - source of graphic
 */
export const BenefitItem : FunctionComponent<IFPropsBenefitItem> = ({title, description, graphicSource}) => {
    return <BenefitItemContainer>
       <BenefitGraphic src={graphicSource} alt='benefit'/>
       <BenefitTitle>{title}</BenefitTitle>
       <BenefitDescription>{description}</BenefitDescription>
    </BenefitItemContainer>
}