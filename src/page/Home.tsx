import { Fragment } from "react/jsx-runtime";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Ready from "../components/Ready";
import ReccentlyAdded from "../components/ReccentlyAdded";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Intro />
      <Categories isFilter={false} />
      <ReccentlyAdded />
      <Intro2 />
      <Ready />
    </Fragment>
  );
};

export default Home;
