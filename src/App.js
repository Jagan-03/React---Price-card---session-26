import React from "react";

// Importing components
import PriceCard from "./components/priceCard";
// Importing datas
import { priceCardDetails } from "./data/priceCardDetails";

const App = () => {
    
  return (
    <div className="main-body d-flex align-items-center justify-content-center">
      <div className="row p-0 m-0 w-100">
      {/* Creating a card for Each types */}
        {priceCardDetails.map((card, index) => {
         return <div key={index} className="col-lg-4 p-4">
            {/* Retruning the price card component with the card details */}
            <PriceCard details={card} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;
