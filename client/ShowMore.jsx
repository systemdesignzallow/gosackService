import React from 'react';
import style from './styles.css';

const ShowMore = ({ house }) => {
  return (
    <div className={style.containerInterior}>
      <hr />
      <p className={style.noMargin + ' ' + style.moreInfoTitle}>SPACES AND AMENITIES</p>
      <div className={style.interiorContainerInterior}>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Size</h4>
          <div>
            <span className={style.greyedOut}>Unit Count: </span>0
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Spaces</h4>
          <div>{house.spaces}</div>
        </div>
      </div>
      <hr />
      <p className={style.noMargin + ' ' + style.moreInfoTitle}>CONSTRUCTION</p>
      <div className={style.interiorContainerInterior}>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Type and Style</h4>
          <div>
            <span className={style.greyedOut}>Structure Type: </span>
            {house.construction}
          </div>
          <div>{house.type}</div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Materials</h4>
          <div>
            <span className={style.greyedOut}>Roof Type: </span>
            {house.roof}
          </div>
          <div>
            <span className={style.greyedOut}>Exterior Material: </span>
            {house.exterior}
          </div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Dates</h4>
          <div>{`Built in ${house.year}`}</div>
        </div>
        <div className={style.containerBiggerFact}>
          <h4 className={style.noMargin}>Other Construction Features</h4>
          <div>
            <span className={style.greyedOut}>Stories: </span>
            {house.stories}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMore;
