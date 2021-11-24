import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 3px 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 10px ${(props) => props.theme.color.shadow};
`;
export const TitleWrapper = styled.div`
  width: 20%;
  font-size: 50px;
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 0.8em;
  font-weight: 900;
`;
export const TitleIcon = styled.img`
  height: 1.1em;
  margin-right: 0.1em;
`;
export const InputWrapper = styled.div`
  width: 51%;
  display: flex;
`;
export const AuthButtonsWrapper = styled.div`
  width: 29%;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 87%;
  height: 100%;
  font-size: 20px;
  padding: 0.3em;
  border: 3px solid #b5a9a9;
  border-radius: 9px;
  background-color: ${(props) => props.theme.color.whiteSecondary};
  outline: none;
  z-index: 2;
  &:focus {
    border: 3px solid ${(props) => props.theme.color.blue};
    box-shadow: 0 0 4px ${(props) => props.theme.color.blue};
  }
`;

export const SearchBtn = styled.button`
  display: block;
  width: 23%;
  height: 41px;
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: 9px;
  margin-left: -12px;
  z-index: 1;
  border: 3px solid #b5a9a9;
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0.064em;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.color.blueSecondary};
  }
`;

const AuthLink = styled.div`
  height: 100%;
  padding: 0 32px;
  height: 41px;
  font-size: 23px;
  font-weight: 700;
  margin-left: 14px;
  border-radius: 9px;
  border: none;
  line-height: 100px;
  display: flex;
  align-items: center;
`;
export const LogInLink = styled(AuthLink)`
  border: 3px solid ${(props) => props.theme.color.blueSecondary};
  transition: 0.1s;
  &:hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.blueSecondary};
  }
`;
export const SignUpLink = styled(AuthLink)`
  transition: 0.1s;
  background-color: ${(props) => props.theme.color.blueSecondary};
  color: ${(props) => props.theme.color.white};
  &:hover {
    border: 3px solid ${(props) => props.theme.color.blueSecondary};
    color: ${(props) => props.theme.color.blueSecondary};
    background-color: ${(props) => props.theme.color.white};
  }
`;
