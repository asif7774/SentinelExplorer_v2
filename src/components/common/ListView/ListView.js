import React from 'react';
import {Link} from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import countryCode from '../../../utility/countryCode';
import './ListView.less';

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

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sizes[i]}`;
};

const ListView = ({
  url,
  speed,
  counts,
  countryname,
  nodename,
  countryflagname,
  clickHandler,
  moniker,
  continent,
}) => {
  return (
    <Link to={url} className="list-card" onClick={clickHandler}>
      <div className="list-card-inner">
        <div className="list-left">
          <ReactCountryFlag
            svg
            countryCode={countryCode[countryname]}
            style={{
              width: '2em',
              height: '2em',
            }}
          />
          <div className="country-name">
            {continent && continent}
            {!continent &&
              `${moniker ? moniker + ',' : ''} ${
                nodename ? nodename + ',' : ''
              } ${countryname ? countryname : ''}`}
          </div>
        </div>
        <div className="list-right">
          {speed && <span>{formatBytes(speed)}</span>}
          {counts && <span>{counts}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ListView;
