import styled from "styled-components";

export const SectionHeader = styled.header`
  padding: 15px 44px 0;
  background-color: #fff;
  border-left: 2px solid ${(props) => props.theme.color.whitePrimary};
  font-size: 30px;
  box-shadow: 2px 5px 14px ${(props) => props.theme.color.boxShadow};
`;
export const SectionTitle = styled.h2`
  font-size: 1.4em;
`;
export const HeaderParagraph = styled.p`
  font-size: 0.6em;
`;
export const HeaderButtonsBar = styled.div`
  margin-top: 10px;
`;
export const HeaderBtn = styled.button`
  font-size: 0.7em;
  padding: 0.2em 0.6em;
  margin-right: 0.1em;
  border: none;
  transition: 0.1s;
  border-radius: ${(props) => props.theme.radius.buttonS}
    ${(props) => props.theme.radius.buttonS} 0 0;
  &:hover {
    background-color: ${(props) => props.theme.color.whitePrimary};
  }
  i {
    padding-right: 0.4em;
  }
`;
