import React from "react";
import Banner from "./Banner";
import About from "./About";
import ServiceCard from "../card/ServiceCard";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <h1>home page</h1>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Homepage;
