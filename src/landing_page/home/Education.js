import React from 'react';

function Education() {
    return (  
       <div className='row p-5 mt-5'>
        <div className='col-4 p-3 ml-4'>
            <img src='/media/images/varsity.png' alt='varsityImage'></img>
        </div>
        <div className='col-2'></div>
        <div className='col-6 p-3' >
<h1 className='ml-4 mb-4 fs-2'>Free and open market education</h1>
<p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world<br></br> covering everything from the basics to advanced trading.</p>
<a href='#' style={{textDecoration:"none"}}>Varsity &nbsp; <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
<p className='mb-3 mt-4 text-muted'>TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.</p>
<a href='#' style={{textDecoration:"none"}}>TradingQ&A &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
       </div>
    );
}

export default Education;