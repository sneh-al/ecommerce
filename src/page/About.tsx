import AboutHeader from "../components/AboutHeader";
import Aos from "../components/Aos";
import Platzi from "../components/Platzi";
import ReactAbout from "../components/React";
import ReactHookForm from "../components/ReactHookForm";
import ReactQuery from "../components/ReactQuery";
import { Link } from '@nextui-org/react';

const About = () => {
  return (
    <section>
      <AboutHeader />
      <Platzi />
      <ReactAbout />
      <ReactQuery />
      <Aos />
      <ReactHookForm />
      <section className="py-24 bg-accent2 text-enter">
        <p className="max-w-prose m-auto text-pretty text-2xl text-center">
        Free SVG Backgrounds and Patterns by <Link size="lg" isExternal href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
           SVGBackgrounds.com
          </Link>
        </p>
      </section>
    </section>
  );
};

export default About;
