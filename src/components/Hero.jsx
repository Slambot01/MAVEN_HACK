import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Decentralized Identity Verification Powered by AI & Blockchain</h1>
        <p className="subtitle">
          A privacy-preserving alternative to traditional KYC processes,
          combining facial recognition, zero-knowledge proofs, and decentralized
          storage.
        </p>

        <div className="cta-buttons">
          {/* <a href="#" className="btn btn-primary">
            Try Demo
          </a> */}
          <Link to="/documentation" className="btn btn-primary">
            Documentation
          </Link>
        </div>
      </div>

      {/* <div className="hero-image">
        <div className="polygon glow-effect">
          <div className="polygon-outer"></div>
          <div className="polygon-middle"></div>
          <div className="polygon-inner"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
