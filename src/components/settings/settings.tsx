import { FunctionComponent, useEffect, useState } from "react";
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
        delete: false
    });

    const handleChangeFlag = () => {
        
    }
return <div>
   
    <SettingsHeader/>
    <GeneralInfo/>
    <Password/>
    <DeleteAccount/>
</div>
}