import React from "react";

const Documentation = () => {
  return (
    <section className="documentation">
      <div className="container">
        <h1 className="section-title">Maven Documentation</h1>
        <p className="section-subtitle">
          Everything you need to know about our decentralized identity
          verification platform
        </p>

        <div className="doc-container">
          <div className="doc-sidebar">
            <div className="doc-nav">
              <h3>Contents</h3>
              <ul>
                <li>
                  <a href="#overview" className="active">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#why-use">Why Use Maven</a>
                </li>
                <li>
                  <a href="#security">Security Architecture</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Guarantees</a>
                </li>
                <li>
                  <a href="#getting-started">Getting Started</a>
                </li>
                {/* <li>
                  <a href="#api-integration">API Integration</a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="doc-content">
            <section id="overview">
              <h2>Platform Overview</h2>
              <p>
                Maven is a decentralized identity verification platform that
                combines the power of artificial intelligence with blockchain
                technology to provide a secure, private, and user-controlled
                identity verification solution.
              </p>
              <p>
                Unlike traditional KYC processes that store sensitive data in
                centralized databases, Maven uses zero-knowledge proofs to
                verify identity without exposing personal information. Your data
                never leaves your device, and only cryptographic proofs are
                stored on the blockchain.
              </p>
            </section>

            <section id="why-use">
              <h2>Why Use Maven Platform</h2>

              <div className="doc-feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="#fff"
                    ></path>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>True Data Ownership</h3>
                  <p>
                    With Maven, you own your identity data at all times. Our
                    self-sovereign identity approach means you control who can
                    access your verified identity and for how long. Revoke
                    access at any time through our intuitive dashboard.
                  </p>
                </div>
              </div>

              <div className="doc-feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="#fff"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="#fff"></line>
                    <line x1="9" y1="21" x2="9" y2="9" stroke="#fff"></line>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Immutable Verification Record</h3>
                  <p>
                    All identity verifications are recorded on the blockchain as
                    cryptographic proofs, creating an immutable record that
                    can't be altered or tampered with. This provides the highest
                    level of trust without compromising privacy.
                  </p>
                </div>
              </div>

              <div className="doc-feature-card">
                <div className="feature-icon">
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
                <div className="feature-content">
                  <h3>Regulatory Compliance</h3>
                  <p>
                    Maven's verification process meets KYC/AML requirements
                    across jurisdictions while maintaining user privacy. Our
                    platform complies with GDPR, CCPA, and other regional
                    privacy laws by design.
                  </p>
                </div>
              </div>

              <div className="doc-feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#fff"></path>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Reduced Verification Time</h3>
                  <p>
                    Traditional KYC processes can take days. With Maven,
                    verification happens in seconds. Our AI-powered system can
                    instantly verify documents and biometrics while creating
                    zero-knowledge proofs on the spot.
                  </p>
                </div>
              </div>
            </section>

            <section id="security">
              <h2>Security Architecture</h2>
              <p>
                Maven's multi-layered security architecture ensures your
                identity data remains protected at all times. Here's why our
                platform is more secure than traditional solutions:
              </p>

              <div className="security-features">
                <div className="security-feature">
                  <h4>Client-Side Processing</h4>
                  <p>
                    All sensitive data processing happens on your device. Raw
                    biometric data and document images never leave your local
                    environment, eliminating the risk of data breaches.
                  </p>
                </div>

                <div className="security-feature">
                  <h4>Zero-Knowledge Cryptography</h4>
                  <p>
                    We use advanced zero-knowledge proofs to verify identity
                    claims without revealing the underlying data. This
                    mathematical approach allows verification without exposure.
                  </p>
                </div>

                <div className="security-feature">
                  <h4>Blockchain Immutability</h4>
                  <p>
                    Identity attestations are stored on Polygon blockchain with
                    ZK-Rollups for scalability. Once recorded, these proofs
                    cannot be altered, creating a tamper-evident record.
                  </p>
                </div>

                <div className="security-feature">
                  <h4>Advanced Liveness Detection</h4>
                  <p>
                    Our AI system uses multiple methods to detect presentation
                    attacks, including depth mapping, motion analysis, and
                    texture recognition, preventing spoofing attempts.
                  </p>
                </div>

                <div className="security-feature">
                  <h4>End-to-End Encryption</h4>
                  <p>
                    All communication between components is secured with
                    end-to-end encryption, ensuring data in transit is protected
                    against interception.
                  </p>
                </div>

                <div className="security-feature">
                  <h4>Regular Security Audits</h4>
                  <p>
                    Our platform undergoes regular third-party security audits
                    and penetration testing to identify and address potential
                    vulnerabilities before they can be exploited.
                  </p>
                </div>
              </div>
            </section>

            <section id="privacy">
              <h2>Privacy Guarantees</h2>
              <p>
                Maven was built with privacy as a first principle. Our platform
                provides:
              </p>

              <ul className="privacy-list">
                <li>
                  <strong>No Data Storage:</strong> We don't store raw biometric
                  data, document images, or personal information
                </li>
                <li>
                  <strong>Selective Disclosure:</strong> Share only the specific
                  attributes needed for verification
                </li>
                <li>
                  <strong>Cryptographic Privacy:</strong> Advanced encryption
                  and zero-knowledge proofs protect your information
                </li>
                <li>
                  <strong>Decentralized Architecture:</strong> No central
                  database that could be breached or compromised
                </li>
                <li>
                  <strong>Transparency:</strong> Open-source verification
                  components allow scrutiny of privacy measures
                </li>
              </ul>

              <div className="privacy-notice">
                <h4>Our Privacy Commitment</h4>
                <p>
                  We believe identity verification shouldn't come at the cost of
                  privacy. Maven is designed to give you control over your
                  digital identity while meeting the verification needs of
                  businesses and regulators. Your data belongs to you—not us.
                </p>
              </div>
            </section>

            <section id="getting-started">
              <h2>Getting Started</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Create an Account</h4>
                    <p>Register for a Maven account using your email address</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Verify Your Identity</h4>
                    <p>
                      Complete the simple verification process using ID document
                      and facial recognition
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Create Your ZK Proof</h4>
                    <p>Generate your zero-knowledge identity proof</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Receive Your Credential</h4>
                    <p>Your blockchain-based credential is now ready to use</p>
                  </div>
                </div>
              </div>

              <div className="cta-container">
                <a href="#" className="btn btn-primary">
                  Start Verification
                </a>
              </div>
            </section>

            {/* <section id="api-integration">
              <h2>API Integration</h2>
              <p>
                Maven offers comprehensive API endpoints for integration with
                your existing systems. Our developer-friendly documentation
                provides everything you need to implement decentralized identity
                verification.
              </p>

              <div className="code-sample">
                <pre>
                  <code>
                    {`// Example API request
const verifyIdentity = async (userToken) => {
  const response = await fetch('https://api.maven.io/v1/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${API_KEY}\`
    },
    body: JSON.stringify({
      userToken: userToken,
      verificationLevel: 'standard'
    })
  });
  
  return await response.json();
}`}
                  </code>
                </pre>
              </div>

              <div className="api-links">
                <a href="#" className="btn btn-secondary">
                  API Reference
                </a>
                <a href="#" className="btn btn-secondary">
                  SDK Downloads
                </a>
                <a href="#" className="btn btn-secondary">
                  Sample Code
                </a>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
