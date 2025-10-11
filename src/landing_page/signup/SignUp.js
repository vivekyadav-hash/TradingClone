import React from "react";

function SignUp () {
    return(
    <div className="container p-5 mt-5 mb-5">
    <div className="container text-center mt-5">
    <h3 className="fs-3">Open a free demat and trading account online</h3>
    <h4 className="text-center" style={{color:"gray",fontSize:"1.25rem", lineHeight:"1.7" , marginTop:"10px"}}>
        Start investing brokerage free and join a community of <span className="client-count">1.6+ crore</span> investors and traders
      </h4>
    </div>
    <div className=" row mt-5 pt-5">
        <div className="col">
            <img src="/media/images/signup.png" alt="Signup Image"></img>
        </div>
        <div className="col ms-5">
            <h2>Signup now</h2>
          <p className="mb-5" style={{color:"grey"}}>Or track your existing application</p>
          <form>
            <div>
                <input></input>
            </div>
          </form>
        </div>
    </div>
    </div>
    );
}

export default SignUp;