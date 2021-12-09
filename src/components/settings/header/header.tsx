import { FunctionComponent } from "react"
import { HeaderBtn, HeaderButtonsBar, HeaderParagraph, SectionHeader, SectionTitle } from "../../../styles-general/general-styles"
import { IFSettingsHeaderProps } from "../../../types"

export const SettingsHeader : FunctionComponent<IFSettingsHeaderProps> = ({flags, changeFlagFnc}) => {

    return <SectionHeader>
        <SectionTitle>Settings</SectionTitle>
        <HeaderParagraph>Manage your account settings</HeaderParagraph>
        <HeaderButtonsBar>
            <HeaderBtn onClick={() => changeFlagFnc('general')}><i className="fas fa-id-card"/> General</HeaderBtn>
            <HeaderBtn onClick={() => changeFlagFnc('password')}><i className="fas fa-key"/> Password</HeaderBtn>
            <HeaderBtn onClick={() => changeFlagFnc('delete')}><i className="fas fa-trash-alt"/> Delete account</HeaderBtn>
        </HeaderButtonsBar>
    </SectionHeader>
}