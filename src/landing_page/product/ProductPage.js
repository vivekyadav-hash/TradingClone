import React from "react";
import ZerodhaProduct from "./ZerodhaProduct";
import Kite from "./Kite";
import Console from "./Console";
import Coin from "./Coin";
import ConnectKiteApi from "./ConnectKiteApi";
import Varsity from "./Varsity";
import Universe from "./Universe";

function ProductPage(){
    return(
        <>
       <ZerodhaProduct/>
       <Kite/>
       <Console/>
       <Coin/>
       <ConnectKiteApi/>
       <Varsity/>
       <Universe/>
        </>
    )
}

export default ProductPage;