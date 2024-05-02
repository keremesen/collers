import React from "react";
import Hero from "./components/hero";
import BestOfTheBest from "./components/bestOfTheBestSection";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <BestOfTheBest />
    </div>
  );
};

export default Home;
