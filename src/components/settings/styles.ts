import styled from "styled-components";
import { setGradientShadow } from "../../styles-general/functions";
import { SectionContent } from "../../styles-general/general-styles";

export const SettingContentContainer = styled(SectionContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 0 440px;
`;

export const SettingsForm = styled.form`
  width: 100%;
  height: 400px;
  background: #fff;
  border-radius: ${(props) => props.theme.radius.L};
  box-shadow: 2px 5px 14px #d2d2d2;
  ${setGradientShadow({
    background: `linear-gradient(to right, #009fff, #ec2f4b)`,
    transition: "0.3s",
    activeAllTime: false,
    hoverEffect: `transform: translate(-50%) rotate(
        -9deg);`,
  })};
`;
