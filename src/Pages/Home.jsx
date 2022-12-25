import React from "react";
import Footer from "../Plates/Footer";
import FooterClient from "../Plates/FooterClient";
import Form from "../Plates/Form";
import Header from "../Plates/Header";
import Slider from "../Plates/Slider";
import HomeIntro from "../Plates/HomeIntro";
import Services from "../Plates/Services";
import Navigation from "../Plates/Navigation";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Slider />
      <div className="w-full flex justify-evenly p-10">
        <Form />
        <HomeIntro />
      </div>
      <Services />
      <FooterClient />
      <Footer />
    </div>
  );
};

export default Home;
