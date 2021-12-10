import { settings } from "cluster";

export interface IFGradientShadowSettings {
  background: string;
  transition: string;
  width: string;
  height: string;
  activeAllTime: boolean;
  hoverEffect: string;
}

/**
 * that function is returning styles which are will create box with gradient background
 * @param settings - you need to provide object with styles settings
 */
export const setGradientShadow = (
  settings: Partial<IFGradientShadowSettings>
) => {
  return `position: relative;
  &::after {
    top: 0;
    border-radius: inherit;
    left: 50%;
    right: 50%;
    -webkit-transform: translate(-50%) rotate(9deg);
    -ms-transform: translate(-50%) rotate(9deg);
    transform: translate(-50%) rotate(9deg);
    display: block;
    content: "";
    width: ${settings.width ? settings.width : "100%"};
    height: ${settings.height ? settings.height : "100%"};;
    position: absolute;
    z-index: -1;
    background: ${
      settings.background
        ? settings.background
        : "linear-gradient(to right, #009fff, #ec2f4b)"
    };
    -webkit-transition: ${settings.transition ? settings.transition : "0.3s"};
    transition:  ${settings.transition ? settings.transition : "0.3s"};
  }
  ${
    settings.hoverEffect &&
    `
  &:hover::after{
    ${settings.hoverEffect}
  }
  `
  }
  `;
};
