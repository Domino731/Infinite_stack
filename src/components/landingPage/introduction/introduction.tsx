import { FunctionComponent } from "react";
import { IntroductionCard } from "./introductionCard";
import { CardsList, GraphicContainer, IntroductionContainer } from "./styles";

export const Introduction: FunctionComponent = () => {
  return (
    <IntroductionContainer>
      <GraphicContainer>
        
      </GraphicContainer>

      <CardsList>
        <IntroductionCard
          title="Your project"
          description={<>Your rules, you time. Plan your project from start to finish. <br/>
          Make your project a second windows</>}
          active={false}
        />
         <IntroductionCard
          title="Need help?"
          description={<>Have you a problem that consuming a lot of your time?  <br/>
            Here you will find your solution.</>}
          active={false}
        />
         <IntroductionCard
          title="Create your team"
          description={<>Gather and meet people like you and together create <br/>
            things the world has never heard of.</>}
          active={false}
        />
         <IntroductionCard
          title="Develop yourself"
          description={<>Sing up, and get access to the library with the latest news
            from the world of technology </>}
          active={false}
        />
         <IntroductionCard
          title="Webpack configurator"
          description={<>Webpack is not easy to learn for beginnersOn the website you will  find <br/>  a configurator that will guide you through the configuration process</>}
          active={false}
        />
      </CardsList>
    </IntroductionContainer>
  );
};
