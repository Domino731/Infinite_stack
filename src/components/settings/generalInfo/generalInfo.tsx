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
    displayName: string;
    email: string;
  }>({
    name: "",
    surname: "",
    displayName: "",
    email: ''
  });

  useEffect(()=> {
         auth.onAuthStateChanged(user => {
             setData(prev => ({...prev,
                 // @ts-ignore
                displayName: user.displayName ? user.displayName : '',
                // @ts-ignore
                email:  user.email ? user.email : ''
            }))
         })
  }, []);


  /** change data state */
 const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name, value} = e.target;
     return setData(prev => ({
         ...prev,
         [name]: value
     }));
 } 

  return (
    <SettingsForm>
      <FormColumn>
        <FormItem left={false}>
          <Label>
            Name
            <Input  name='name' value={data.name} onChange={handleChangeData}/>
          </Label>
        </FormItem>
        <FormItem left={false}>
          <Label>
            Display name
            <Input  name='displayName' value={data.displayName} onChange={handleChangeData}/>
          </Label>
        </FormItem>
      </FormColumn>

      <FormColumn>
        <FormItem left={true}>
          <Label>
            Surname
            <Input  name='surname' value={data.surname} onChange={handleChangeData} />
          </Label>
        </FormItem>
        <FormItem left={true}>
          <Label>
            E-mail
            <Input readOnly value={data.email} block={true} title='You cannot change e-mail'/>
          </Label>
        </FormItem>
      </FormColumn>

      <BtnWrapper>
        <Button>Save Changes</Button>
      </BtnWrapper>
    </SettingsForm>
  );
};
