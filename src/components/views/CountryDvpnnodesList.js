import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import ListView from '../common/ListView/ListView';
import {useSelector} from 'react-redux';
import {Divider, Skeleton, Space} from 'antd';
import {useParams} from 'react-router-dom';

const CountryDvpnnodesList = () => {
  const {countryCode} = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const storeState = useSelector((state) => state);

  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        setData(mainData);
      }
    };
    initFn();
    const filterData = () => {
      let preCountryData;

      if (storeState.isDataInitialized && data) {
        preCountryData = data.filter((obj) => {
          return obj.countryCode === countryCode;
        });
        setLoading(false);
      }
      if (!loading) {
        setCountryData(preCountryData);
      }
    };
    filterData();
  }, [storeState, data, countryCode, loading]);

  return (
    <DetailsBox
      subtitle={`${countryCode} - All Nodes`}
      subtitlelink="/countries"
    >
      {!storeState.isDataInitialized && (
        <>
          <Space size={'middle'} className="skeleton-space">
            <Skeleton.Avatar
              loading={!storeState.isDataInitialized}
              active={true}
              shape={'square'}
            />
            <Skeleton.Input
              className="skeleton-input"
              style={{width: '100%'}}
              loading={!storeState.isDataInitialized}
              active={true}
              size={'small'}
            />
          </Space>
          <Divider className="divider-light" />
          <Space size={'middle'} className="skeleton-space">
            <Skeleton.Avatar
              loading={!storeState.isDataInitialized}
              active={true}
              shape={'square'}
            />
            <Skeleton.Input
              className="skeleton-input"
              loading={!storeState.isDataInitialized}
              active={true}
              size={'small'}
            />
          </Space>
          <Divider className="divider-light" />
          <Space size={'middle'} className="skeleton-space">
            <Skeleton.Avatar
              loading={!storeState.isDataInitialized}
              active={true}
              shape={'square'}
            />
            <Skeleton.Input
              className="skeleton-input"
              loading={!storeState.isDataInitialized}
              active={true}
              size={'small'}
            />
          </Space>
          <Divider className="divider-light" />
          <Space size={'middle'} className="skeleton-space">
            <Skeleton.Avatar
              loading={!storeState.isDataInitialized}
              active={true}
              shape={'square'}
            />
            <Skeleton.Input
              className="skeleton-input"
              loading={!storeState.isDataInitialized}
              active={true}
              size={'small'}
            />
          </Space>
          <Divider className="divider-light" />
          <Space size={'middle'} className="skeleton-space">
            <Skeleton.Avatar
              loading={!storeState.isDataInitialized}
              active={true}
              shape={'square'}
            />
            <Skeleton.Input
              className="skeleton-input"
              loading={!storeState.isDataInitialized}
              active={true}
              size={'small'}
            />
          </Space>
        </>
      )}
      {storeState.isDataInitialized && (
        <div className="listing-main-wrapper">
          {!loading && countryData && (
            <>
              {countryData.map((node, i) => {
                return (
                  <ListView
                    key={i}
                    countryflagname={node.countryCode}
                    nodename={node.address}
                    speed={node.speed}
                    url={`/dvpnnodes-details/${node.id}`}
                  />
                );
              })}
            </>
          )}
        </div>
      )}
    </DetailsBox>
  );
};

export default CountryDvpnnodesList;
