import React from "react";

function Universe() {
  return (
    <>
      <div className="container text-center ">
        <h3 className="mb-4 ">The Zerodha Universe</h3>
        <p className="mb-5" style={{ fontSize: "16px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row p-5">
          <div className="col-4 align-text-center ">
            <img
              src="/media/images/zerodhafundhouse.png"
              alt="zerodha fund house"
              style={{ width: "60%" }}
            ></img>
            <br />
            <p
              className="mt-3  mb-5"
              style={{ fontSize: "12px", color: "#9b9b9b" }}
            >
              {" "}
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
            <img
              src="/media/images/streak-logo.png"
              alt="zerodha fund house"
              style={{ width: "60%" }}
            ></img>
            <br />
            <p className="mt-3 " style={{ fontSize: "12px", color: "#9b9b9b" }}>
              Systematic trading platform <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div className="col-4 align-text-center">
            <img
              src="/media/images/sensibullLogo.svg"
              alt="zerodha fund house"
              style={{ width: "70%" }}
            ></img>
            <br />
            <p className="mt-4 mb-5" style={{ fontSize: "12px", color: "#9b9b9b" }}>
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
            <img
              src="/media/images/smallcaseLogo.png"
              alt="small case logo "
              style={{ width: "70%" }}
            ></img>
            <br />
            <p className="mt-4 " style={{ fontSize: "12px", color: "#9b9b9b" }}>
              Thematic investing platform <br/> that helps you invest in diversified
             <br/> baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 align-text-center">
             <img
              src="/media/images/tijori.svg"
              alt="zerodha fund house"
              style={{ width: "45%" }}
            ></img>
            <br />
            <p
              className="mt-3  mb-5"
              style={{ fontSize: "12px", color: "#9b9b9b" }}
            >
              {" "}
             Investment research platform
              <br />
             that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
             <img
              src="/media/images/dittoLogo.png"
              alt="small case logo "
              style={{ width: "45%" }}
            ></img>
            <br />
            <p className="mt-4 " style={{ fontSize: "12px", color: "#9b9b9b" }}>
             Personalized advice on life
<br/>and health insurance. No spam
<br/>and no mis-selling.
            </p>
          </div>
        </div>
         <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%" , margin:"0 auto" }}>Signup for free</button>
      </div>
    </>
  );
}

export default Universe;
