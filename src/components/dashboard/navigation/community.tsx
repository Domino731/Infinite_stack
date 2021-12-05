import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** list with community subsections */
export const Community: FunctionComponent = () => {
  // references
  const path = useParams();

  // flag to toggle nested  list
  const [activeList, setActiveList] = useState<boolean>(false);

  // state with name of the actual selected section
  const [activeSection, setActiveSection] = useState<string>("");

  /** toggle activeList state */
  const handleChangeActiveList = () => setActiveList(!activeList);

  useEffect(() => {
    return setActiveSection(window.location.pathname);
  }, [path]);

  return (
    <ListItemOpen active={false}>
      <ListText active={activeList} onClick={handleChangeActiveList}>
        <i className="fas fa-users" /> Community
        <i className="fas fa-chevron-down" />
      </ListText>

      {activeList && (
        <NestedList>
          <NestedListItem animationDelay={0} active={activeSection === '/dashboard/community/articles'}>
            <Link to="community/articles">Articles</Link>
          </NestedListItem>
          <NestedListItem animationDelay={0.1} active={activeSection === '/dashboard/community/discussionBoards'}>
            <Link to="community/discussionBoards">Disscussion boards</Link>
          </NestedListItem>
          <NestedListItem animationDelay={0.3} active={activeSection === '/dashboard/community/events'}>
            <Link to="community/events">Events</Link>
          </NestedListItem>
        </NestedList>
      )}
    </ListItemOpen>
  );
};
