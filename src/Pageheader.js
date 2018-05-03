import React, { Component } from 'react';
import './Pageheader.css';


class Pageheader extends Component {

    
  render() {
    return (
       <div className="header">
            <div className="date-container">
                <div className="circle-num">
                    <div className="circle">
                        <p className="date-num"></p>
                    </div>
                </div>
                <div className="date">
                    <p className="date-info"></p>
                </div>
            </div>
            <div className="title">Crypto<span className="title-suffix">phan</span></div>
            <div className="nav">
                <ul>
                    <li className="nav-price">Price</li>
                    <li className="nav-ath">all time high</li>
                    <li className="nav-weekday">Weekday</li>
                    <li className="nav-hourly">hourly</li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Pageheader;
