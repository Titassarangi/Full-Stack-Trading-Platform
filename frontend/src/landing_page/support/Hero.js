import React from 'react';
function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>        
            </div>
            <div className='row p-5 m-3'>
            <div className='col-6 p-3'>
                <h1 className='fs-3'>Search for an answer or browse help topics to craete a ticket</h1>
                <input placeholder='Eg:how do i activate F&0, why is my order getting rejected ...'/><br/>
                <a href = "">Track account opening  </a>
                <a href = "">Track segment activation  </a>
                <a href = "">Intraday margins  </a>
                <a href = "">Kite user manual  </a>
            </div>
            <div className='col-6 p-3'>
            <h1>Featured</h1>
            <ol>
                <li><a href = "">MCX Option contracts expiry - April 2025</a></li>
                <li><a href = "">MCX Base metals contract expiry - April 2025</a></li>
            </ol>
            </div>      
            </div>
        </section>
    );
}

export default Hero;