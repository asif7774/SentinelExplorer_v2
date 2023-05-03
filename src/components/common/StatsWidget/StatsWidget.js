import React from 'react';
import {Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import {SvgIcon} from '../../common';
import './StatsWidget.less';
import {CopyOutlined} from '@ant-design/icons';

const StatsWidget = ({
  title,
  tooltip,
  statsnumbers,
  statspercents,
  url,
  extenalurl,
  className,
  loading,
  addPercentSign,
  copyIcon,
  extraText,
}) => {
  return (
    <>
      {url ? (
        <Link
          to={url}
          className={`${'statswidget-card'} ${className ? className : ''}`}
        >
          <div className="statswidget-card-inner">
            <div className="statswidget-title">
              {title}
              {tooltip && (
                <Tooltip title={tooltip}>
                  <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                </Tooltip>
              )}
              {copyIcon && (
                <Tooltip title={'Copy'}>
                  <button
                    style={{
                      color: '#5b5e5f',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(statsnumbers);
                    }}
                  >
                    <CopyOutlined className="icon" viewbox="0 0 13.75 13.75" />
                  </button>
                </Tooltip>
              )}
            </div>
            {statsnumbers && (
              <div className="statswidget-number">
                <h3>{statsnumbers}</h3>
              </div>
            )}
            <div
              className={`statswidget-percents  ${
                Number(statspercents) < 0 ? 'negative' : ''
              }`}
            >
              <div>
                {statspercents &&
                  `${Number(statspercents) > 0 ? '+' : ''}${statspercents}`}
                {addPercentSign ? '%' : ''}
              </div>
              <div>
                <SvgIcon name="arrow-right" viewbox="0 0 12 8" />
              </div>
            </div>
            {extraText && <span className="powered-by">{extraText}</span>}
          </div>
        </Link>
      ) : extenalurl ? (
        <a
          href={extenalurl}
          rel="noreferrer"
          target="_blank"
          className={`${'statswidget-card'} ${className ? className : ''}`}
        >
          <div className="statswidget-card-inner">
            <div className="statswidget-title">
              {title}
              {tooltip && (
                <Tooltip title={tooltip}>
                  <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                </Tooltip>
              )}{' '}
              {copyIcon && (
                <Tooltip title={'Copy'}>
                  <button
                    style={{
                      color: '#5b5e5f',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(statsnumbers);
                    }}
                  >
                    <CopyOutlined className="icon" viewbox="0 0 13.75 13.75" />
                  </button>
                </Tooltip>
              )}
            </div>
            {statsnumbers && (
              <div className="statswidget-number">
                <h3 className="d-flex justify-content-between">
                  {statsnumbers}
                </h3>
              </div>
            )}
            <div
              className={`statswidget-percents  ${
                Number(statspercents) < 0 ? 'negative' : ''
              }`}
            >
              <div>
                {statspercents &&
                  `${Number(statspercents) > 0 ? '+' : ''}${statspercents}`}
                {addPercentSign ? '%' : ''}
              </div>
              <div>
                <SvgIcon
                  name="arrow-right"
                  viewbox="0 0 12 8"
                  fill={'rgba(255,255,255, 1)'}
                />
              </div>
            </div>
            {extraText && <span className="powered-by">{extraText}</span>}
          </div>
        </a>
      ) : (
        <div className={`${'statswidget-card'} ${className ? className : ''}`}>
          <div className="statswidget-card-inner">
            <div className="statswidget-title">
              {title}
              {tooltip && (
                <Tooltip title={tooltip}>
                  <SvgIcon name="info" viewbox="0 0 13.75 13.75" />
                </Tooltip>
              )}
              {copyIcon && (
                <Tooltip title={'Copy'}>
                  <button
                    style={{
                      color: '#5b5e5f',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(statsnumbers);
                    }}
                  >
                    <CopyOutlined className="icon" viewBox="0 0 13.75 13.75" />
                  </button>
                </Tooltip>
              )}
            </div>
            {statsnumbers && (
              <div className="statswidget-number">
                <h3>{statsnumbers}</h3>
              </div>
            )}
            <div
              className={`statswidget-percents  ${
                Number(statspercents) < 0 ? 'negative' : ''
              }`}
            >
              <div>
                {statspercents &&
                  `${Number(statspercents) > 0 ? '+' : ''}${statspercents}`}
                {addPercentSign ? '%' : ''}
              </div>
            </div>
            {extraText && <span className="powered-by">{extraText}</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default StatsWidget;
