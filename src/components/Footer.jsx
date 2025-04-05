import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon">
              <svg
                width="20"
                height="20"
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
            Maven
          </div>
          <p className="footer-description">
            Decentralized identity verification powered by AI & blockchain
            technology. Privacy-first, secure, and user-controlled.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  stroke="#fff"
                ></path>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  stroke="#fff"
                ></path>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  stroke="#fff"
                ></path>
                <rect x="2" y="9" width="4" height="12" stroke="#fff"></rect>
                <circle cx="4" cy="4" r="2" stroke="#fff"></circle>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  stroke="#fff"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Developer Hub</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          &copy; {currentYear} Maven Identity. All rights reserved.
        </div>
        <div className="terms-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
