import { FunctionComponent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  AuthForm,
  AuthFormWrapperPasswordRecovery,
  AuthIconWrapper,
  AuthInput,
  AuthSubtitle,
  AuthTitle,
  Button,
  ErrorWrapper,
  GoBackLinkWrapper,
  LabelItem,
  LabelWrapper,
  PasswordRecoveryContainer,
  RedirectLinksWrapper,
  SuccessEmailSendGraphic,
  SuccessEmailSendTitle,
} from "./styles";
import authIcon from "../../images/auth/signup_icon.svg";

import errorIcon from "../../images/auth/error_icon.svg";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import sendGraphic from "../../images/auth/send.svg";
export const PasswordRecovery: FunctionComponent = () => {
  // state with email necessary to send new mail with next steps for recovering password
  const [email, setData] = useState<string>("");

  // errors
  const [error, setError] = useState<string>("");

  const [successSendFlag, setSuccessSendFlag] = useState<boolean>(false);
  
  /** change email state */
  const handleChangeData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    return setData(e.target.value);
  }, []);

  // set mail with next steps
  const handleResetPassword = useCallback(async (e: Event) => {
    e.preventDefault();

    // clear error
    setError("");

    return await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("E-mail with next steps was sent");

        // change state and inform user about success auth operation
        setSuccessSendFlag(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        if (errorCode === "auth/invalid-email") {
          setError("Invalid e-mail");
        } else if (errorCode === "auth/user-not-found") {
          setError(`User with this e-mail doesn't exist`);
        } else if (errorCode === "auth/missing-email") {
          setError(`Enter e-mail`);
        }
      });
  }, []);

  return (
    <PasswordRecoveryContainer data-testid="password-recovery-container">
      {/* form */}
      {!successSendFlag && (
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
                aria-label="input-email"
                value={email}
                type="email"
                name="email"
                onChange={handleChangeData}
                placeholder="example@website.com"
                correct={!(error.length > 0)}
              />
            </LabelWrapper>

            {/* link to login form */}
            <RedirectLinksWrapper color="#de000b">
              <Link to="/login">Login</Link>
              <Link to="/sign-up">Create account</Link>
            </RedirectLinksWrapper>

            {/* errors */}
            {error && (
              <ErrorWrapper data-testid="error-wrapper">
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
      )}
          
      {/*  container which is informing user about successful email send */}
      {successSendFlag && (
        <AuthFormWrapperPasswordRecovery data-testid="successful-sent">
          <SuccessEmailSendGraphic src={sendGraphic} />
          <SuccessEmailSendTitle>
            Email with next steps has been sent to your inbox
          </SuccessEmailSendTitle>
          <GoBackLinkWrapper>
            <Link to="/login">Back</Link>
          </GoBackLinkWrapper>
        </AuthFormWrapperPasswordRecovery>
      )}
    </PasswordRecoveryContainer>
  );
};
