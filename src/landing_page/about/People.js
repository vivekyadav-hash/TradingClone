import React from "react";

function People() {
  return (
    <div className="container text-center mt-5">
      <h3 className="mb-5 text-muted">People</h3>
      <div className="row mt-5 ">
        <div className="col ms-5 ">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "55%", height: "75%", objectFit: "cover" }}
          />
          <h4>Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col text-start mt-3 p-2 fs-6 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br /> hurdles he faced during his decade long stint as a trader.
            Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage /
            </a>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA /
            </a>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src=""></img>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default People;
