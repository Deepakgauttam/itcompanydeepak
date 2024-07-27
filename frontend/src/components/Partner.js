import React from 'react';
import "./Partner.css";
import PartnerCard from "./PartnerCard";
import Footer from "./Footer";

function Partner() {
  return (
    <div>
      <div className="Partner">
        <h1>Our Partner</h1>
        <div className="Partner-cards">
          <PartnerCard
            name="Marudhara Ventures India Pvt Ltd"
            description="Our valued collaboration partner."
          />
          <PartnerCard
            name="SSMT Solutions"
            description="Our esteemed collaborator."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partner;
