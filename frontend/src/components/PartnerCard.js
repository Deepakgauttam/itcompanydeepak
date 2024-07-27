import React from "react";
import "./PartnerCard.css";

function PartnerCard({ name, description }) {
  return (
    <div className="Partner-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PartnerCard;
