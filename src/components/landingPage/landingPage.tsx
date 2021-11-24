import {FunctionComponent} from "react";
import { Benefits } from "./benefits/benefits";
import { Container } from "./generalStyles";
import { Header } from "./header/header";
import { Opening } from "./opening/opening";

/** A component which is gathering sub-components for landing page*/
export const LandingPage : FunctionComponent = () => {
  return <>
    <Header/>
    <main>
      <Opening/>
      <Benefits/>
    </main>
  </>;
};
