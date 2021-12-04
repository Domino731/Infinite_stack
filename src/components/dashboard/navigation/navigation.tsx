import { FunctionComponent } from "react"
import logo from "../../../images/general/logo.svg";
import { LogoGraphic, Title, TitleWrapper } from "./styles";
export const Navigation : FunctionComponent = () => {
return <>
<TitleWrapper>
    <LogoGraphic src={logo}/>
    <Title>Infinite_stack</Title>
</TitleWrapper>
</>
}