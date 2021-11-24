import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  Hash,
  ImageWrapper,
  OpeningContainer,
  OpeningContent,
  OpeningLink,
  OpeningParagraph,
  Title,
} from "./styles";
import openingGraphic from "../../../images/landing-page/meeting.jpg";

/** component with opening content -> title, hash, image. */
export const Opening: FunctionComponent = () => {
  return (
    <OpeningContainer>
      <OpeningContent>
          {/* hash */}
        <Hash>#experience something that wasn't there before</Hash>

        {/* title */}
        <Title>
          Together we can build the second <br /> world
        </Title>

        {/* text */}
        <OpeningParagraph>
          Meet the Infinite_stack platform, place where your imagination is the
          only limit. Gather your team and together change the world. Meet
          people with passion and together face to your challenges. Manage your
          project easily and efficiently by special dashboard panel, and
          increase your productivity. Plan your self-development and together
          with others change the world as we know.
        </OpeningParagraph>

        {/* link to sign up form */}
        <OpeningLink>
          <Link to={{ pathname: "/courses" }}>Let's get started</Link>
        </OpeningLink>

      </OpeningContent>

      <ImageWrapper>
          <img src={openingGraphic}/>
      </ImageWrapper>
    </OpeningContainer>
  );
};
