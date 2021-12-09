import { FunctionComponent, useEffect, useState } from "react";
import { SectionContent } from "../../styles-general/general-styles";
import { IFSettingsStateFlag } from "../../types";
import { DeleteAccount } from "./delete/deleteAccount";
import { GeneralInfo } from "./generalInfo/generalInfo";
import { SettingsHeader } from "./header/header";
import { Password } from "./password/password";

export const Settings: FunctionComponent = () => {
  // object with flag necessary for toggling component content
  const [flag, setFlag] = useState<IFSettingsStateFlag>({
    general: true,
    password: false,
    delete: false,
  });

  /** change flag state
   * @param key - key in flag state that you want to change
   */
  const handleChangeFlag = (key: "general" | "password" | "delete") =>
  setFlag(() => ({
    general: false,
    password: false,
    delete: false,
    [key]:  true,
    }));

  return (
    <>
      {/* header with buttons by which user can toggle components */}
      <SettingsHeader flags={flag} changeFlagFnc={handleChangeFlag} />
      <SectionContent>
        {flag.general && <GeneralInfo />}
        {flag.password && <Password />}
        {flag.delete && <DeleteAccount />}
      </SectionContent>
    </>
  );
};
