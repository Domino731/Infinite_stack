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
  AlertWrapper,
} from "../styles";

import alertIcon from "../../../images/icons/alert.svg";
import { IFSettingsGeneralDataState } from "../../../types";

/** component with general info about the user - name, surname, email, username */
export const GeneralInfo: FunctionComponent = () => {

  const [baseData, setBaseData] = useState<IFSettingsGeneralDataState<string>>({
    name: "",
    surname: "",
    displayName: "",
    email: ''
  });

  // state with data about user's account
  const [data, setData] = useState<IFSettingsGeneralDataState<string>>({
    name: "",
    surname: "",
    displayName: "",
    email: ''
  });

  // state with flag that are determines what data will be changed, changing when input lose his focus
  const [willChange, setWillChange] = useState<IFSettingsGeneralDataState<boolean>>({
    name: false,
    surname: false,
    displayName: false,
    email: false
  });


  // set auth data when component will mount
  useEffect(()=> {
        return auth.onAuthStateChanged(user => {
             setData(prev => ({...prev,
                 // @ts-ignore
                displayName: user.displayName ? user.displayName : '',
                // @ts-ignore
                email:  user.email ? user.email : ''
            }));

         });
  }, []);

  const checkIsDataWillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    return setWillChange(prev => ({
      ...prev,
      // @ts-ignore
      [name]: value === baseData[name] ? false : true
  }));
  }

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
            <Input  name='name' value={data.name} onChange={handleChangeData} onBlur={checkIsDataWillChange}/>
          </Label>
        </FormItem>
        <FormItem left={false}>
          <Label>
            Display name
            <Input  name='displayName' value={data.displayName} onChange={handleChangeData} onBlur={checkIsDataWillChange}/>
          </Label>
        </FormItem>
      </FormColumn>

      <FormColumn>
        <FormItem left={true}>
          <Label>
            Surname
            <Input  name='surname' value={data.surname} onChange={handleChangeData} onBlur={checkIsDataWillChange} />
          </Label>
        </FormItem>
        <FormItem left={true}>
          <Label>
            E-mail
            <Input readOnly value={data.email} block={true} title='You cannot change e-mail'/>
          </Label>
        </FormItem>
      </FormColumn>

{/* alerts about data that will changed  */}

{/* display name change notification */}
{willChange.displayName && <AlertWrapper> 
  <img src={alertIcon} alt='Alert'/> 
  <strong>Your display name will be changed</strong>
</AlertWrapper>}

{/* name change notification */}
{willChange.name && <AlertWrapper> 
  <img src={alertIcon} alt='Alert'/> 
  <strong>Your name will be changed</strong>
</AlertWrapper>}

{/* surname change notification */}
{willChange.surname && <AlertWrapper> 
  <img src={alertIcon} alt='Alert'/> 
  <strong>Your surname name will be changed</strong>
</AlertWrapper>}

      <BtnWrapper>
        <Button>Save Changes</Button>
      </BtnWrapper>
    </SettingsForm>
  );
};
