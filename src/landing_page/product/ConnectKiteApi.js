import React from "react";

function ConnectKiteApi() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-center   mb-5">
          <div className="col  " style={{ color: "rgb(66, 66, 66)" }}>
            <h3>Kite Connect Api</h3>
            <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "16px" }}>
              Build powerful trading platforms and <br/>experiences with our super
              simple <br/>HTTP/JSON APIs. If you are a startup, build <br/>your investment
              app and showcase it to our <br/>clientbase.
            </p>
            <div>
              <a href="#" style={{ textDecoration: "none", fontSize: "18px" }}>
               Kite Connect &nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col p-5 me-2">
            <img
              src="/media/images/kiteconnect.svg"
              alt="connect kite api"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectKiteApi;
