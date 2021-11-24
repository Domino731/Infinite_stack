import {FunctionComponent} from "react";
import { Container } from "./generalStyles";
import { Header } from "./header/header";
import { Opening } from "./opening/opening";

/** A component which is gathering sub-components for landing page*/
export const LandingPage : FunctionComponent = () => {
  return <>
    <Header/>
    <main>
      <Opening/>
    </main>
  </>;
};
