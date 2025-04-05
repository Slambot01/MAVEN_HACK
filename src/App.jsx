import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Registration from "./components/Registration";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./components/Documentation.css";

function App() {
  return (
    <Router>
      <BackgroundAnimation />
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Registration />
                <WhyChooseUs />
              </>
            }
          />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
