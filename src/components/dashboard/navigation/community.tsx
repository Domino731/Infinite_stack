import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { ListItemOpen, ListText, NestedList, NestedListItem } from "../styles";

/** list with community subsections */
export const Community : FunctionComponent = () => {

     // flag to toggle nested  list
     const [activeList, setActiveList] = useState<boolean>(false);

     /** toggle activeList state */
     const handleChangeActiveList = () => setActiveList(!activeList);

     return <ListItemOpen active={false}>

     <ListText active={activeList} onClick={handleChangeActiveList}>
       <i className="fas fa-users" /> Community
       <i className="fas fa-chevron-down" />
     </ListText>

     {activeList && (
       <NestedList>
         <NestedListItem animationDelay={0}>
           <Link to="/">Articles</Link>
         </NestedListItem>
         <NestedListItem animationDelay={0.1}>
           <Link to="/">Disscussion boards</Link>
         </NestedListItem>
         <NestedListItem animationDelay={0.3}>
           <Link to="/">Events</Link>
         </NestedListItem>
       </NestedList>
     )}

   </ListItemOpen>
}