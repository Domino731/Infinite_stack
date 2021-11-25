import { FunctionComponent } from "react";
import { IFPropsIntroductionCard } from "../../../types";
import { CardDescription, CardTitle, IntroductionCardContainer } from "./styles";
import {connect} from "react-redux";

 const IntroductionCard : FunctionComponent<IFPropsIntroductionCard> = ({title, description, active}) => {
    return <IntroductionCardContainer active={active}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </IntroductionCardContainer>
}


const mapStateToProps = () => ({

})
export default connect(mapStateToProps)(IntroductionCard)

