import { FunctionComponent } from "react";
import { AuthBox, TitleWrapper, QuoteWrapper, RightsWrapper } from "./styles";
import logo from "../../images/general/logo.svg";

/**
 * component with card for auth components
 * @param bg - background for card
 * @returns
 */
export const AuthCard: FunctionComponent<{ bg: string }> = ({ bg }) => {
  return (
    <AuthBox background={bg}>
      <TitleWrapper>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h1>Infnite_stack</h1>
      </TitleWrapper>
      <QuoteWrapper>
        Others are discovering future <br />
        You create it
      </QuoteWrapper>
      <RightsWrapper>
        2021 &copy; Dominik Orzechowski, all rights reserved
      </RightsWrapper>
    </AuthBox>
  );
};
