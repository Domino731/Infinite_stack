import { FunctionComponent } from "react";
import { GeneralInfo } from "./generalInfo/generalInfo";
import { Password } from "./password/password";

export const Settings: FunctionComponent = () => {
return <div>
    <GeneralInfo/>
    <Password/>
</div>
}