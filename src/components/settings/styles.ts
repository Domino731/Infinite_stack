import styled from "styled-components";
import { setGradientShadow } from "../../styles-general/functions";
import { SectionContent } from "../../styles-general/general-styles";

export const SettingContentContainer = styled(SectionContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

export const SettingsForm = styled.form`
  width: 300px;
  height: 500px;
  background: black;

  ${setGradientShadow({
    background: `linear-gradient(to right, #009fff, #ec2f4b)`,
    transition: "0.3s",
    activeAllTime: false,
    hoverEffect: `transform: translate(-50%) rotate(
        -9deg);`,
  })}
`;
