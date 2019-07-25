import React from 'react';
import ShowMore from './ShowMore.jsx';
import propTypes from 'prop-types';
import CssModules from 'react-css-modules';
import style from './styles.css';
var Details = ({ house, toggle, handleClick }) => {
  let key = 0;
  return (
    <div className={style.containerInterior}>
      <p className={style.noMargin + ' ' + style.moreInfoTitle}>INTERIOR FEATURES</p>
      <div className={style.interiorContainerInterior}>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Bedrooms</h4>
          <div>
            <span className={style.greyedOut}>Beds: </span>
            {house.beds}
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Heating and Cooling</h4>
          <div>
            <span className={style.greyedOut}>Heating: </span>
            {house.heating}
          </div>
          <div>
            <span className={style.greyedOut}>Cooling: </span>
            {house.cooling}
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Basement</h4>
          <div>
            <span>No basement</span>
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Appliances</h4>
          <div>
            <span className={style.greyedOut}>Appliances included: </span>
            <div>{house.appliances.length ? house.appliances.join(', ') : 'None'}</div>
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Flooring</h4>
          <div>
            <span className={style.greyedOut}>Floor size: </span>
            {house.floorSize} sqft
          </div>
          <div>
            <span className={style.greyedOut}>Flooring: </span>
            {house.flooring}
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Interior Features</h4>
          {house.interiorFeatures.map(feat => {
            return <div key={key++}>{feat}</div>;
          })}
          <div>
            <span className={style.greyedOut}>Room count: </span>
            {house.rooms}
          </div>
        </div>
      </div>
      {toggle ? <ShowMore house={house} /> : null}
      <div id={style.seeMore} onClick={handleClick}>
        {toggle ? 'See Fewer Facts and Features ▲ ' : 'See More Facts and Features ▼'}
      </div>
    </div>
  );
};
export default Details;
