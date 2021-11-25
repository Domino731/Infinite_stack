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
  RedirectLinkWrapper,
} from "./styles";
import bg from "../../images/auth/auth_waves_turquoise.svg";
import { Link } from "react-router-dom";
import authIcon from "../../images/auth/signup_icon.svg";
import errorIcon from "../../images/auth/error_icon.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthCard } from "./AuthCard";

/** component with form for creating new user account */
export const SignUp: FunctionComponent = () => {
  // state with data necessary for create new user account in firebase data base
  const [data, setData] = useState<{
    email: string;
    password: string;
    repeat: string;
  }>({ email: "", password: "", repeat: "" });

  // errors
  const [error, setError] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  // clearing data
  useEffect(() => {
    return () => setData({ email: "", password: "", repeat: "" });
  }, []);

  // creating user profile and his initial data in firestore database
  const authAction = () => {
    // remove previous errors
    setError({ email: "", password: "" });

    /** auth operation */
    return (
      createUserWithEmailAndPassword(auth, data.email, data.password)
        // if user's account has been created successfully, then redirect him to panel with account settings
        .then(() => {
          console.log("User created successfully");
          window.location.href = "/dashboard/personalize";
        })

        // catching errors
        .catch((error) => {
          // set errors and notify user about them
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          // display errors
          if (errorCode === "auth/invalid-email") {
            return setError((prev) => ({ ...prev, email: "Invalid e-mail" }));
          } else if (errorCode === "auth/missing-email") {
            return setError((prev) => ({ ...prev, email: "Enter e-mail" }));
          } else if (errorCode === "auth/weak-password") {
            return setError((prev) => ({
              ...prev,
              password: "Password must have 6 characters at least",
            }));
          }
        })
    );
  };

  // to check if a user's password is containing a special character
  const special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  /** try to create user's account in firebase */
  const signUp = (e: Event) => {
    e.preventDefault();
    if (data.password === data.repeat && special.test(data.password)) {
      return authAction();
    } else {
      if (data.password !== data.repeat) {
        setError((prev) => ({
          ...prev,
          password: `The passwords are't the same`,
        }));
      } else if (!special.test(data.password)) {
        setError((prev) => ({
          ...prev,
          password: `Password must have a 1 special character at least`,
        }));
      }
    }
  };

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    return setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthContainer>
      <AuthCard bg={bg}/>

      <AuthFormWrapper>
        {/* decorative icon */}
        <AuthIconWrapper>
          <img src={authIcon} alt="Auth icon" />
        </AuthIconWrapper>

        {/* title */}
        <AuthTitle>Sign up</AuthTitle>
        <AuthSubtitle>Create new account</AuthSubtitle>

        {/* form */}
        <AuthForm>
          {/* email input */}
          <LabelWrapper>
            <LabelItem>E-mail*</LabelItem>
            <AuthInput
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
            <LabelItem>Password*</LabelItem>
            <AuthInput
              type="password"
              value={data.password}
              name="password"
              onChange={handleChangeData}
              placeholder="example@website.com"
              correct
            />
          </LabelWrapper>

          {/* repeat the password input */}
          <LabelWrapper>
            <LabelItem>Repeat the password*</LabelItem>
            <AuthInput
              type="password"
              value={data.repeat}
              name="repeat"
              onChange={handleChangeData}
              placeholder="example@website.com"
              correct
            />
          </LabelWrapper>

          {/* link to login form */}
          <RedirectLinkWrapper color="#00d4b8">
            <Link to="/">Already have an account?</Link>
          </RedirectLinkWrapper>

          {/* errors */}
          {error.email && (
            <ErrorWrapper>
              <img src={errorIcon} alt="Error" />
              <strong>{error.email}</strong>
            </ErrorWrapper>
          )}
          {error.password && (
            <ErrorWrapper>
              <img src={errorIcon} alt="Error" />
              <strong>{error.password}</strong>
            </ErrorWrapper>
          )}
{/* 
button which callback responsible for creating new user's account */}
          <Button
            onClick={(e: any) => signUp(e)}
            color="linear-gradient(to right, #11998e, #38ef7d);">
           Create account
          </Button>

        </AuthForm>
      </AuthFormWrapper>
    </AuthContainer>
  );
};
