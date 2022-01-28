import React, { useState } from "react";

function Stock({stock, onStockClick, onPortfolioClick}) {
  const {id, name, price} = stock

  function handleClickStock() {
    (onStockClick) ? onStockClick(stock) : onPortfolioClick(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClickStock} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
