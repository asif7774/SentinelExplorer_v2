import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveNode} from '../../store/actions/mapActions';
import {useParams} from 'react-router';

const AllNodes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [dataFilterBY, setDataFilterBY] = useState('');
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);
  const {city} = useParams();
  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        if (city) {
          mainData = storeState.metadata.filter((el) => {
            return el.location.city === city;
          });
        }
        setData(mainData);

        setData((data) =>
          data.sort((a, b) => {
            if (a.location['city'] < b.location['city']) {
              return -1;
            }
            if (a.location['city'] > b.location['city']) {
              return 1;
            }
            return 0;
          })
        );
        // setDataFilterBY('country');
        setLoading(false);
      }
    };
    initFn();
  }, [storeState]);
  const clickHandler = (node) => {
    dispatch(setActiveNode(node));
  };

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

  return (
    <DetailsBox subtitle="All Nodes" subtitleClick={true}>
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
                  url={`/dvpnnodes-details/${node.address}`}
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

export default AllNodes;
