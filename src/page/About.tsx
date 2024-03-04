import { Fragment } from "react/jsx-runtime";
import AboutHeader from "../components/AboutHeader";
import Aos from "../components/Aos";
import Platzi from "../components/Platzi";
import ReactAbout from "../components/React";
import ReactHookForm from "../components/ReactHookForm";
import ReactQuery from "../components/ReactQuery";
import { Credit } from "./../components/Credit";

const About = () => {
  return (
    <Fragment>
      <AboutHeader />
      <Platzi />
      <ReactAbout />
      <ReactQuery />
      <Aos />
      <ReactHookForm />
      <Credit />
    </Fragment>
  );
};

export default About;
