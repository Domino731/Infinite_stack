import { FunctionComponent, useState } from "react";
import {
  AlertWrapper,
  BtnWrapper,
  Button,
  FormColumn,
  FormColumnCenter,
  FormItem,
  Input,
  Label,
  Requirements,
  RequirementsTitle,
  SettingsForm,
  Title,
} from "../styles";
import requirementIcon from "../../../images/icons/requirementIcon.svg";
import errorIcon from "../../../images/icons/errorPrimary.svg";

export const Password: FunctionComponent = () => {
  const [data, setData] = useState<{
    password: string;
    passwordRepeat: string;
  }>({
    password: "",
    passwordRepeat: "",
  });

  const [error, setError] = useState({
    passwordSame: false,
    length: false,
    special: false,
    uppercase: false,
  });

  /** check if the new password is correct */
  const checkPasswordRequirements = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // check whether the passwords are same
    if (data.password !== data.passwordRepeat) {
      setError((prev) => ({ ...prev, passwordSame: true }));
    } else {
      setError((prev) => ({ ...prev, passwordSame: false }));
    }

    // checking special character
    if(!data.password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        setError((prev) => ({ ...prev, special: true}));
    }
    else {
        setError((prev) => ({ ...prev, special: false }));
    }

      // check if the password has a 10 characters at least
      if (data.password.length < 10) {
        setError((prev) => ({ ...prev, length: true }));
      } else {
        setError((prev) => ({ ...prev, length: false }));
      }

      if(/[a-z]/.test(data.password) && /[A-Z]/.test(data.password)){
        setError((prev) => ({ ...prev, uppercase: true }));
      }
      else {
        setError((prev) => ({ ...prev, uppercase: false }));
      }
    
  };
  // flag which is pointing on that if the user's password was updated successfully
  const [success, setSuccess] = useState<boolean>(false);

  /** changing data state */
  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    return setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** firebase auth operation - change user's password */
  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if the new password is passing requirements
    if (data.password === data.passwordRepeat) {
    } else {
    }
  };
  return (
    <>
      {!success && (
        <SettingsForm onSubmit={handleResetPassword}>
          <Title>Update password</Title>
          <FormColumn>
            {/* name input */}
            <FormItem left={false}>
              <Label>
                New password
                <Input
                  onBlur={checkPasswordRequirements}
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChangeData}
                />
              </Label>
            </FormItem>
          </FormColumn>

          <FormColumn>
            {/* name input */}
            <FormItem left={true}>
              <Label>
                Repeat the password
                <Input
                  onBlur={checkPasswordRequirements}
                  type="password"
                  name="passwordRepeat"
                  value={data.passwordRepeat}
                  onChange={handleChangeData}
                />
              </Label>
            </FormItem>
          </FormColumn>

          <RequirementsTitle>Password requirements</RequirementsTitle>

          <AlertWrapper>
            <img src={!error.length ? requirementIcon : errorIcon} alt="Exclamation mark" />
            <strong>10 characters at least</strong>
          </AlertWrapper>

          <AlertWrapper>
            <img src={!error.uppercase ? requirementIcon : errorIcon} alt="Exclamation mark" />
            <strong>1 uppercase letter</strong>
          </AlertWrapper>

          <AlertWrapper>
       
         <img
              src={!error.special ? requirementIcon : errorIcon}
              alt="Exclamation mark"
            />
            <strong>1 special character</strong>
          </AlertWrapper>

          {error.passwordSame && (
            <AlertWrapper>
              <img src={errorIcon} alt="Exclamation mark" />
              <strong>Passwords are not the same</strong>
            </AlertWrapper>
          )}

          <BtnWrapper>
            <Button>Change password</Button>
          </BtnWrapper>
        </SettingsForm>
      )}
    </>
  );
};
