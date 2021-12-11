import { FunctionComponent, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { getAuth, updateProfile } from "firebase/auth";
import {
  FormColumn,
  FormItem,
  Label,
  SettingsForm,
  Input,
  BtnWrapper,
  Button,
  AlertWrapper,
  SuccessfulNotification,
  SuccessfulTitle,
  SuccessfulList,
  SuccessfulListItem,
  SuccessfulBtn,
} from "../styles";

import alertIcon from "../../../images/icons/alert.svg";
import updatedDataIcon from "../../../images/icons/updatedData.svg";
import { IFSettingsGeneralDataState } from "../../../types";

/** component with general info about the user - name, surname, email, username */
export const GeneralInfo: FunctionComponent = () => {

  const [baseData, setBaseData] = useState<IFSettingsGeneralDataState<string>>({
    name: "",
    surname: "",
    displayName: "",
  });

  // state with data about user's account
  const [data, setData] = useState<IFSettingsGeneralDataState<string>>({
    name: "",
    surname: "",
    displayName: "",
    email: "",
  });

  // state with flag that are determines what data will be changed, changing when input lose his focus
  const [willChange, setWillChange] = useState<
    IFSettingsGeneralDataState<boolean>
  >({
    name: false,
    surname: false,
    displayName: false,
  });

  // flag which is pointing on that if the user's data was updated successfully
  const [success, setSuccess] = useState<boolean>(true);

  // set auth data when component will mount
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setData((prev) => ({
        ...prev,
        // @ts-ignore
        displayName: user.displayName ? user.displayName : "",
        // @ts-ignore
        email: user.email ? user.email : "",
      }));
    });
  }, []);

  const checkIsDataWillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setWillChange((prev) => ({
      ...prev,
      // @ts-ignore
      [name]: value === baseData[name] ? false : true,
    }));
  };

  /** change data state */
  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateDisplayName = () => {
    // @ts-ignore
    return updateProfile(auth.currentUser, {
      displayName: data.displayName,
    })
      .then(() => {
        console.log("your profile has been updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /** update user's profile in firebase database*/
  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDisplayName();
  };
  return (
    <>
      {!success && (
        <SettingsForm onSubmit={handleUpdateProfile}>
          <FormColumn>
            <FormItem left={false}>
              <Label>
                Name
                <Input
                  name="name"
                  value={data.name}
                  onChange={handleChangeData}
                  onBlur={checkIsDataWillChange}
                />
              </Label>
            </FormItem>
            <FormItem left={false}>
              <Label>
                Display name
                <Input
                  name="displayName"
                  value={data.displayName}
                  onChange={handleChangeData}
                  onBlur={checkIsDataWillChange}
                />
              </Label>
            </FormItem>
          </FormColumn>

          <FormColumn>
            <FormItem left={true}>
              <Label>
                Surname
                <Input
                  name="surname"
                  value={data.surname}
                  onChange={handleChangeData}
                  onBlur={checkIsDataWillChange}
                />
              </Label>
            </FormItem>
            <FormItem left={true}>
              <Label>
                E-mail
                <Input
                  readOnly
                  value={data.email}
                  block={true}
                  title="You cannot change e-mail"
                />
              </Label>
            </FormItem>
          </FormColumn>

          {/* alerts about data that will changed  */}

          {/* display name change notification */}
          {willChange.displayName && (
            <AlertWrapper>
              <img src={alertIcon} alt="Alert" />
              <strong>Your display name will be changed</strong>
            </AlertWrapper>
          )}

          {/* name change notification */}
          {willChange.name && (
            <AlertWrapper>
              <img src={alertIcon} alt="Alert" />
              <strong>Your name will be changed</strong>
            </AlertWrapper>
          )}

          {/* surname change notification */}
          {willChange.surname && (
            <AlertWrapper>
              <img src={alertIcon} alt="Alert" />
              <strong>Your surname name will be changed</strong>
            </AlertWrapper>
          )}

          <BtnWrapper>
            <Button>Save Changes</Button>
          </BtnWrapper>
        </SettingsForm>
      )}

      {success && <SuccessfulNotification> 
          <SuccessfulTitle>Your account has been updated</SuccessfulTitle>
          <SuccessfulList>
                 {!willChange.displayName && <SuccessfulListItem>
                      <img src={updatedDataIcon} alt='Data updated'/>
                      <strong>display name updated</strong>
                   </SuccessfulListItem>}

                   {!willChange.name && <SuccessfulListItem>
                      <img src={updatedDataIcon} alt='Data updated'/>
                      <strong>Name updated</strong>
                   </SuccessfulListItem>}

                   {!willChange.surname && <SuccessfulListItem>
                      <img src={updatedDataIcon} alt='Data updated'/>
                      <strong>Surname updated</strong>
                   </SuccessfulListItem>}
          </SuccessfulList>

          
          <BtnWrapper>
            <SuccessfulBtn>Save Changes</SuccessfulBtn>
          </BtnWrapper>
        </SuccessfulNotification>}
    </>
  );
};
