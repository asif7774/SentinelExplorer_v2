import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';

const getContries = (array) => {
  const countries = [];
  array.forEach((element) => {
    if (!countries.includes(element.location.country)) {
      countries.push(element.location.country);
    }
  });
  return countries;
};

const DvpnnodesCountry = () => {
  const [loading] = useState(true);
  const [data, setData] = useState([]);
  const storeState = useSelector((state) => state);
  const {continent} = useParams();
  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        if (continent) {
          mainData = storeState.metadata.filter((el) => {
            return el.location.continent === continent;
          });
        }

        const countries = getContries(mainData);
        const sorted = countries.sort(function (a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
        setData(sorted);
      }
    };
    initFn();
  }, [storeState, loading, continent]);
  return (
    <DetailsBox subtitle="Countries" subtitleClick={true}>
      <div className="listing-main-wrapper">
        {data.map((country, i) => {
          return (
            <ListView
              key={country}
              countryname={country}
              url={`/country/${country}`}
            />
          );
        })}
      </div>
    </DetailsBox>
  );
};

export default DvpnnodesCountry;
