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

export const SuccessfulNotification = styled.div`
  width: 100%;
  background: #fff;
  border-radius: ${(props) => props.theme.radius.L};
  box-shadow: 2px 5px 14px #d2d2d2;
  padding: 50px 30px;
  ${setGradientShadow({
    background: `linear-gradient(to right, #56ab2f, #a8e063)`,
    transition: "0.3s",
    activeAllTime: false,
    hoverEffect: ``,
  })};
  &::after {
    transform: translate(-50%) rotate(6deg);
  }
`;
export const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`;
export const SuccessfulTitle = styled.h2`
  font-size: 29px;
`;
export const SuccessfulList = styled.ul`
  font-size: 20px;
  margin-top: 25px;
`;
export const SuccessfulListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 0.6em;
  img {
    width: 1.7em;
    margin-right: 0.4em;
  }
  strong {
    font-size: 1em;
    color: ${(props) => props.theme.color.blackSecondary};
  }
`;
export const FormColumn = styled.div`
  display: inline-block;
  width: 50%;
`;
export const FormColumnCenter = styled.div`
  // margin: 0 auto;
  width: 100%;
`;
export const FormItem = styled.div<{ left?: boolean | "none" }>`
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${(props) => props.theme.color.whiteSmoke};
  ${(props) => (props.left ? "padding-left: 20px;" : "padding-right: 20px;")};
  ${(props) => props.left === "none" && "padding: 0;"};
`;
export const Label = styled.label`
  display: block;
  font-size: 0.9em;
  letter-spacing: 0.073em;
  font-weight: 500;
`;
export const Input = styled.input<{ block?: boolean }>`
  display: block;
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.whiteSmoke};
  margin-bottom: 10px;
  margin-top: 4px;
  font-size: 0.9em;
  padding: 7px 6px;
  border-radius: ${(props) => props.theme.radius.inputM};
  font-family: inherit;
  color: ${(props) => props.block && "#d4dade"};
  background: ${(props) => props.block && "#f6f6f6"};
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
export const SuccessfulBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.greenCorrect};
`;

export const AlertWrapper = styled.div`
  font-size: 20px;
  margin-top: 0.4em;
  display: flex;
  align-items: center;
  img {
    width: 1.4em;
    margin-right: 0.3em;
  }
  strong {
    font-size: 0.7em;
    color: ${(props) => props.theme.color.blackSecondary};
  }
`;
export const RequirementsTitle = styled.h3`
  font-size: 19px;
`;
export const Requirements = styled.div`
  padding: 7px;
  font-size: 23px;
`;
