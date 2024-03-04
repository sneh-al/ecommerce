import framerMotionLogo from "../assets/framer.svg";
import nextuiLogo from "../assets/nextui.png";
import { Link } from "@nextui-org/react";

const Aos = () => {
  return (
    <section className=" aos-bg">
    <div className="max-w-6xl p-5 py-44  min-h-screen m-auto grid text-background grid-cols-1 aos-bg md:grid-cols-2 flex-col-reverse md:flex-row gap-6 ">
      <article className="">
        <div className="flex max-w-sm flex-wrap items-center justify-center">
          <img data-aos="flip-down" className="" src={framerMotionLogo} alt="react query logo" />
          <img data-aos="flip-up" src={nextuiLogo} className="w-24" alt="axios logo" />
          <span data-aos="flip-down" className="text-3xl font-bold text-black">AOS</span>
          <span data-aos="flip-up" className="text-3xl font-bold text-black">React Slick</span>
        </div>
        <h1 className="text text-2xl md:text-5xl" data-aos="zoom-in-down">
          @nextui-org/react, AOS, Framer Motion, and React Slick: The Dynamic
          Quartet of Web Wizardry!
        </h1>
      </article>
      <article className="flex gap-6 flex-col  m-auto ">
        <p data-aos="fade-up-left">
          <Link href="https://nextui.org/" underline="always" isExternal>
            nextui-org
          </Link>{" "}
          contributes sleek React components, transforming interfaces into
          stylish masterpieces.{" "}
          <Link
            href="https://michalsnik.github.io/aos/"
            underline="always"
            isExternal
          >
            Aos
          </Link>{" "}
          weaves its magic with scroll-triggered animations, adding enchantment
          to the user journey.
          <Link href="https://www.framer.com/" underline="always" isExternal>
            Framer Motion
          </Link> steps in as the choreographer, orchestrating seamless interactions and
          captivating animations. Enter <Link
            href="https://react-slick.neostack.com/"
            underline="always"
            isExternal
          >
            React Slick
          </Link>
          , the slider sensation, effortlessly creating dynamic and responsive
          image carousels. Together, this quartet of web wizardry crafts an
          online experience that seamlessly blends style, motion, and
          functionality, leaving users spellbound.
        </p>
      </article>
      </div>
    </section>
  );
};

export default Aos;
