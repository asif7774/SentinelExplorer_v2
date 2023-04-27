import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {setActiveNode} from '../../store/actions/mapActions';

const CountryNodes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const storeState = useSelector((state) => state);

  const dispatch = useDispatch();

  const {country} = useParams();

  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        const cities = mainData.filter((el) => {
          return el.location.country === country;
        });
        const sorted = cities.sort(function (a, b) {
          if (a.location.city < b.location.city) {
            return -1;
          }
          if (a.location.city > b.location.city) {
            return 1;
          }
          return 0;
        });
        setData(sorted);
      }
    };
    initFn();
  }, [storeState, loading]);

  const clickHandler = (node) => {
    dispatch(setActiveNode(node));
  };
  return (
    <DetailsBox subtitle="Cities" subtitleClick={true}>
      <div className="listing-main-wrapper">
        {data.map((node, i) => {
          return (
            <ListView
              key={node.address}
              moniker={node?.moniker}
              countryname={node?.location?.country}
              nodename={node?.location?.city}
              speed={node.bandwidth?.download}
              url={`/dvpnnodes-details/${node.address}`}
              clickHandler={() => {
                clickHandler(node);
              }}
            />
          );
        })}
      </div>
    </DetailsBox>
  );
};

export default CountryNodes;
