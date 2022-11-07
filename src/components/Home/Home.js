import React from "react";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Travel from "../Travel/Travel";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <Travel></Travel>
      <Testimonial></Testimonial>
      <hr />
    </div>
  );
};

export default Home;
