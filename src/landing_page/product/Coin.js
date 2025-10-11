import React from "react";

function Coin() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center mt-5 mb-5">
          <div className="col p-5">
            <img src="/media/images/coin.png" alt="Kite app"></img>
          </div>
          <div
            className="col p-3 "
            style={{ color: "rgb(66, 66, 66)", marginLeft:"6%"}}
          >
            <h4>Coin</h4>
            <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "17px"  }}>
              Buy direct mutual funds online, commission- <br/>free, delivered
              directly to your Demat <br/>account. Enjoy the investment experience <br/>on
              your Android and iOS devices.
            </p>
            <div>
              <a href="#" style={{ textDecoration: "none", fontSize: "18px" }}>
                Coin &nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            
            </div>
            <div style={{ marginTop: "25px" }}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="google play store"
              ></img>
              <img
                src="/media/images/appStoreBadge.svg"
                alt="app store"
                style={{ marginLeft: "20px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coin;
