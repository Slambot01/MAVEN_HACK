import React from "react";

const WhyChooseUs = () => {
  const reasonsData = [
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#fff"></path>
        </svg>
      ),
      title: "99.9% Uptime",
      description:
        "Our decentralized architecture ensures your identity verification is always available when you need it.",
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
          <path
            d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            stroke="#fff"
          ></path>
        </svg>
      ),
      title: "Cost Effective",
      description:
        "Save up to 70% compared to traditional KYC processes while improving security and user experience.",
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
          <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
          <path d="M12 6v6l4 2" stroke="#fff"></path>
        </svg>
      ),
      title: "Rapid Verification",
      description:
        "Complete the entire identity verification process in seconds, not days, with instant blockchain confirmation.",
    },
    {
      id: 4,
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
            x="2"
            y="7"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="#fff"
          ></rect>
          <path
            d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            stroke="#fff"
          ></path>
        </svg>
      ),
      title: "Multi-Platform",
      description:
        "Access your identity proofs across any device or platform with our seamless cross-platform integration.",
    },
    {
      id: 5,
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
            d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"
            stroke="#fff"
          ></path>
          <path d="M3 15h12" stroke="#fff"></path>
          <path d="M18 2l4 4-4 4" stroke="#fff"></path>
        </svg>
      ),
      title: "Self-Sovereign",
      description:
        "You own your identity data. Revoke access at any time with our user-controlled permission system.",
    },
    {
      id: 6,
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
          <path d="M20 7h-9" stroke="#fff"></path>
          <path d="M14 17H5" stroke="#fff"></path>
          <circle cx="17" cy="17" r="3" stroke="#fff"></circle>
          <circle cx="7" cy="7" r="3" stroke="#fff"></circle>
        </svg>
      ),
      title: "Global Compliance",
      description:
        "Meet regulatory requirements in over 190 countries with our adaptable compliance framework.",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Our Platform</h2>
      <p className="section-subtitle">
        Maven offers unique advantages that make it the preferred choice for
        modern identity verification
      </p>
      <div className="reasons-grid">
        {reasonsData.map((reason) => (
          <div className="reason-card" key={reason.id}>
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
