import { FunctionComponent, useEffect, useState } from "react";
import { DeleteAccount } from "./delete/deleteAccount";
import { GeneralInfo } from "./generalInfo/generalInfo";
import { SettingsHeader } from "./header/header";
import { Password } from "./password/password";

export const Settings: FunctionComponent = () => {

return <div>
   
    <SettingsHeader/>
    
    <GeneralInfo/>
    <Password/>
    <DeleteAccount/>
</div>
}