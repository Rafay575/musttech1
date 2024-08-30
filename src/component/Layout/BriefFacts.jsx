import React from "react";
import "./BriefFacts.css"; // External CSS for styling

const BriefFacts = () => {
  const facts = [
    {
      number: "17+",
      title: "years of expertise",
      description:
        "A considerable experience in the IT market allows our company to leverage a rich technological and business management expertise to complete projects of various complexity levels most efficiently and quickly.",
    },
    {
      number: "1600+",
      title: "IT professionals",
      description:
        "Innowise is constantly increasing the number of highly qualified IT specialists in-house. Besides developers, our team consists of business analysts, UI/UX designers, QA specialists, and DevOps engineers.",
    },
    {
      number: "40+",
      title: "domains",
      description:
        "Over the years, our team has accumulated extensive experience with numerous technology and business domains. We select specialists for projects based on their experience in the relevant industry.",
    },
    {
      number: "93%",
      title: "recurring customers",
      description:
        "We focus on excellence and adhere to high standards, clean code, and user-centered solutions. Our customers appreciate effective delivery, come back with new projects, and recommend our services to other partners.",
    },
    {
      number: "1100+",
      title: "delivered projects",
      description:
        "As a software development company, Innowise creates a wide range of applications for achieving various business goals.",
    },
    {
      number: "300+",
      title: "customers from 60+ countries",
      description:
        "We are supporters of a customer-oriented approach and position our relationships with clients as professionals for professionals.",
    },
  ];

  return (
    <div className="brief-facts">
      <h2 className="brief-facts-title">Brief facts</h2>
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div className="fact-card" key={index}>
            <h3 className="fact-number">{fact.number}</h3>
            <h4 className="fact-title">{fact.title}</h4>
            <hr className="margin"/>
            <p className="fact-description">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BriefFacts;
