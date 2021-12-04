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
import { LogoGraphic, Title, TitleWrapper } from "./styles";

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

          <ListItemOpen active={activeList.teams}>
            <ListText active={activeList.teams}  onClick={() => handleChangeActiveList("teams")}>
              <i className="fas fa-trophy" /> Teams{" "}
              <i className="fas fa-chevron-down" />
            </ListText>

            {activeList.teams && (
              <NestedList>
                <NestedListItem animationDelay={0}>
                  <Link to="/dashboard/team:123">Spacex</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.1}>
                  <Link to="/dashboard/team:123">Microsoft</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.3}>
                  <Link to="/dashboard/team:123">Apple</Link>
                </NestedListItem>
              </NestedList>
            )}
          </ListItemOpen>

          <ListItemOpen active={false}>

            <ListText active={activeList.projects} onClick={() => handleChangeActiveList("projects")}>
              <i className="fas fa-tools" /> Projects{" "}
              <i className="fas fa-chevron-down" />
            </ListText>

            {activeList.projects && (
              <NestedList>
                <NestedListItem animationDelay={0}>
                  <Link to="/dashboard/project:123">Game</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.1}>
                  <Link to="/dashboard/project:123">React</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.3}>
                  <Link to="/dashboard/project:123">Angular training</Link>
                </NestedListItem>
              </NestedList>
            )}
          </ListItemOpen>

          <ListItem active={false}>
            <Link to="/dashboard/calendar">
              <i className="far fa-calendar-alt" /> Calendar
            </Link>
          </ListItem>

          <ListItemOpen active={false}>

            <ListText active={activeList.community} onClick={() => handleChangeActiveList("community")}>
              <i className="fas fa-users" /> Community
              <i className="fas fa-chevron-down" />
            </ListText>

            {activeList.community && (
              <NestedList>
                <NestedListItem animationDelay={0}>
                  <Link to="/">Game</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.1}>
                  <Link to="/">React</Link>
                </NestedListItem>
                <NestedListItem animationDelay={0.3}>
                  <Link to="/">Angular training</Link>
                </NestedListItem>
              </NestedList>
            )}
          </ListItemOpen>

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
