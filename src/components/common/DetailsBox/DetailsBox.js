import React, {useState} from 'react';
import {SvgIcon} from '..';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './DetailsBox.less';
import {resetMapZoom} from '../../../store/actions/mapActions';
import {useDispatch} from 'react-redux';

const DetailsBox = ({
  title,
  subtitle,
  subtitlelink,
  children,
  className,
  subtitleClick,
}) => {
  const [isActive, setActive] = useState('false');
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleBackBtnClick = (e) => {
    e.stopPropagation();
    history.push('/');
    dispatch(resetMapZoom());
  };
  return (
    <div className={`${'detail-box-wrapper'} ${className}`}>
      <div className="detail-box-inner">
        <div className="detailbox-title" onClick={handleToggle}>
          <div className="title-wrapper">
            {location.pathname !== '/' && (
              <button className="back-btn" onClick={handleBackBtnClick}>
                <SvgIcon name="arrow-left" viewbox="0 0 16.368 10.916" />
              </button>
            )}

            <div>SENTINEL EXPLORER</div>
          </div>
          <div className="title-icon">{isActive ? '-' : '+'}</div>
        </div>
        <div
          className={isActive ? 'detailbox-content' : 'detailbox-content hide'}
        >
          {subtitle && (
            <div className="subtitle">
              {subtitlelink && (
                <Link to={subtitlelink}>
                  <SvgIcon name="arrow-left" viewbox="0 0 16.368 10.916" />{' '}
                </Link>
              )}
              {subtitleClick && (
                <button onClick={history.goBack}>
                  <SvgIcon name="arrow-left" viewbox="0 0 16.368 10.916" />
                </button>
              )}
              {subtitle}
            </div>
          )}
          <div className="detailbox-content-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
