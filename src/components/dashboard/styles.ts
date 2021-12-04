import styled from "styled-components";
import { keyframes } from "styled-components";
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

interface PropsListItemOpen {
  active?: boolean;
}
export const ListText = styled.div<{ active: boolean }>`
  padding: 9px 23px;
  border-radius: 9px;
  background-color: ${(props) => props.active && "#f2ecec"};
  color: ${(props) => props.active && props.theme.color.black};
  position: relative;
  &:hover {
    color: ${(props) => props.theme.color.black};
    cursor: pointer;
    background-color: ${(props) => props.theme.color.whitePrimary};
  }

  i[class="fas fa-chevron-down"] {
    right: 21px;
    position: absolute;
    min-width: 0;
    transition: 0.2s;
    transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
  }

  &:hover i[class="fas fa-chevron-down"] {
    transform: rotate(180deg);
  }
`;

export const ListItem = styled.li<PropsListItemOpen>`
  margin-bottom: 8px;
  font-size: 25px;
  transition: 0.05s;
  color: ${(props) => props.theme.color.silver};

  a {
    display: block;
    padding: 9px 23px;
    border-radius: 9px;
    color: inherit;
    &:hover {
      color: ${(props) => props.theme.color.black};
      cursor: pointer;
      background-color: ${(props) => props.theme.color.whitePrimary};
    }
  }
  i {
    text-align: left;
    display: inline-block;
    min-width: 2em;
  }
`;

export const ListItemOpen = styled(ListItem)``;

export const NestedList = styled.ul`
  margin: 11px 0 21px 26px;
  padding-left: 13px;
  border-left: 5px solid ${(props) => props.theme.color.blue};
`;

const showNestedListItem = keyframes`
  from {
    transform: scale(0%);
  }

  to {
    transform: scale(100%);
  }
`;

export const NestedListItem = styled.li<{ animationDelay?: number }>`
  transform: scale(0%);
  animation: 0.2s ${showNestedListItem} forwards;
  animation-delay: ${(props) => props.animationDelay + "s"};
  a {
    appearance: none;
    font-size: 19px;
  }
`;
