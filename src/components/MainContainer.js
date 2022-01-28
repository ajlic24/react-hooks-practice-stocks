import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [onAlpha, setOnAlphabetical] = useState(false)
  const [onPrice, setOnPriceChange] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  function onAlphabetical(e) {
    setOnAlphabetical(e.target.checked)
    setOnPriceChange(false)
  }

  function onPriceChange(e) {
    setOnPriceChange(e.target.checked)
    setOnAlphabetical(false)
}

  function onStockClick(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock])
    }
  }

  function handleFilterChange(e) {
    setFilter(e.target.value)
  }

  function onPortfolioClick(item) {
    setPortfolio([...portfolio].filter(stock => stock.id !== item.id))
  }

  return (
    <div>
      <SearchBar onPriceChange={onPriceChange} onAlphabetical={onAlphabetical} alphabetical={onAlpha} price={onPrice} handleFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={onStockClick} alphabetical={onAlpha} price={onPrice} filtered={filter} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onPortfolioClick={onPortfolioClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
