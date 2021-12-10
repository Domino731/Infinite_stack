import { FunctionComponent, useEffect, useState } from "react";
import { auth } from "../../../firebase";

import {
  FormColumn,
  FormItem,
  Label,
  SettingsForm,
  Input,
  BtnWrapper,
  Button,
} from "../styles";

/** component with general info about the user - name, surname, email, username */
export const GeneralInfo: FunctionComponent = () => {


  // state with data about user's account
  const [data, setData] = useState<{
    name: string;
    surname: string;
    displayName: string | null;
    email: string;
  }>({
    name: "",
    surname: "",
    displayName: "",
    email: ''
  });

  useEffect(()=> {
         auth.onAuthStateChanged(user => {
             // @ts-ignore
             console.log(user.email)
             setData(prev => ({...prev,
                // @ts-ignore
                displayName: user.displayName,
                // @ts-ignore
                email:  user.email ? user.email : ''
            }))
         })
  }, []);


  return (
    <SettingsForm>
      <FormColumn>
        <FormItem left={false}>
          <Label>
            Name
            <Input />
          </Label>
        </FormItem>
        <FormItem left={false}>
          <Label>
            Display name
            <Input />
          </Label>
        </FormItem>
      </FormColumn>

      <FormColumn>
        <FormItem left={true}>
          <Label>
            Surname
            <Input />
          </Label>
        </FormItem>
        <FormItem left={true}>
          <Label>
            E-mail
            <Input readOnly value={data.email} block={true}/>
          </Label>
        </FormItem>
      </FormColumn>

      <BtnWrapper>
        <Button>Save Changes</Button>
      </BtnWrapper>
    </SettingsForm>
  );
};
