import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
`;
export const NavWrapper = styled.div`
  width: 18%;
  height: 100%;
  padding: 0 10px;
`;
export const ContentWrapper = styled.main`
  width: 82%;
  height: 100%;
  background-color: ${(props) => props.theme.color.whitePrimary};
`;

export const NavList = styled.ul`
  margin-top: 71px;
`;

export const ListItem = styled.li`
  padding: 6px 16px;
  border-radius: 9px;
  margin-bottom: 12px;
  font-size: 25px;
  transition: 0.05s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.whitePrimary};
  }
  a {
    color: ${(props) => props.theme.color.silver};
  }
  i {
    display: inline-block;
    min-width: 1.6em;
  }
`;
