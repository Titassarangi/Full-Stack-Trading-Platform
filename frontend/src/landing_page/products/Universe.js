import React from 'react';
import './Universe.css'; 

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='text-center mb-4'>
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>
            <div className='row text-center'>
                <div className='col-md-4 p-3'>
                    <img src="media/zerodhafundhouse.png" className="universe-img mb-2" alt="Zerodha Fund House" />
                    <p className='text-muted'>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-md-4 p-3'>
                    <img src="media/sensibull-logo.svg" className="universe-img mb-2" alt="Sensibull" />
                    <p className='text-muted'>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-md-4 p-3'>
                    <img src="media/tijori.svg" className="universe-img mb-2" alt="Tijori" />
                    <p className='text-muted'>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-md-4 p-3'>
                    <img src="media/streak-logo.png" className="universe-img mb-2" alt="Streak" />
                    <p className='text-muted'>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>
                <div className='col-md-4 p-3'>
                    <img src="media/smallcase-logo.png" className="universe-img mb-2" alt="Smallcase" />
                    <p className='text-muted'>
                        Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
                    </p>
                </div>
                <div className='col-md-4 p-3'>
                    <img src="media/ditto-logo.png" className="universe-img mb-2" alt="Ditto" />
                    <p className='text-muted'>
                        Personalised advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>
                <button className = 'p-2 btn btn-primary fs-5' style ={{width:"20%", margin : "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;
