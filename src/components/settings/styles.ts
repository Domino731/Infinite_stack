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
  background: #fff;
  border-radius: ${(props) => props.theme.radius.L};
  box-shadow: 2px 5px 14px #d2d2d2;
  padding: 28px 30px;
  ${setGradientShadow({
    background: `linear-gradient(to right, #009fff, #ec2f4b)`,
    transition: "0.3s",
    activeAllTime: false,
    hoverEffect: ``,
  })};
`;
export const FormColumn = styled.div`
  display: inline-block;
  width: 50%;
`;
export const FormItem = styled.div<{ left?: boolean }>`
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.whiteSmoke};
  ${(props) => (props.left ? "padding-left: 20px;" : "padding-right: 20px;")};
`;
export const Label = styled.label`
  display: block;
  font-size: 0.9em;
  letter-spacing: 0.073em;
  font-weight: 500;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.whiteSmoke};
  margin-bottom: 10px;
  margin-top: 4px;
  font-size: 0.7em;
  padding: 7px 4px;
  border-radius: ${(props) => props.theme.radius.inputM};
  font-family: inherit;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.color.blue};
  font-size: 20px;
  color: #fff;
  border-radius: ${(props) => props.theme.radius.buttonM};
  padding: 0.2em 1.8em;
  border: none;
  transition: 0.1s;
  &:hover {
    letter-spacing: 0.063em;
  }
`;
