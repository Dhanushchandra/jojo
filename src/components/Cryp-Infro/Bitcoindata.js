import React from "react";
import "./Cryp-Infro css/data.css";

function Bitcoindata() {
  let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
  //   let stockPriceElement = document.getElementById("stock-price");
  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    let lastPrice = parseFloat(price).toFixed(2);
    document.getElementById("stock-price").innerHTML = lastPrice;
    document.getElementById("stock-price").style.color =
      !lastPrice || lastPrice === price
        ? "black"
        : price > lastPrice
        ? "green"
        : "red";

    lastPrice = price;
  };
  {
    setInterval(() => {
      let MarketCap = 68000.98;
      if (MarketCap <= 68000.98) {
        let newCap = Math.floor(MarketCap - Math.random() * 66);
        document.getElementById("MarketCap").innerText = newCap;
      }
    }, 1000);
  }

  return (
    <div class="data-box">
      <ul>
        <li id="stock-price"></li>
        <li>1Y highest: $74511</li>
        <li>1Y lowest: $15320</li>
        <li>24 high: $74511</li>
        <li>24 low: $73521</li>
        <li id="MarketCap"></li>
      </ul>
    </div>
  );
}

export default Bitcoindata;
