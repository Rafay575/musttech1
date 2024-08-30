import React from "react";
import { CheckCircleIcon, ArrowsRightLeftIcon, ArrowPathIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import "./WhyUs.css"; // External CSS for styling

const WhyUs = () => {
  const features = [
    {
      icon: <CheckCircleIcon className="feature-icon" />,
      title: "Result-oriented",
      description:
        "For our company, the only indicator of the project’s success is the achievement of the goals and objectives set by the client. Due to high-quality project management and a team of IT talents, we carry out our work as quickly and efficiently as possible.",
    },
    {
      icon: <ArrowsRightLeftIcon className="feature-icon" />,
      title: "Flexible",
      description:
        "Our team already numbers 800+ highly qualified IT professionals. It allows us to quickly adapt to the needs of our clients. We provide rapid team ramp-up and easily scale it up and down depending on the changing conditions of the project.",
    },
    {
      icon: <ArrowPathIcon className="feature-icon" />,
      title: "Transparent",
      description:
        "Our cooperation with clients is always open and honest. We ensure regular communication, an established daily reporting system, and tracking tools according to the client’s preferences. Thus, our clients can control all possible aspects of projects.",
    },
    {
      icon: <CheckBadgeIcon className="feature-icon" />,
      title: "Experienced",
      description:
        "Innowise has established well-managed processes to deliver software development services. They are based on the best examples of IT outsourcing and can be easily aligned to the specifics of customers and their projects.",
    },
  ];

  return (
    <div className="why-us-section">
      <h2 className="why-us-title">Why us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
