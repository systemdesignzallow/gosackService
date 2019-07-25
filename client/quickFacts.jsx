import React from 'react';
import style from './styles.css';

var FactsAndFeatures = ({ house }) => {
  let key = 0;
  const quickFacts = {
    type: {
      label: 'Type',
      img: 'https://image.flaticon.com/icons/svg/1555/1555466.svg',
      val: house.type
    },
    year: {
      label: 'Year',
      img: 'https://image.flaticon.com/icons/svg/1459/1459097.svg',
      val: house.year
    },
    heating: {
      label: 'Heating',
      img: 'https://image.flaticon.com/icons/svg/671/671766.svg',
      val: house.heating
    },
    cooling: {
      label: 'Cooling',
      img: 'https://image.flaticon.com/icons/svg/248/248793.svg',
      val: house.cooling
    },
    parking: {
      label: 'Parking',
      img: 'https://image.flaticon.com/icons/svg/818/818383.svg',
      val: house.parking
    },
    lot: {
      label: 'Lot',
      img: 'https://image.flaticon.com/icons/svg/47/47718.svg',
      val: Intl.NumberFormat().format(house.lotSize) + ' sqft'
    },
    listed: {
      label: 'Days on Zallo',
      img: 'https://image.flaticon.com/icons/svg/149/149316.svg',
      val: house.daysListed + ' days'
    },
    ppsqft: {
      label: 'Price/sqft',
      img: 'https://image.flaticon.com/icons/svg/38/38786.svg',
      val: '$' + Intl.NumberFormat().format(Math.floor(house.price / house.lotSize))
    },
    saves: {
      label: 'Saves',
      img: 'https://image.flaticon.com/icons/svg/126/126486.svg',
      val: house.saves
    }
  };
  return (
    <div className={style.containerFacts}>
      <h3 className={style.noMargin}>Facts and Features</h3>
      <div className={style.containerFactsItems}>
        {Object.entries(quickFacts).map(fact => {
          let id = fact[0];
          fact = fact[1];
          return (
            <div key={key++} className={style.fact} id={`facts-${id}`}>
              <img style={{ width: '30px', height: '30px', marginRight: '10px' }} src={fact.img} />
              <div>
                <h4 className={style.noMargin}>{fact.label}</h4>
                <p className={style.noMargin}>{fact.val}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FactsAndFeatures;
