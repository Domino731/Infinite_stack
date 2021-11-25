import { FunctionComponent, useState } from "react";
import {
  AuthBox,
  AuthContainer,
  AuthForm,
  AuthFormWrapper,
  AuthIconWrapper,
  AuthInput,
  AuthSubtitle,
  AuthTitle,
  Button,
  ErrorWrapper,
  LabelItem,
  LabelWrapper,
  QuoteWrapper,
  RedirectLinkWrapper,
  RightsWrapper,
  TitleWrapper,
} from "../styles";
import bg from "../../../images/auth/auth_waves_turquoise.svg";
import { Link } from "react-router-dom";
import authIcon from "../../../images/auth/signup_icon.svg";
import errorIcon from "../../../images/auth/error_icon.svg";
import logo from "../../../images/general/logo.svg";
export const SignUp: FunctionComponent = () => {

    // state with data necessary for create new user account in firebase data base 
  const [data, setData] = useState<{
    email: string;
    password: string;
    repeat: string;
  }>({ email: '', password: '', repeat: '' });

  
  return (
    <AuthContainer>
      <AuthBox background={bg}>
          <TitleWrapper> 
              <div><img src={logo} alt='Logo'/></div>
              <h1>Infnite_stack</h1></TitleWrapper>
          <QuoteWrapper>Others discovering future <br/>You create it</QuoteWrapper>
          <RightsWrapper>2021 &copy; Dominik Orzechowski, all rights reserved</RightsWrapper>
      </AuthBox>

      <AuthFormWrapper>
        <AuthIconWrapper>
            <img src={authIcon} alt='Auth icon'/>
        </AuthIconWrapper>
        <AuthTitle>Sign up</AuthTitle>
        <AuthSubtitle>Create new account</AuthSubtitle>
        <AuthForm>
          <LabelWrapper>
            <LabelItem>E-mail*</LabelItem>
            <AuthInput placeholder="example@website.com" correct/>
          </LabelWrapper>
          <LabelWrapper>
            <LabelItem>Password*</LabelItem>
            <AuthInput placeholder="example@website.com" correct />
          </LabelWrapper>
          <LabelWrapper>
            <LabelItem>Repeat the password*</LabelItem>
            <AuthInput placeholder="example@website.com" correct/>
          </LabelWrapper>

          <RedirectLinkWrapper color='#00d4b8'>
              <Link to='/'>Already have an account?</Link>
          </RedirectLinkWrapper>

         <ErrorWrapper>
             <img src={errorIcon} alt='Error'/>
             <strong>Incorrect e-mail</strong>
         </ErrorWrapper>


          <Button color='linear-gradient(to right, #11998e, #38ef7d);'>
            Create account
          </Button>
        </AuthForm>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
