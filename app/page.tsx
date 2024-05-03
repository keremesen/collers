import React from "react";
import Hero from "./components/hero";
import BestOfTheBest from "./components/bestOfTheBestSection";
import JoinUs from "./components/joinUs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <BestOfTheBest />
      <JoinUs />
    </div>
  );
};

export default Home;
