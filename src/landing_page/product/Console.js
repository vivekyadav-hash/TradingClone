import React from "react";

function Console() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-center  mt-5 mb-5">
          <div
            className="col mt-5 p-5 "
            style={{ color: "rgb(66, 66, 66)" }}
          >
            <h3>Console</h3>
            <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "17px" }}>
              The central dashboard for your Zerodha  <br/>account. Gain insights into
              your trades and investments with in-depth reports and
              visualisations.
            </p>
            <div>
              <a
                href="#"
                
                style={{ textDecoration: "none", fontSize: "18px" }}
              >
                Learn more
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col p-3">
            <img src="/media/images/Console.png" alt="Console"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Console;
