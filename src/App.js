// App.js

import React from "react";
import PriceCards from "./components/card";
import "./App.css";

function App() {
  const cardData = [
    {
      title: "FREE",
      price: "0",
      features: {
        "Single User": true,
        "50GB Storage": true,
        "Unlimited Public Projects": true,
        "Community Access": false,
        "Unlimited Private Projects": false,
        "Dedicated Phone Support": false,
        "Free Subdomain": true,
        "Monthly Status Reports": true,
      },
      buttonText: "SIGN UP",
    },
    {
      title: "PLUS",
      price: "9",
      features: {
        "Single User": true,
        "50GB Storage": true,
        "Unlimited Public Projects": true,
        "Community Access": true,
        "Unlimited Private Projects": true,
        "Dedicated Phone Support": false,
        "Free Subdomain": true,
        "Monthly Status Reports": true,
      },
      buttonText: "SIGN UP",
    },
    {
      title: "PRO",
      price: "49",
      features: {
        "Single User": true,
        "50GB Storage": true,
        "Unlimited Public Projects": true,
        "Community Access": true,
        "Unlimited Private Projects": true,
        "Dedicated Phone Support": true,
        "Free Subdomain": false,
        "Monthly Status Reports": false,
      },
      buttonText: "CONTACT US",
    },
  ];

  return (
    <div className="App">
      <PriceCards cardData={cardData} />
    </div>
  );
}

export default App;
