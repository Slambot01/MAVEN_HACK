import React from "react";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: (
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
      ),
      title: "Privacy First",
      description:
        "No raw images or sensitive data stored—only cryptographic proofs.",
    },
    {
      id: 2,
      icon: (
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
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#fff"></path>
          <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff"></line>
        </svg>
      ),
      title: "AI Powered",
      description:
        "Advanced facial recognition with liveness detection to prevent fraud.",
    },
    {
      id: 3,
      icon: (
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
      ),
      title: "Blockchain Secured",
      description:
        "Identity proofs stored on Polygon/ZK-Rollups for tamper-proof verification.",
    },
  ];

  return (
    <div className="features">
      {featuresData.map((feature) => (
        <div className="feature" key={feature.id}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
