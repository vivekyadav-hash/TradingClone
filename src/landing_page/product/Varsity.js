import React from "react";

function Varsity() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center mt-5 mb-5">
          <div className="col p-5" style={{marginLeft: "8%"}}>
            <img src="/media/images/varsity.png" alt="Kite app"></img>
          </div>
          <div
            className="col p-3 "
            style={{ color: "rgb(66, 66, 66)", marginLeft: "12%" }}
          >
            <h4>Varsity Mobile</h4>
            <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "17px" }}>
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>
           
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
        <p className="fs-5 text-center " style={{marginTop: "10px" , fontSize:"1.5rem" , fontWeight:"400" , marginBottom:"10%"}}>Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
      </div>
    </>
  );
}

export default Varsity;
