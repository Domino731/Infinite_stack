import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { Calendar } from "../calendar/calendar";
import { Articles } from "../community/articles/articles";
import { DiscussionBoards } from "../community/discussionBoards/disscussionBoards";
import { Events } from "../community/events/events";
import { Overview } from "../overview/overview";
import { Profile } from "../profile/profile";
import { Progress } from "../progress/progress";
import { Project } from "../project/project";
import { Settings } from "../settings/settings";
import { Team } from "../team/team";
import { Navigation } from "./navigation/navigation";

import { Container, ContentWrapper, NavWrapper } from "./styles";

/** component which is gathering content for user dashboard - overview, team, profile, */
export const Dashboard: FunctionComponent = () => {
   return <Container>
      <NavWrapper>
         <Navigation/>
      </NavWrapper>
          
      <ContentWrapper>
            <Routes>
               <Route path="/overview" element={<Overview/>}/>
               <Route path="/profile" element={<Profile/>}/>
               <Route path="/team:id" element={<Team/>}/>
               <Route path="/project:id" element={<Project/>}/>
               <Route path="/calendar" element={<Calendar/>}/>
               <Route path="/progress" element={<Progress/>}/>
               <Route path="/community/events" element={<Events/>}/>
               <Route path="/community/discussionBoards" element={<DiscussionBoards/>}/>
               <Route path="/community/articles" element={<Articles/>}/>
               <Route path="/settings" element={<Settings/>}/>
            </Routes>
      </ContentWrapper>

   </Container>
}