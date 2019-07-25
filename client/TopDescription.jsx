import React from 'react';
import MortgageCalculator from './MortgageCalculator.jsx';
import style from './styles.css';
var TopDescription = ({ house }) => {
  return (
    <div className={style.containerTop}>
      <div className={style.containerGeneralDescription}>
        <div className={style.line1}>
          <h1 className={style.noMargin} id="line1">
            {house.address.split('\n')[0]}
          </h1>
        </div>
        <div>
          <h2 className={style.noMargin} id="line2">
            {house.address.split('\n')[1]}
          </h2>
        </div>
        <div className={style.lightFacts}>
          <h3 className={style.noMargin}>
            <span>{house.beds} beds</span>
            <span> - </span>
            <span>{house.baths} baths</span>
            <span> - </span>
            <span> {Intl.NumberFormat().format(house.floorSize)} sqft</span>
          </h3>
        </div>
        <div className={style.DescriptionBody}>
          <p className={style.noMargin} className={style.noMargin} id="house-description">
            {house.description}
          </p>
        </div>
      </div>
      <div className={style.containerPriceDescription}>
        <h5 className={style.noMargin}>
          <div id="red-dot" /> FOR SALE
        </h5>
        <h1 className={style.noMargin} id="house-price">
          ${new Intl.NumberFormat().format(house.price)}
        </h1>
        <p className={style.noMargin} id="estimate-title">
          EST. MORTGAGE
        </p>
        <MortgageCalculator house={house} />
      </div>
    </div>
  );
};
export default TopDescription;
