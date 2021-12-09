import { FunctionComponent } from "react"
import { HeaderBtn, HeaderButtonsBar, HeaderParagraph, SectionHeader, SectionTitle } from "../../../styles-general/general-styles"
import { Header } from "../../landingPage/header/header"

export const SettingsHeader : FunctionComponent = () => {
    return <SectionHeader>
        <SectionTitle>Settings</SectionTitle>
        <HeaderParagraph>Manage your account settings</HeaderParagraph>
        <HeaderButtonsBar>
            <HeaderBtn><i className="fas fa-id-card"/> General</HeaderBtn>
            <HeaderBtn><i className="fas fa-key"/> Password</HeaderBtn>
            <HeaderBtn><i className="fas fa-trash-alt"/> Delete account</HeaderBtn>
        </HeaderButtonsBar>
    </SectionHeader>
}