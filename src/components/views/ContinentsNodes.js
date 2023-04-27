import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveNode} from '../../store/actions/mapActions';
import {useParams} from 'react-router';

const ContinentsNodes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const {continent} = useParams();
  const dispatch = useDispatch();
  // const [dataFilterBY, setDataFilterBY] = useState('');
  const storeState = useSelector((state) => state);
  useEffect(() => {
    const initFn = () => {
      if (storeState.isDataInitialized) {
        const mainData = storeState.metadata;
        const filteredData = mainData.filter((node) => {
          return node.location.continent === continent;
        });
        const sorted = filteredData.sort(function (a, b) {
          if (a.location.country < b.location.country) {
            return -1;
          }
          if (a.location.country > b.location.country) {
            return 1;
          }
          return 0;
        });
        setData(sorted);
        setLoading(false);
      }
    };
    initFn();
  }, [storeState]);

  // const handleFilterChange = (e) => {
  //   setData((data) =>
  //     data.sort((a, b) => {
  //       if (a.location[e.target.value] < b.location[e.target.value]) {
  //         return -1;
  //       }
  //       if (a.location[e.target.value] > b.location[e.target.value]) {
  //         return 1;
  //       }
  //       return 0;
  //     })
  //   );
  //   setDataFilterBY(e.target.value);
  // };

  const clickHandler = (node) => {
    dispatch(setActiveNode(node));
  };
  return (
    <DetailsBox subtitle={`${continent}'s Nodes`} subtitlelink="/continents">
      <div className="listing-main-wrapper">
        {!loading && (
          <>
            {data.map((node) => {
              return (
                <ListView
                  key={node.address}
                  moniker={node?.moniker}
                  countryname={node?.location?.country}
                  nodename={node?.location?.city}
                  speed={node.bandwidth?.download}
                  url={`continent/${continent}/${node?.location?.country}`}
                  clickHandler={() => {
                    clickHandler(node);
                  }}
                />
              );
            })}
          </>
        )}
      </div>
    </DetailsBox>
  );
};

export default ContinentsNodes;
