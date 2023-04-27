import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveNode} from '../../store/actions/mapActions';
import {CONTINENT_MAP} from '../../utility/continents';

const getContinents = (array) => {
  const continents = [];
  array.forEach((element) => {
    if (!continents.includes(element.location.continent)) {
      continents.push(element.location.continent);
    }
  });
  return continents;
};

const Continents = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [dataFilterBY, setDataFilterBY] = useState('');
  const storeState = useSelector((state) => state);
  useEffect(() => {
    const initFn = () => {
      if (storeState.isDataInitialized) {
        const mainData = storeState.metadata;
        console.log(mainData);
        const continents = getContinents(mainData);
        const sorted = continents.sort(function (a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
        setData(sorted);

        // setData((data) => {
        //   console.log(data);
        //   return;
        // });
        // setDataFilterBY('country');
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

  return (
    <DetailsBox subtitle="Continents" subtitlelink="/">
      <div className="listing-main-wrapper">
        {!loading && (
          <>
            {data.map((continent) => {
              return (
                <ListView
                  key={continent}
                  continent={continent}
                  url={`/continent/${continent}`}
                />
              );
            })}
          </>
        )}
      </div>
    </DetailsBox>
  );
};

export default Continents;
