import { FunctionComponent, useCallback, useState } from "react";
import { BtnWrapper, Button, DeleteButton, DeleteCode, DeleteForm, FormColumnSingle, FormItem, Input, Label, Title, WarningText } from "../styles";
import uniqid from 'uniqid';

export const DeleteAccount : FunctionComponent = () => {

    const [data, setData] = useState<string>('');

    const [isSame, setIsSame] = useState<boolean>(false);

    const deleteCode = uniqid();

    const handleChangeData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
           setData(e.target.value);
        },
        [],
    )
    return <DeleteForm>
        <Title>Delete Account</Title>
        <WarningText>Deleting account will bring that fact is all your projects and teams will be deleted!</WarningText>

        <DeleteCode>Rewrite this code: {deleteCode}</DeleteCode>
        <FormColumnSingle>
            <FormItem left="none">
                 <Label>
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