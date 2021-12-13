import { FunctionComponent, useCallback, useState } from "react";
import { BtnWrapper, Button, DeleteButton, DeleteForm, FormColumnSingle, FormItem, Input, Label, Title, WarningText } from "../styles";

export const DeleteAccount : FunctionComponent = () => {

    const [data, setData] = useState<string>('');

    const handleChangeData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
           setData(e.target.value);
        },
        [],
    )
    return <DeleteForm>
        <Title>Delete Account</Title>
        <WarningText>Deleting account will bring that fact is all your projects and teams will be deleted!</WarningText>
        <FormColumnSingle>
            <FormItem left="none">
                 <Label>
                Name
                <Input
                  value={data}
                  onChange={handleChangeData}
                />
              </Label>
            </FormItem>
       
            <BtnWrapper>
            <DeleteButton>Delete my account</DeleteButton>
          </BtnWrapper>
          
        </FormColumnSingle>
    </DeleteForm>
}