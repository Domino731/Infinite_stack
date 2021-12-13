import { FunctionComponent, useCallback, useState } from "react";
import {
  AlertWrapper,
  BtnWrapper,
  DeleteButton,
  DeleteCode,
  DeleteForm,
  FormColumnSingle,
  FormItem,
  Input,
  Label,
  Title,
  WarningText,
} from "../styles";
import uniqid from "uniqid";
import { deleteUser, User } from "firebase/auth";
import { auth } from "../../../firebase";
import errorIcon from "../../../images/icons/errorPrimary.svg";

/** component with form by which user can delete his account */
export const DeleteAccount: FunctionComponent = () => {
  // the code that must be prescribed by user
  const deleteCode = uniqid();

  // state with value from input
  const [data, setData] = useState<string>("");

  // flag by which an error is displayed when the code prescribed by the user isnt correct
  const [error, setError] = useState<boolean>(false);

  /** change data state */
  const handleChangeData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      return setData(e.target.value);
    },
    []
  );

  /** check if the code prescribed by the user is correct and set error state  */
  const checkDeleteCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value === deleteCode ? setError(false) : setError(true);
    },
    []
  );

  /** firebase auth operation -> delete user's account */
  const deleteAccount = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser as User;

    if (data === deleteCode) {
      return deleteUser(user).catch((err) => {
        console.error(err);
      });
    } else {
      return setError(true);
    }
  }, []);

  return (
    <DeleteForm onSubmit={deleteAccount}>
      {/* title */}
      <Title>Delete Account</Title>
      <WarningText>
        Deleting account will bring that fact is all your projects and teams
        will be deleted!
      </WarningText>

      {/* the code that must be prescribed by the user */}
      <DeleteCode>Rewrite this code: {deleteCode}</DeleteCode>
      <FormColumnSingle>
        {/* data input */}
        <FormItem left="none">
          <Label>
            <Input
              value={data}
              onChange={handleChangeData}
              onBlur={checkDeleteCode}
            />
          </Label>
        </FormItem>

        {/* notification about the incorrect prescribed code */}
        {error && (
          <AlertWrapper>
            <img src={errorIcon} alt="Alert" />
            <strong>Rewrite the code properly</strong>
          </AlertWrapper>
        )}

        <BtnWrapper>
          <DeleteButton>Delete my account</DeleteButton>
        </BtnWrapper>
      </FormColumnSingle>
    </DeleteForm>
  );
};
