import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../../images/general/logo.svg";

import {
  ListItem,
  NavList,
} from "../styles";
import { Community } from "./community";
import { Logout } from "./logout";
import { Projects } from "./projects";
import { LogoGraphic, Title, TitleWrapper } from "./styles";
import { Teams } from "./teams";

/**
 * Component with navigation links to specific sections
 */
export const Navigation: FunctionComponent = () => {
  // references
  const path = useParams();

  // state with name of the actual selected section
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    return setActiveSection(window.location.pathname);
  }, [path]);


  return (
    <>
      <TitleWrapper>
        <LogoGraphic src={logo} />
        <Title>Infinite_stack</Title>
      </TitleWrapper>

      <nav>
        <NavList>
          {/* overview panel link */}
          <ListItem active={activeSection === "/dashboard/overview"}>
            <Link to="/dashboard/overview">
              <i className="far fa-compass" /> Overview
            </Link>
          </ListItem>

          {/* list with teams */}
          <Teams />

          {/* list with actual projects */}
          <Projects />

          {/* calendar */}
          <ListItem active={activeSection === "/dashboard/calendar"}>
            <Link to="/dashboard/calendar">
              <i className="far fa-calendar-alt" /> Calendar
            </Link>
          </ListItem>

          {/* calendar */}
          <ListItem active={activeSection === "/dashboard/profile"}>
            <Link to="/dashboard/profile">
              <i className="fas fa-user-circle" /> Profile
            </Link>
          </ListItem>

          {/* community subsections */}
          <Community />

          {/* settings */}
          <ListItem active={activeSection === "/dashboard/settings"}>
            <Link to="/dashboard/settings">
              <i className="fas fa-cogs" /> Settings
            </Link>
          </ListItem>
        </NavList>
      </nav>

      {/* logout button */}
      <Logout/>
    </>
  );
};
