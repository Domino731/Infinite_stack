import { FunctionComponent } from "react"
import { TitleWrapper, LogoGraphic, Title } from "./styles"
import logo from "../../../images/general/logo.svg";

/** component with logo and title for navigation */
export const NavTitle: FunctionComponent = () => {
   return <TitleWrapper>
    <LogoGraphic src={logo} alt='Logo'/>
    <Title>Infinite_stack</Title>
  </TitleWrapper>
}