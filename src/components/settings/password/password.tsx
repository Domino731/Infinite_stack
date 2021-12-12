import { FunctionComponent, useState } from "react";
import {
    BtnWrapper,
    Button,
    FormColumn,
  FormColumnCenter,
  FormItem,
  Input,
  Label,
  SettingsForm,
  Title,
} from "../styles";

export const Password: FunctionComponent = () => {
  const [data, setData] = useState<{
    password: string;
    passwordRepeat: string;
  }>({
    password: "",
    passwordRepeat: "",
  });

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
  return (
    <>
      {!success && (
        <SettingsForm>
        <Title>Update password</Title>
           <FormColumn>
                  {/* name input */}
            <FormItem left={false}>
              <Label>
                New password
                <Input
                type='password'
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
                type='password'
                  name="passwordRepeat"
                  value={data.passwordRepeat}
                  onChange={handleChangeData}
                />
              </Label>
            </FormItem>
           </FormColumn>

           <BtnWrapper>
               <Button>Change password</Button>
           </BtnWrapper>
        </SettingsForm>
      )}
    </>
  );
};
