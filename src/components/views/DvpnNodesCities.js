import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';

const getCities = (array) => {
  const countries = [];
  array.forEach((element) => {
    if (!countries.includes(element.location.city)) {
      countries.push(element.location.city);
    }
  });
  return countries;
};

const DvpnnodesCities = () => {
  const [loading] = useState(true);
  const [data, setData] = useState([]);
  const storeState = useSelector((state) => state);
  const {country} = useParams();
  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        if (country) {
          mainData = storeState.metadata.filter((el) => {
            return el.location.country === country;
          });
        }

        const countries = getCities(mainData);
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
  }, [storeState, loading, country]);
  return (
    <DetailsBox subtitle="Cities" subtitleClick={true}>
      <div className="listing-main-wrapper">
        {data.map((city, i) => {
          return (
            <ListView key={city+i} countryflagname={country} cityname={city} url={`/cities/${city}`} />
          );
        })}
      </div>
    </DetailsBox>
  );
};

export default DvpnnodesCities;
