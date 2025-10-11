import React from "react";

function Kite() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center mt-5 mb-5">
          <div className="col p-5">
            <img src="/media/images/kite.png" alt="Kite app"></img>
          </div>
          <div className="col p-5 mt-5 "  style={{color:"rgb(66, 66, 66)" , marginLeft:"7%"}}>
            <h3>Kite</h3>
            <p className="mt-4" style={{lineHeight:"1.8" , fontSize:"17px" }} >
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
            <div>
            <a href='#' style={{textDecoration:"none" , fontSize:"18px"}}>Try demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='#' className='mx-5' style={{textDecoration:"none" , fontSize:"18px"}}>Learn more<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div style={{marginTop:"25px"}}>
                <img src="/media/images/googlePlayBadge.svg" alt="google play store"></img>
                <img src="/media/images/appStoreBadge.svg" alt="app store" style={{marginLeft: "20px"}}></img>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Kite;
