// components/Card.js

import React from "react";
import "./Card.css";

const PriceCard = ({ data, onClick, selected }) => {
  return (
    <div
      className={`price-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="price-card-header">
        <div className="price-card-title">{data.title}</div>
        <div className="price-card-price">${data.price}/month</div>
      </div>
      <div className="price-card-features">
        {Object.entries(data.features).map(([feature, value]) => (
          <div key={feature} className="feature">
            <div className="feature-check">{value ? "✓" : "x"}</div>
            <div className="feature-name">{feature}</div>
          </div>
        ))}
      </div>
      <div className="price-card-footer">
        <div className="price-card-button">{data.buttonText}</div>
      </div>
    </div>
  );
};

const PriceCards = ({ cardData }) => {
  const [selected, setSelected] = React.useState(null);

  const handleCardClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="price-cards">
      {cardData.map((data, index) => (
        <PriceCard
          key={index}
          data={data}
          onClick={() => handleCardClick(index)}
          selected={selected === index}
        />
      ))}
    </div>
  );
};

export default PriceCards;
