// import React from "react";

// const Registration = () => {
//   return (
//     <section className="registration">
//       <h2 className="section-title">Register for Maven Identity</h2>
//       <p className="section-subtitle">
//         Create your decentralized identity credential in minutes with our
//         privacy-preserving verification process
//       </p>

//       <div className="registration-form">
//         <div className="registration-info">
//           <div className="info-icon">
//             <svg
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
//               <path
//                 d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
//                 stroke="#fff"
//               ></path>
//               <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff"></line>
//             </svg>
//           </div>
//           <div className="info-content">
//             <h3>How It Works</h3>
//             <ul>
//               <li>Scan your ID document</li>
//               <li>Complete facial recognition</li>
//               <li>Create zero-knowledge proof</li>
//               <li>Receive your blockchain credential</li>
//             </ul>
//             <p className="info-privacy">
//               Your personal data never leaves your device. Only encrypted proofs
//               are stored on the blockchain.
//             </p>
//           </div>
//         </div>

//         <div className="form-container">
//           <form className="signup-form">
//             <div className="form-field">
//               <label htmlFor="email">Email Address</label>
//               <input type="email" id="email" placeholder="Enter your email" />
//             </div>

//             <div className="form-field">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Choose a username"
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Create a secure password"
//               />
//             </div>

//             <div className="form-checkbox">
//               <input type="checkbox" id="terms" />
//               <label htmlFor="terms">
//                 I agree to the Terms of Service and Privacy Policy
//               </label>
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Get Started
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;

// import React, { useState } from "react";
// import DecentralizedIdentityVerification from "./DecentralizedIdentityVerification";

// const Registration = () => {
//   const [showVerification, setShowVerification] = useState(false);

//   const handleStartRegistration = () => {
//     setShowVerification(true);
//   };

//   return (
//     <section className="registration">
//       <h2 className="section-title">Register for Maven Identity</h2>
//       <p className="section-subtitle">
//         Create your decentralized identity credential in minutes with our
//         privacy-preserving verification process
//       </p>

//       {!showVerification ? (
//         <div className="registration-form">
//           <div className="registration-info">
//             <div className="info-icon">
//               <svg
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
//                 <path
//                   d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
//                   stroke="#fff"
//                 ></path>
//                 <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff"></line>
//               </svg>
//             </div>
//             <div className="info-content">
//               <h3>How It Works</h3>
//               <ul>
//                 <li>Scan your ID document</li>
//                 <li>Complete facial recognition</li>
//                 <li>Create zero-knowledge proof</li>
//                 <li>Receive your blockchain credential</li>
//               </ul>
//               <p className="info-privacy">
//                 Your personal data never leaves your device. Only encrypted
//                 proofs are stored on the blockchain.
//               </p>
//             </div>
//           </div>

//           <div className="form-container">
//             <div className="signup-form">
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleStartRegistration}
//               >
//                 Begin Verification
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="verification-container">
//           <DecentralizedIdentityVerification />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import { Camera, ShieldCheck, Lock, Check, ArrowRight } from "lucide-react";
import "./Registration.css";
import DecentralizedIdentityVerification from "./DecentralizedIdentityVerification";

const Registration = () => {
  const [showVerification, setShowVerification] = useState(false);

  const handleStartRegistration = () => {
    setShowVerification(true);
  };

  return (
    <section className="registration-section">
      <div className="registration-container">
        <h2 className="registration-title">Register for Maven Identity</h2>
        <p className="registration-subtitle">
          Create your decentralized identity credential in minutes with our
          privacy-preserving verification process
        </p>

        {!showVerification ? (
          <div className="registration-card">
            <div className="registration-grid">
              {/* How it works section */}
              <div className="how-it-works">
                <div className="section-header">
                  <div className="icon-circle">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
                      <path
                        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                        stroke="#fff"
                      ></path>
                      <line
                        x1="12"
                        y1="17"
                        x2="12.01"
                        y2="17"
                        stroke="#fff"
                      ></line>
                    </svg>
                  </div>
                  <h3 className="section-title">How It Works</h3>
                </div>

                <ul className="step-list">
                  <li className="step-item">
                    <div className="step-number">1</div>
                    <span>Scan your ID document</span>
                  </li>
                  <li className="step-item">
                    <div className="step-number">2</div>
                    <span>Complete facial recognition</span>
                  </li>
                  <li className="step-item">
                    <div className="step-number">3</div>
                    <span>Create zero-knowledge proof</span>
                  </li>
                  <li className="step-item">
                    <div className="step-number">4</div>
                    <span>Receive your blockchain credential</span>
                  </li>
                </ul>

                <div className="privacy-box">
                  <div className="privacy-header">
                    <Lock size={16} className="privacy-icon" />
                    <span className="privacy-title">Privacy Guaranteed</span>
                  </div>
                  <p className="privacy-text">
                    Your personal data never leaves your device. Only encrypted
                    proofs are stored on the blockchain.
                  </p>
                </div>
              </div>

              {/* Start verification section */}
              <div className="verification-start">
                <div className="shield-icon">
                  <ShieldCheck size={48} />
                </div>
                <h3 className="verification-title">
                  Ready to create your digital identity?
                </h3>
                <p className="verification-text">
                  Get verified in under 5 minutes and access the full power of
                  decentralized applications
                </p>
                <button
                  type="button"
                  className="verification-button"
                  onClick={handleStartRegistration}
                >
                  Begin Verification
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="verification-container">
            <DecentralizedIdentityVerification />
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;
