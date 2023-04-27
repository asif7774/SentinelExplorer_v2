import React from 'react';
import { SvgIcon } from '..';

const UtilitiesListView = ({title, description, externalurl, className}) => {
    return (
        <div onClick={()=> window.open(`${externalurl}`, '_blank')} className={`${"statswidget-card"} ${className}`}>
            <div className="statswidget-card-inner">
                {title && (
                    <div className="statswidget-number">
                        <h3>{title}</h3>
                    </div>
                )}
                <div className="statswidget-percents">
                    <div className="text-white">{description}</div>
                    <div><SvgIcon name="arrow-topright" viewbox="0 0 16.38 16.378" /></div>
                </div>
            </div>
        </div>
    )
}

export default UtilitiesListView