import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onPortfolioClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => {
         return <Stock key={stock.id} stock={stock} onPortfolioClick={onPortfolioClick}/>
      })
      }
    </div>
  );
}

export default PortfolioContainer;
