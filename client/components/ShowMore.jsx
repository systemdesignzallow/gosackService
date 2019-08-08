import React from 'react';
// import style from '../styles.css';

const ShowMore = ({ house }) => {
  return (
    <div className="containerInterior">
      <hr />
      <p className="noMargin" className="moreInfoTitle">
        SPACES AND AMENITIES
      </p>
      <div className="interiorContainerInterior">
        <div className="containerBiggerFact">
          <h4 className="noMargin">Size</h4>
          <div>
            <span className="greyedOut">Unit Count: </span>0
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Spaces</h4>
          <div>{house.spaces}</div>
        </div>
      </div>
      <hr />
      <p className="noMargin" className="moreInfoTitle">
        CONSTRUCTION
      </p>
      <div className="interiorContainerInterior">
        <div className="containerBiggerFact">
          <h4 className="noMargin">Type and Style</h4>
          <div>
            <span className="greyedOut">Structure Type: </span>
            {house.construction}
          </div>
          <div>{house.type}</div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Materials</h4>
          <div>
            <span className="greyedOut">Roof Type: </span>
            {house.roof}
          </div>
          <div>
            <span className="greyedOut">Exterior Material: </span>
            {house.exterior}
          </div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Dates</h4>
          <div>{`Built in ${house.yearBuilt}`}</div>
        </div>
        <div className="containerBiggerFact">
          <h4 className="noMargin">Other Construction Features</h4>
          <div>
            <span className="greyedOut">Stories: </span>
            {house.stories}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMore;
