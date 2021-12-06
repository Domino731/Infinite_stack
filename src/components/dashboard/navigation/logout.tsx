import { FunctionComponent } from "react"
import {  LogoutBtn, LogoutWrapper } from "../styles"
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

/** component with button by which user can logout*/
export const Logout: FunctionComponent = () => {

    /** sign out the current user */
    const handleLogout = () => {
         return signOut(auth);
    }
    return <LogoutWrapper>
        <LogoutBtn onClick={handleLogout}>Logout <i className="fas fa-sign-out-alt"/></LogoutBtn>
    </LogoutWrapper>
}