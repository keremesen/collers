import React from "react";
import Hero from "./components/hero";
import BestOfTheBest from "./components/bestOfTheBest";
import JoinUs from "./components/joinUs";
import LoveUs from "./components/loveUs";
import Collection from "./components/collection";
import ShoeCollected from "./components/shoeCollected";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <BestOfTheBest />
      <JoinUs />
      <LoveUs />
      <Collection />
      <ShoeCollected />
    </div>
  );
};

export default Home;
