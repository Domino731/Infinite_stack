import { FunctionComponent } from "react";

import { FormColumn, FormItem, Label, SettingsForm, Input, BtnWrapper, Button } from "../styles";

/** component with general info about the user - name, surname, email, username */
export const GeneralInfo: FunctionComponent = () => {
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


      <FormColumn >
        <FormItem left={true}>
          <Label>
            Surname
            <Input />
          </Label>
        </FormItem>
        <FormItem left={true}>
          <Label>
            E-mail
            <Input />
          </Label>
        </FormItem>
      </FormColumn>

      <BtnWrapper>
          <Button>Save Changes</Button>
      </BtnWrapper>
    </SettingsForm>
  );
};
