import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import ReactCountryFlag from 'react-country-flag';
import './CommonView.less';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
  resetMapZoom,
  setActiveNode,
} from '../../store/actions/mapActions';
import countryCode from '../../utility/countryCode';
import {useHistory} from 'react-router';
import {ExpandOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';

const formatBytes = (bytes, decimals = 0) => {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    'bps',
    'kbps',
    'mbps',
    'gbps',
    'tbps',
    'pbps',
    'ebps',
    'zbps',
    'ybps',
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  if (isNaN(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)))) {
    return 'N/A';
  } else {
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
};

const DvpnnodesDetails = () => {
  const history = useHistory();
  const {nodeId} = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const storeState = useSelector((state) => state);

  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata.filter((node) => {
          return nodeId === node.address;
        });
        if (mainData.length > 0) {
          setData(mainData[0]);
          setLoading(false);
          if (
            storeState.isDataInitialized &&
            storeState.selectedNode === null
          ) {
            dispatch(setActiveNode(mainData[0]));
          }
        } else {
          history.push('/');
        }
      }
    };
    initFn();
  }, [storeState, dispatch, history, nodeId]);

  return (
    <>
      {!loading && (
        <DetailsBox
          subtitle={data?.location.city}
          subtitleClick={true}
          // subtitlelink="/allNodes"
        >
          <div className="nodes-head">
            {/* <div className="stars">
              <SvgIcon name="star" viewbox="0 0 37.617 36.004" />
              <SvgIcon name="star" viewbox="0 0 37.617 36.004" />
              <SvgIcon name="star" viewbox="0 0 37.617 36.004" />
              <SvgIcon name="star" viewbox="0 0 37.617 36.004" />
              <SvgIcon name="star" viewbox="0 0 37.617 36.004" />
            </div> */}
            <h3>{data?.moniker}</h3>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center ">
                <ReactCountryFlag
                  svg
                  countryCode={countryCode[data?.location.country]}
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                />

                <div className="validator-name ml-2">
                  {data?.location.city}, {data?.location.country}
                </div>
              </div>
              <Tooltip title={'Zoom out'}>
                <div
                  className="zoom-btn"
                  onClick={() => {
                    dispatch(resetMapZoom());
                  }}
                >
                  <ExpandOutlined />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="validators-content">
            <StatsWidget title="Version" statsnumbers={data?.version} />
            <StatsWidget
              title="Protocol Type"
              statsnumbers={data?.type === 2 ? 'V2Ray' : 'WireGuard'}
            />
            {/* <StatsWidget title="Peers" statsnumbers={data?.handshake.peers} /> */}
            <StatsWidget
              title="Download Speed"
              statsnumbers={formatBytes(data?.bandwidth.download)}
            />
            <StatsWidget
              title=" Upload Speed"
              statsnumbers={formatBytes(data?.bandwidth.upload)}
            />
            {/* <StatsWidget title="Encyption" statsnumbers="AEC 256" />
            <StatsWidget title="Latancy" statsnumbers="13.114" /> */}
            <StatsWidget
              title="Node Address"
              statsnumbers={data?.address}
              // statsnumbers={data?.address.slice(0, 23) + '...'}
              className="full-width-grid"
              // tooltip={data?.address}
              copyIcon={true}
            />
          </div>
        </DetailsBox>
      )}
    </>
  );
};

export default DvpnnodesDetails;
