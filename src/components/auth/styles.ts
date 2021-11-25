import styled from "styled-components";

export const AuthContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
`;

export const AuthBox = styled.div<{ background?: string }>`
  background-size: cover;
  background-image: url(${(props) => props.background});
  width: 50%;
  height: 100%;
`;
export const AuthIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  img {
    width: 51px;
  }
`;
export const AuthFormWrapper = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 230px;
`;
export const AuthTitle = styled.h2`
  width: 100%;
  font-size: 43px;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.063em;
`;

export const AuthSubtitle = styled.strong`
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #909ba6;
  padding-bottom: 0.3px;
  border-bottom: 2px solid ${(props) => props.theme.color.grayLight};
`;
export const AuthForm = styled.form`
  width: 100%;
  margin-top: 40px;
`;
export const LabelWrapper = styled.div`
  font-size: 30px;
  margin-top: 0.5em;
`;
export const LabelItem = styled.label`
  font-size: 0.8em;
  margin-top: 0.7em;
  margin-bottom: 0.2em;
  display: block;
`;
export const AuthInput = styled.input<{ correct: boolean }>`
  font-size: 0.7em;
  padding: 0.5em 0.4em;
  border-radius: 2em;
  width: 100%;
  border: 3px solid
    ${(props) =>
      !props.correct ? props.theme.color.error : props.theme.color.grayLight};

  &:focus {
    border: 3px solid ${(props) => props.theme.color.grayDark};
  }
`;
export const RedirectLinkWrapper = styled.div<{ color: string }>`
  text-align: right;
  font-size: 20px;
  margin-top: 0.9em;
  a {
    color: ${(props) => props.color};
  }
`;
export const RedirectLinksWrapper = styled(RedirectLinkWrapper)`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button<{ color: string }>`
  background: ${(props) => props.color};
  margin-top: 1.3em;
  width: 100%;
  font-size: 28px;
  padding: 0.3em 0;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
  border: none;
  border-radius: 2em;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  img {
    height: 0.8em;
    margin-right: 0.2em;
  }
  strong {
    font-size: 0.6em;
    color: ${(props) => props.theme.color.error};
  }
`;

export const TitleWrapper = styled.div`
  height: 33%;
  font-size: 30px;
  padding-top: 30px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  div {
    margin-right: 0.3em;
    border-radius: 3em;
    height: 2.6em;
    width: 2.6em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color.white};
    text-shadow: 0 0 3px ${(props) => props.theme.color.black};
  }
  img {
    height: 80%;
  }
  h1 {
    color: ${(props) => props.theme.color.white};
    font-weight: 900;
    letter-spacing: 0.06em;
    font-size: 1.4em;
    text-shadow: 0 0 3px ${(props) => props.theme.color.black};
  }
`;
export const QuoteWrapper = styled.div`
  height: 33%;
  text-align: right;
  padding-right: 120px;
  font-weight: 600;
  font-size: 58px;
  color: ${(props) => props.theme.color.white};
  line-height: 1.2em;
  text-shadow: 0 0 3px ${(props) => props.theme.color.black};
`;
export const RightsWrapper = styled.div`
  height: 33%;
  font-size: 21px;
  padding-left: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: flex-end;
`;
