import styled from "styled-components";
import { gradients } from "../../../properties/gradients";

export const BenefitsContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${(props) => props.theme.color.whiteSecondary};
  margin-top: 88px;
`;
export const Title = styled.h2`
  font-size: 39px;
  text-align: center;
  padding-top: 14px;
  color: ${(props) => props.theme.color.blue};
  letter-spacing: 0.111em;
`;
export const BenefitsList = styled.div`
  margin-top: 67px;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 0;
`;
export const BenefitItemContainer = styled.div`
  border-radius: 24px;
  width: 352px;
  height: 421px;
  background-color: ${(props) => props.theme.color.whiteSecondary};
  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
  position: relative;
  font-size: 20px;
  &::after {
    top: 0;
    border-radius: 24px;
    left: 50%;
    right: 50%;
    transform: translate(-50%) rotate(9deg);
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    z-index: -1;
    background: ${gradients.benefit};
    transition: 0.3s;
  }
  &:hover:after {
    transform: translate(-50%) rotate(-9deg);
  }
`;

export const BenefitGraphic = styled.img`
  display: block;
  margin: 10px auto 0;
  width: 241px;
  height: auto;
`;
export const BenefitTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.063em;
  margin-top: 6px;
  font-weight: 900;
`;
export const BenefitDescription = styled.p`
  font-size: 18px;
  padding: 0 10px;
  text-align: center;
  font-weight: 600;
  margin-top: 6px;
`;
