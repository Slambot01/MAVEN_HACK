import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo-icon">
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
        Maven
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
