import React, {useEffect, useState} from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip as RCTooltip,
} from 'recharts';
import {Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import {SvgIcon} from '../';
import axios from 'axios';
import './StatsWidgetChart.less';

const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const convertUTCDateToLocalDate = (date) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var newDate = new Date(date);
  var llp = newDate.getDate();
  var mnt = month[newDate.getMonth()];
  switch (llp) {
    case 1:
    case 21:
    case 31:
      return '' + llp + 'st ' + mnt;
    case 2:
    case 22:
      return '' + llp + 'nd ' + mnt;
    case 3:
    case 23:
      return '' + llp + 'rd ' + mnt;
    default:
      return '' + llp + 'th ' + mnt;
  }
};

const TootipData = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltips">
        <div className="chart-tooltips-inner">
          {formatBytes(payload[0].payload.download)}
          <br />
          {convertUTCDateToLocalDate(payload[0].payload.timestamp)}
        </div>
      </div>
    );
  }
  return null;
};

const StatsWidget = ({
  url,
  externalurl,
  title,
  tooltip,
  statsnumbers,
  statspercents,
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const get24hrsData = async () => {
    try {
      const response = await axios
        .get(
          'https://api.explorer.sentinel.co/api/v1/statistics?method=HistoricalBandwidthConsumption&timeframe=day&sort_by=-timestamp&limit=30'
        )
        .then((res) => {
          const modifiedData = res.data.result.map((el, ind) => {
            if (el.value) {
              return {
                download: el.value.download,
                timestamp: el.timestamp,
              };
            }
            return null
          });
          let newe = modifiedData.reverse();

          return newe;
        });

      if (response !== null && response !== undefined) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get24hrsData();
  }, []);
  useEffect(() => {
    if (data !== null && data !== undefined) {
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      {url ? (
        <Link to={url} className="statswidget-card-chart">
          <div className="statswidget-card-inner">
            <div className="left-statswidget">
              <div className="statswidget-title">
                {title}
                {tooltip && (
                  <Tooltip title={tooltip}>
                    <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                  </Tooltip>
                )}
              </div>
              {statsnumbers && (
                <div className="statswidget-number">
                  <h3>{formatBytes(data)}</h3>
                </div>
              )}
              <div className="statswidget-percents">
                <div>{statspercents && `+ ${statspercents}`}</div>
              </div>
            </div>
            <div className="right-chart">
              {!loading && (
                <>
                  <ResponsiveContainer width="100%" height="80%">
                    <LineChart width={300} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey={'upload'}
                        stroke="#00b6fa"
                        strokeWidth={1}
                        dot={false}
                      />
                      <RCTooltip content={<TootipData />} />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="my-2 bottom-label">30 Day Trend</div>
                </>
              )}
            </div>
          </div>
        </Link>
      ) : externalurl ? (
        <div
          onClick={() => window.open(`${externalurl}`, '_blank')}
          className="statswidget-card-chart link-tag"
        >
          <div className="statswidget-card-inner">
            <div className="left-statswidget">
              <div className="statswidget-title">
                {title}
                {tooltip && (
                  <Tooltip title={tooltip}>
                    <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                  </Tooltip>
                )}
              </div>
              {statsnumbers && (
                <div className="statswidget-number">
                  <h3>{statsnumbers}</h3>
                </div>
              )}
              <div className="statswidget-percents">
                <div>{statspercents && `+ ${statspercents}`}</div>
              </div>
            </div>
            <div className="right-chart">
              {!loading && (
                <>
                  <ResponsiveContainer width="100%" height="80%">
                    <LineChart width={300} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey={'upload'}
                        stroke="#00b6fa"
                        strokeWidth={1}
                        dot={false}
                      />
                      <RCTooltip content={<TootipData />} />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="my-2 bottom-label">30 Day Trend</div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="statswidget-card-chart">
          <div className="statswidget-card-inner">
            <div className="left-statswidget">
              <div className="statswidget-title">
                {title}
                {tooltip && (
                  <Tooltip title={tooltip}>
                    <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                  </Tooltip>
                )}
              </div>
              {statsnumbers && (
                <div className="statswidget-number">
                  {!loading && (
                    <h3>
                      {formatBytes(
                        data
                          .map((item) => item.download)
                          .reduce((prev, next) => prev + next)
                      )}
                    </h3>
                  )}
                </div>
              )}
            </div>
            <div className="right-chart">
              {!loading && (
                <>
                  <ResponsiveContainer width="100%" height="80%">
                    <LineChart width={300} height={100} data={data}>
                      <Line
                        type="monotone"
                        dataKey={'download'}
                        stroke="#00b6fa"
                        strokeWidth={1}
                        dot={false}
                      />
                      <RCTooltip content={<TootipData />} />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="my-2 bottom-label">30 Day Trend</div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatsWidget;
