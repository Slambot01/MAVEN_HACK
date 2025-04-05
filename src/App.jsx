import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Registration from "./components/Registration";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  return (
    <>
      <BackgroundAnimation />
      <div className="container">
        <Header />
        <Hero />
        <Features />
        <Registration />
        <WhyChooseUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
