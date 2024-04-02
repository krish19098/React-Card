import React from "react";
import "./Card.css";

const PriceCard = (props) => {
  return (
    <div
      className={`price-card ${props.selected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      <div className="price-card-header">
        <div className="price-card-title">{props.title}</div>
        <div className="price-card-price">${props.price}/month</div>
      </div>
      <div className="price-card-features">
        <div className="feature">
          <div className="feature-check">✓</div>
          <div className="feature-name">Single User</div>
        </div>
        <div className="feature">
          <div className="feature-check">✓</div>
          <div className="feature-name">50GB Storage</div>
        </div>
        <div className="feature">
          <div className="feature-check">✓</div>
          <div className="feature-name">Unlimited Public Projects</div>
        </div>
        <div className="feature">
          <div className="feature-check">
            {props.communityAccess ? "✓" : "x"}
          </div>
          <div className="feature-name">Community Access</div>
        </div>
        <div className="feature">
          <div className="feature-check">
            {props.privateProjects ? "✓" : "x"}
          </div>
          <div className="feature-name">Unlimited Private Projects</div>
        </div>
        <div className="feature">
          <div className="feature-check">
            {props.dedicatedSupport ? "✓" : "x"}
          </div>
          <div className="feature-name">Dedicated Phone Support</div>
        </div>
        <div className="feature">
          <div
            className={`feature-check ${props.freeSubdomain ? "x" : "hidden"}`}
          >
            x
          </div>
          <div className="feature-name">Free Subdomain</div>
        </div>
        <div className={`feature ${props.statusReports ? "hidden" : ""}`}>
          <div className="feature-check">x</div>
          <div className="feature-name">Monthly Status Reports</div>
        </div>
      </div>
      <div className="price-card-footer">
        <div className="price-card-button">{props.buttonText}</div>
      </div>
    </div>
  );
};

const PriceCards = () => {
  const [selected, setSelected] = React.useState(null);

  const handleCardClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="price-cards">
      <PriceCard
        title="FREE"
        price="0"
        onClick={() => handleCardClick(0)}
        selected={selected === 0}
        communityAccess={false}
        privateProjects={false}
        dedicatedSupport={false}
        statusReports={false}
        buttonText="SIGN UP"
      />
      <PriceCard
        title="PLUS"
        price="9"
        onClick={() => handleCardClick(1)}
        selected={selected === 1}
        communityAccess={true}
        privateProjects={true}
        dedicatedSupport={false}
        statusReports={false}
        buttonText="SIGN UP"
      />
      <PriceCard
        title="PRO"
        price="49"
        onClick={() => handleCardClick(2)}
        selected={selected === 2}
        communityAccess={true}
        privateProjects={true}
        dedicatedSupport={true}
        statusReports={true}
        buttonText="CONTACT US"
      />
    </div>
  );
};

export default PriceCards;
