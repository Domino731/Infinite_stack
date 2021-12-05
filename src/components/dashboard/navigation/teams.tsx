import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** component with all user's teams */
export const  Teams : FunctionComponent = () => {

        // flag to toggle nested  list
        const [activeList, setActiveList] = useState<boolean>(false);

        /** toggle activeList state */
        const handleChangeActiveList = () => setActiveList(!activeList);

        return   <ListItemOpen active={activeList}>
        <ListText active={activeList}  onClick={handleChangeActiveList}>
          <i className="fas fa-trophy" /> Teams{" "}
          <i className="fas fa-chevron-down" />
        </ListText>

        {activeList && (
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
}