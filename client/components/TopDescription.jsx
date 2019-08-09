import React from 'react';
import MortgageCalculator from './MortgageCalculator.jsx';

var TopDescription = ({ house }) => {
  return (
    <div className="containerTop">
      <div className="containerGeneralDescription">
        <div className="line1">
          <h1 className="noMargin" id="line1">
            {house.homeAddress}
          </h1>
        </div>
        <div>
          <h2 className="noMargin" id="line2">
            {house.homeAddress.split('\n')[1]}
          </h2>
        </div>
        <div className="lightFacts">
          <h3 className="noMargin">
            <span>{house.beds} beds</span>
            <span> - </span>
            <span>{house.baths} baths</span>
            <span> - </span>
            <span> {Intl.NumberFormat().format(house.floorSize)} sqft</span>
          </h3>
        </div>
        <div className="DescriptionBody">
          <p className="noMargin" className="noMargin" id="house-description">
            {house.houseDescription}
          </p>
        </div>
      </div>
      <div className="containerPriceDescription">
        <h5 className="noMargin">
          <div id="red-dot" /> FOR SALE
        </h5>
        <h1 className="noMargin" id="house-price">
          ${new Intl.NumberFormat().format(house.price)}
        </h1>
        <p className="noMargin" id="estimate-title">
          EST. MORTGAGE
        </p>
        <MortgageCalculator house={house} />
      </div>
    </div>
  );
};
export default TopDescription;
