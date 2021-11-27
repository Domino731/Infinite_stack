import { FunctionComponent, useEffect, useState } from "react";
import {
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
  RedirectLinksWrapper,
} from "./styles";
import bg from "../../images/auth/auth_waves_blue.svg";
import { Link } from "react-router-dom";
import authIcon from "../../images/auth/signup_icon.svg";
import errorIcon from "../../images/auth/error_icon.svg";
import { auth } from "../../firebase";
import { AuthCard } from "./AuthCard";
import { signInWithEmailAndPassword } from "firebase/auth";

/** component with form for logging user  */
export const Login: FunctionComponent = () => {
  // state with data necessary to login
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  // errors
  const [error, setError] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  // clearing data
  useEffect(() => {
    return () => setData({ email: "", password: "" });
  }, []);

  /** auth operation responsible for logging user */
  const handleLogin = async (e: Event) => {
    e.preventDefault();

    // clear previous errors
    setError({ email: "", password: "" });

    return (
       await signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          console.log("User logged successfully");
          window.location.href = "/dashboard";
        })
        // catching errors
        .catch((error) => {
          // set errors and notify user about them
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // display errors
          if (errorCode === "auth/invalid-email") {
           setError((prev) => ({ ...prev, email: "Invalid e-mail" }));
          } else if (errorCode === "auth/missing-email") {
           setError((prev) => ({ ...prev, email: "Enter e-mail" }));
          } 
          if (errorCode === "auth/wrong-password") {
          setError((prev) => ({
              ...prev,
              password: "Wrong password",
            }));
          }
          console.log(errorCode)
          if(errorCode === "auth/too-many-requests"){
            setError((prev) => ({ ...prev, email: "Too many failed attempts to login, try restart your password" }));
          }
        })
    );
  };

  /** change data state */
  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    return setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthContainer data-testid="login-container">
      <AuthFormWrapper>
        {/* decorative icon */}
        <AuthIconWrapper>
          <img src={authIcon} alt="Auth icon" />
        </AuthIconWrapper>

        {/* title */}
        <AuthTitle>Login</AuthTitle>
        <AuthSubtitle>log in to your Infinite_stack account</AuthSubtitle>

        {/* form */}
        <AuthForm>
          {/* email input */}
          <LabelWrapper>
            <LabelItem>E-mail</LabelItem>
            <AuthInput
              aria-label="input-email"
              value={data.email}
              type="email"
              name="email"
              onChange={handleChangeData}
              placeholder="example@website.com"
              correct={!(error.email.length > 0)}
            />
          </LabelWrapper>

          {/* password input */}
          <LabelWrapper>
            <LabelItem>Password</LabelItem>
            <AuthInput
              aria-label="input-password"
              type="password"
              value={data.password}
              name="password"
              onChange={handleChangeData}
              correct={!(error.password.length > 0)}
            />
          </LabelWrapper>

          {/* link to sign-up form */}
          <RedirectLinksWrapper color="#0083d8">
            <Link to="/sign-up">Create account</Link>
            <Link to="/password-recovery">Forget password?</Link>
          </RedirectLinksWrapper>

          {/* errors */}
          {error.email && (
            <ErrorWrapper>
              <img src={errorIcon} alt="Error" />
              <strong>{error.email}</strong>
            </ErrorWrapper>
          )}
          {error.password && (
            <ErrorWrapper data-testid="password-error-wrapper">
              <img src={errorIcon} alt="Error" />
              <strong>{error.password}</strong>
            </ErrorWrapper>
          )}
          {/* 
button which callback responsible for creating new user's account */}
          <Button
            data-testid="btn-login"
            onClick={(e: any) => handleLogin(e)}
            color="linear-gradient(to bottom, #00b4db, #0083b0); "
          >
            Login
          </Button>
        </AuthForm>
      </AuthFormWrapper>

      <AuthCard bg={bg} />
    </AuthContainer>
  );
};
