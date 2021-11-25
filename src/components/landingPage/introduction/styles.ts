import { Props } from "react";
import styled from "styled-components";
import { gradients } from "../../../properties/gradients";
export const IntroductionContainer = styled.div`
  padding: 20px 0;
  margin-top: 70px;
`;
export const GraphicContainer = styled.div`
  display: inline-block;
  width: 50%;
`;
export const CardsList = styled.ul`
  display: inline-block;
  width: 50%;
`;

interface PropsIntroductionCardContainer {
  active: boolean;
}
export const IntroductionCardContainer = styled.li<PropsIntroductionCardContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin-top: 22px;
  border-radius: 22px;
  height: 110px;
  padding: 0 14px;
  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
  font-size: 30px;
  position: relative;
  background-color: ${(props) => props.theme.color.white};
  &::after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 60px;
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    left: 0;
    background: ${gradients.benefit};
    transition: 0.2s;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: translateX(-40px);
  }
`;
export const CardTitle = styled.h3`
  font-size: 1.1em;
`;
export const CardDescription = styled.p`
  font-size: 0.7em;
  margin-top: 0.2em;
`;
