import { FunctionComponent } from "react";
import { BenefitItem } from "./benefitItem";
import { BenefitsContainer, BenefitsList, Title } from "./styles";
import { benefitsData } from "../../../properties/benefits";
/** Component with app benefits */
export const Benefits: FunctionComponent = () => {
  return (
    <BenefitsContainer>
      {/* title */}
      <Title>
        CHANGE <br /> YOUR VIEW OF DEVELOPMENT{" "}
      </Title>

      {/* rendering benefits  */}
      <BenefitsList>
        {benefitsData.map((el, num) => (
          <BenefitItem
            graphicSource={el.graphicSource}
            title={el.title}
            description={el.description}
            key={`benefit-${num}-${el.title}`}
          />
        ))}
      </BenefitsList>
    </BenefitsContainer>
  );
};
