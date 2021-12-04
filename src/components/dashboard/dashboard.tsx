import { FunctionComponent } from "react";
import { Navigation } from "./navigation/navigation";

import { Container, ContentWrapper, NavWrapper } from "./styles";

export const Dashboard: FunctionComponent = () => {
   return <Container>
      <NavWrapper>
         <Navigation/>
      </NavWrapper>
          
      <ContentWrapper>
         as
      </ContentWrapper>
   </Container>
}