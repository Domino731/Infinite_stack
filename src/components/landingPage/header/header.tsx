import { FunctionComponent } from "react";
import { AuthButtonsWrapper, HeaderContainer, Input, InputWrapper, LogInLink, SearchBtn, SignUpLink, Title, TitleIcon, TitleWrapper } from "./styles";
import logo from "../../../images/general/logo.svg";
import { Link } from "react-router-dom";

/** Component with header */
export const Header : FunctionComponent = () => {
    return <HeaderContainer>
        {/* logo */}
          <TitleWrapper>
              <TitleIcon src={logo} alt='Logo'/>
              <Title>Infinite_stack</Title>
          </TitleWrapper>

          {/* input  */}
          <InputWrapper>
           <Input type='text' placeholder="Find solution for your problem"/>
           <SearchBtn>Search</SearchBtn>
          </InputWrapper>

          {/* auth buttons */}
          <AuthButtonsWrapper>
              <LogInLink><Link to='/login'>Log in</Link></LogInLink>
              <SignUpLink><Link to='/sign-up'>Sign Up</Link></SignUpLink>
          </AuthButtonsWrapper>
    </HeaderContainer>
}