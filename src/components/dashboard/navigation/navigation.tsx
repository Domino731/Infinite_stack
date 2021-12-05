import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/general/logo.svg";
import { IFNavigationActiveListState } from "../../../types";
import {
  ListItem,
  ListItemOpen,
  ListText,
  NavList,
  NestedList,
  NestedListItem,
} from "../styles";
import { Community } from "./community";
import { Projects } from "./projects";
import { LogoGraphic, Title, TitleWrapper } from "./styles";
import { Teams } from "./teams";

/**
 * Component with navigation links to specific sections
 */
export const Navigation: FunctionComponent = () => {
  // state by which user can toggle nested list in specific list item
  const [activeList, setActiveList] = useState<IFNavigationActiveListState>({
    teams: true,
    projects: false,
    community: false,
  });

  /** change activeList state
   * @param listName - name of item in activeList state that you want to change
   */
  const handleChangeActiveList = (
    listName: "teams" | "projects" | "community"
  ) => {
    console.log(activeList[listName] ? true : false);
    return setActiveList((prev) => ({
      ...prev,
      [listName]: !activeList[listName],
    }));
  };

  return (
    <>
      <TitleWrapper>
        <LogoGraphic src={logo} />
        <Title>Infinite_stack</Title>
      </TitleWrapper>

      <nav>
        <NavList>
          {/* overview panel link */}
          <ListItem active={false}>
            <Link to="/dashboard/overview">
              <i className="far fa-compass" /> Overview
            </Link>
          </ListItem>

          {/* list with teams */}
          <Teams />

          {/* list with actual projects */}
          <Projects />

          {/* calendar */}
          <ListItem active={false}>
            <Link to="/dashboard/calendar">
              <i className="far fa-calendar-alt" /> Calendar
            </Link>
          </ListItem>

          {/* calendar */}
          <ListItem active={false}>
            <Link to="/dashboard/calendar">
              <i className="fas fa-user-circle" /> Profile
            </Link>
          </ListItem>

          {/* community subsections */}
          <Community />

          {/* settings */}
          <ListItem active={false}>
            <Link to="/">
              <i className="fas fa-cogs" /> Settings
            </Link>
          </ListItem>
        </NavList>
      </nav>
    </>
  );
};
