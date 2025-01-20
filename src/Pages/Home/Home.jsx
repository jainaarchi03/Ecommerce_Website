import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import TopProducts from "../../components/TopProducts/TopProducts";
import Banner from "../../components/Banner/Banner";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
   <Hero/>
   
      <Products />
      <TopProducts  />
      <Banner />
      <Subscribe />
      <Testimonials />
   </>
  );
};

export default Home;
