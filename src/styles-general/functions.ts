/** that function is returning styles which are will create box with gradient background */
export const setGradientShadow = () => {
  return `position: relative;
  &::after {
    top: 0;
    border-radius: 24px;
    left: 50%;
    right: 50%;
    -webkit-transform: translate(-50%) rotate(9deg);
    -ms-transform: translate(-50%) rotate(9deg);
    transform: translate(-50%) rotate(9deg);
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    z-index: -1;
    background: linear-gradient(to right, #009fff, #ec2f4b);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }`;
};
