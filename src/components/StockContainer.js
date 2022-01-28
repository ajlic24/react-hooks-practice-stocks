import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick, alphabetical, price, filtered}) {

  const filter = [...stocks].sort((a, b) => {
    if (alphabetical) {
      if (a.ticker > b.ticker) {
        return 1
      } else if (a.ticker < b.ticker) {
        return -1
      } else {
        return 0
      }
    } else if (price) {
      return a.price - b.price
    }
  }).filter(stock => filtered === '' ? true : stock.type === filtered)

  return (
    <div>
      <h2>Stocks</h2>
      {filter.map(stock => <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/>)}
    </div>
  );
}

export default StockContainer;
