import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** component with all user's teams */
export const Teams: FunctionComponent = () => {
  // references
  const path = useParams();

  // flag to toggle nested  list
  const [activeList, setActiveList] = useState<boolean>(false);

  /** toggle activeList state */
  const handleChangeActiveList = () => setActiveList(!activeList);

  // state with name of the actual selected section
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    return setActiveSection(window.location.pathname);
  }, [path]);

  return (
    <ListItemOpen active={false}>
    <ListText active={activeList} onClick={handleChangeActiveList}>
      <i className="fas fa-trophy" /> Teams
      <i className="fas fa-chevron-down" />
    </ListText>

    {activeList && (
      <NestedList>
        <NestedListItem animationDelay={0} active={activeSection === '/dashboard/team:123'}>
          <Link to="/dashboard/team:123">React team</Link>
        </NestedListItem>
        <NestedListItem animationDelay={0.1} active={activeSection === '/dashboard/team:1234'}>
          <Link to="/dashboard/team:1234">Angular love</Link>
        </NestedListItem>
        <NestedListItem animationDelay={0.3} active={activeSection === '/dashboard/team:1'}>
          <Link to="/dashboard/team:1">Siper boiz</Link>
        </NestedListItem>

        <NestedListItem animationDelay={0.5} active={activeSection === '/dashboard/project:1'}>
          <Link to="/dashboard/project:1">   <i className="fas fa-plus-square"/>New team</Link>
        </NestedListItem>
      </NestedList>
    )}
  </ListItemOpen>
  );
};
