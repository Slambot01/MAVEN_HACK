import React from "react";

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
          <a href="#" className="btn btn-primary">
            Try Demo
          </a>
          <a href="#" className="btn btn-secondary">
            Documentation
          </a>
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
