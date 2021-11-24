import styled from "styled-components";

export const OpeningContainer = styled.section`
  padding: 0 60px;
  height: 655px;
  display: flex;
`;
export const OpeningContent = styled.div`
  width: 50%;
  height: 100%;
  font-size: 30px;
`;
export const Hash = styled.strong`
  font-size: 1.1em;
  display: block;
  background: ${(props) => props.theme.gradient.sunshine};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 100px;
`;
export const Title = styled.h2`
  font-size: 1.8em;
`;
export const OpeningParagraph = styled.p`
  margin-top: 13px;
  width: 80%;
  font-size: 0.9em;
`;
export const OpeningLink = styled.div`
  a {
    display: inline-block;
    background: ${(props) => props.theme.gradient.celestial};
    padding: 9px 39px;
    font-size: 27px;
    font-weight: 600;
    border-radius: 12px;
    color: ${(props) => props.theme.color.white};
    margin-top: 59px;
    letter-spacing: 0.063em;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 72%;
    height: auto;
    object-fit: cover;
    z-index: -1;
  }
`;
