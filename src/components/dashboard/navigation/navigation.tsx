import { FunctionComponent } from "react"
import { Link } from "react-router-dom";
import logo from "../../../images/general/logo.svg";
import { ListItem, NavList } from "../styles";
import { LogoGraphic, Title, TitleWrapper } from "./styles";

/**
 * Component with navigation links to specific sections
 */
export const Navigation : FunctionComponent = () => {
return <>
<TitleWrapper>
    <LogoGraphic src={logo}/>
    <Title>Infinite_stack</Title>
</TitleWrapper>

<nav>
    <NavList>

        {/* overview panel link */}
        <ListItem>
            <Link to='/'>
            <i className="far fa-compass"/> Overview
            </Link>
        </ListItem>

        <ListItem>
            <Link to='/'>
            <i className="fas fa-trophy"/> Teams
            </Link>
        </ListItem>

        <ListItem>
            <Link to='/'>
            <i className="fas fa-tools"/> Projects
            </Link>
        </ListItem>

        <ListItem>
            <Link to='/'>
            <i className="far fa-calendar-alt"/> Calendar
            </Link>
        </ListItem>


        <ListItem>
            <Link to='/'>
            <i className="fas fa-users"/> Community
            </Link>
        </ListItem>

        <ListItem>
            <Link to='/'>
            <i className="fas fa-cogs"/> Settings
            </Link>
        </ListItem>
    </NavList>
</nav>

</>
}