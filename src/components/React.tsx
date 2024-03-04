import reactLogo from "../assets/react.svg"
import reactRouterLogo from "../assets/react-router.svg"
import { Link } from '@nextui-org/react';

const ReactAbout = () => {
  return (
    <section className=" text-background grid place-content-center  react-bg m-auto text-pretty    p-5 py-24">
   <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center min-h-screen">
   <article className="">
    <div className="flex" ><img data-aos="fade-up" src={reactLogo} alt="react logo"/>
        <img src={reactRouterLogo} alt="react logo" data-aos="fade-down"/></div>
  <h1 className='text text-2xl md:text-5xl' data-aos="zoom-in-down">React & React Router: The Core of Web Adventures!</h1>

   
    </article>
    <article className="flex gap-6 flex-col">
<p data-aos="fade-down">

<Link href="https://react.dev/" underline="always" isExternal >
React
            </Link>{" "}
         steals the show with its JavaScript wizardry, conjuring flexible
        and reusable UI components that dance to the rhythm of data changes.
        This library's declarative charm makes UI development feel like a
        breeze, turning coders into UI maestros.
      </p>
      <p data-aos="fade-up">
      
        But wait, here comes {" "}
        <Link href="https://reactrouter.com/en/main" underline="always" isExternal >
        React Router
            </Link>{" "}
        —the trusty sidekick! Armed with the
        power to navigate through single-page application landscapes, React
        Router ensures a seamless user experience. Together, React and React
        Router form the dynamic duo of web adventures, where UI components and
        navigation unite for a legendary coding tale!
      </p>
 
    </article>
   </div>
    </section>
  );
};

export default ReactAbout;
