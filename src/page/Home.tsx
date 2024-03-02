import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
import Ready from "../components/Ready";
import ReccentlyAdded from "../components/ReccentlyAdded";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Intro />
      <Categories />
      <ReccentlyAdded />
      <Intro2 />
      <Ready />
    </main>
  );
};

export default Home;
