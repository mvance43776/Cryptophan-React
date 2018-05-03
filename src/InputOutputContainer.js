import React, { Component } from 'react';
import './InputOutputContainer.css';


class InputOutputContainer extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleSubmit() {
    let coinNumerator = document.querySelector("#coinCompare1").value.toUpperCase();
    let coinDenominator = document.querySelector("#denom-choices").value.toUpperCase();
    let unixTime = Math.round(Date.now()/1000, 1);
    this.props.getHistoricalPriceData(coinNumerator, coinDenominator, unixTime);
}
    
  render() {
    return (
            <div className="input-output-container">
                <div className="input-container">
                    <h2>Inputs</h2>
                    <div className="coinCompare">
                        <input 
                          type="text" 
                          className="coinEntry" 
                          list="coinName" 
                          autocomplete="off" 
                          placeholder="Add a ticker" 
                          id="coinCompare1"
                        >
                        </input>
                    </div>
                    <div className="coinCompare">
                        <select id="denom-choices">
                            <option value="USD">USD</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <button 
                      className="submit"
                      onClick = {this.handleSubmit}
                    >
                      Submit
                    </button>
                </div>
                <div className="output-container">
                    <h2>Outputs</h2>
                    <div className="currentPrice-container data-container">
                        <div className="currentPriceOutput">
                            Current Price:
                        </div>
                        <br/>
                        <div className="allTimeHighPriceOutput">
                            ATH:
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default InputOutputContainer;
