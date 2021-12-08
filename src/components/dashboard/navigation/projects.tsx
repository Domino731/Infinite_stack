import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** list with all user's projects */
export const Projects: FunctionComponent = () => {
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

    return   <ListItemOpen active={false}>

    <ListText active={activeList} onClick={handleChangeActiveList}>
      <i className="fas fa-tools" /> Projects{" "}
      <i className="fas fa-chevron-down" />
    </ListText>

    {activeList && (
      <NestedList>
        <NestedListItem animationDelay={0} active={activeSection === '/dashboard/project:123'}>
          <Link to="/dashboard/project:123">Game</Link>
        </NestedListItem>
        <NestedListItem animationDelay={0.1} active={activeSection === '/dashboard/project:4'}>
          <Link to="/dashboard/project:4">React</Link>
        </NestedListItem>
        <NestedListItem animationDelay={0.3} active={activeSection === '/dashboard/project:1'}>
          <Link to="/dashboard/project:1">Angular training</Link>
        </NestedListItem>
        <NestedListItem animationDelay={0.5} active={activeSection === '/dashboard/project:1'}>
          <Link to="/dashboard/project/create">   <i className="fas fa-plus-square"/>New project</Link>
        </NestedListItem>
      </NestedList>
    )}
  </ListItemOpen>
}