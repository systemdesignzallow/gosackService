import React from 'react';
import ShowMore from './ShowMore.jsx';

var Details = ({ house, toggle, handleClick }) => {
  let key = 0;
  return (
    <div className="containerInterior">
      <p className="noMargin" className="moreInfoTitle">INTERIOR FEATURES</p>
      <div className="interiorContainerInterior">
        <div className="containerBiggerFact">
          <h4 className="noMargin">Bedrooms</h4>
          <div>
            <span className="greyedOut">Beds: </span>
            {house.beds}
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Heating and Cooling</h4>
          <div>
            <span className="greyedOut">Heating: </span>
            {house.heating}
          </div>
          <div>
            <span className="greyedOut">Cooling: </span>
            {house.cooling}
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Basement</h4>
          <div>
            <span>No basement</span>
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Appliances</h4>
          <div>
            <span className="greyedOut">Appliances included: </span>
            <div>
              {house.appliances && house.appliances.length
                ? house.appliances.split(',').join(', ')
                : 'None'}
            </div>
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Flooring</h4>
          <div>
            <span className="greyedOut">Floor size: </span>
            {house.floorSize} sqft
          </div>
          <div>
            <span className="greyedOut">Flooring: </span>
            {house.flooring}
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Interior Features</h4>
          {house.interiorFeatures.split(',').map(feat => {
            return <div key={key++}>{feat}</div>;
          })}
          <div>
            <span className="greyedOut">Room count: </span>
            {house.rooms}
          </div>
        </div>
      </div>
      {toggle ? <ShowMore house={house} /> : null}
      <div id="seeMore" onClick={handleClick}>
        {toggle ? 'See Fewer Facts and Features ▲ ' : 'See More Facts and Features ▼'}
      </div>
    </div>
  );
};
export default Details;
