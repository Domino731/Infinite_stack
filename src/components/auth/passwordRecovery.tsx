import { error } from "console";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import {
  AuthForm,
  AuthFormWrapper,
  AuthFormWrapperPasswordRecovery,
  AuthIconWrapper,
  AuthInput,
  AuthSubtitle,
  AuthTitle,
  Button,
  ErrorWrapper,
  LabelItem,
  LabelWrapper,
  PasswordRecoveryContainer,
  RedirectLinksWrapper,
} from "./styles";
import authIcon from "../../images/auth/signup_icon.svg";

import errorIcon from "../../images/auth/error_icon.svg";

export const PasswordRecovery: FunctionComponent = () => {
  // state with data necessary to login
  const [data, setData] = useState<string>("")

  // errors
  const [error, setError] = useState<string>("")
  /** change data state */
  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setData(e.target.value);
  };

  const handleResetPassword = (e: Event) => {
      e.preventDefault();
  }
  return (
    <PasswordRecoveryContainer>
      <AuthFormWrapperPasswordRecovery>
        {/* decorative icon */}
        <AuthIconWrapper>
          <img src={authIcon} alt="Auth icon" />
        </AuthIconWrapper>

        {/* title */}
        <AuthTitle>Password recovery</AuthTitle>
        <AuthSubtitle>send email with next steps</AuthSubtitle>

        {/* form */}
        <AuthForm>
          {/* email input */}
          <LabelWrapper>
            <LabelItem>E-mail</LabelItem>
            <AuthInput
              value={data}
              type="email"
              name="email"
              onChange={handleChangeData}
              placeholder="example@website.com"
              correct={!(error.length > 0)}
            />
          </LabelWrapper>


          {/* link to sign-up form */}
          <RedirectLinksWrapper color="#de000b">
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Create account</Link>
          </RedirectLinksWrapper>

          {/* errors */}
          {error && (
            <ErrorWrapper>
              <img src={errorIcon} alt="Error" />
              <strong>{error}</strong>
            </ErrorWrapper>
          )}

          {/* 
button which callback responsible for creating new user's account */}
          <Button
            onClick={(e: any) => handleResetPassword(e)}
            color="linear-gradient(to bottom, #cb2d3e, #ef473a);  "
          >
            Send e-mail
          </Button>
        </AuthForm>
      </AuthFormWrapperPasswordRecovery>
    </PasswordRecoveryContainer>
  );
};
