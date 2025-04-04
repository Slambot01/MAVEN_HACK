import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  return (
    <>
      <BackgroundAnimation />
      <div className="container">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
