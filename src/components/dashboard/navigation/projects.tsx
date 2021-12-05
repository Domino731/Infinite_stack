import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** list with all user's projects */
export const Projects: FunctionComponent = () => {
    
    // flag to toggle nested  list
    const [activeList, setActiveList] = useState<boolean>(false);

    /** toggle activeList state */
    const handleChangeActiveList = () => setActiveList(!activeList);

    return   <ListItemOpen active={false}>

    <ListText active={activeList} onClick={handleChangeActiveList}>
      <i className="fas fa-tools" /> Projects{" "}
      <i className="fas fa-chevron-down" />
    </ListText>

    {activeList && (
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
}