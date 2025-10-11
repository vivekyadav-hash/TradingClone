import React from "react";

function Charges() {
  return (
    <>
      <div className="container" >
        <div className="text-center" style={{ padding: "100px 20px" }}>
          <h2 style={{ fontSize: "28px" }}>Charges</h2>
          <p
            style={{
              color: "#9b9b9b",
              margin: "10px 0px 15px",
              fontSize: "20px",
            }}
          >
            List of all charges and taxes
          </p>
        </div>
        <div className="row align-text-center mt-5">
          <div className="col text-center">
            <img src="/media/images/pricingEquity.svg" alt="pricing 0"  style={{width:'80%'}}></img>
            <h3>Free equity delivery</h3>
            <p className="mt-4 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col text-center">
            <img src="/media/images/other-trades.svg" alt="other trades" style={{width:'80%'}}></img>
            <h3>Intraday and F&O trades</h3>
            <p className="mt-4 text-muted" style={{fontSize:"1rem" , lineHeight:"1.8" , marginBottom:"15px"}}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col text-center">
            <img src="/media/images/pricingMF.svg" alt="pricing 0"  style={{width:'80%'}}></img>
            <h3>Free direct MF</h3>
            <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charges;
