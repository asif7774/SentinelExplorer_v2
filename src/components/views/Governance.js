import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';

const HubList = ({url, hubid, hubname, className, passed, pending, failed}) => {
    return (
        <div onClick={()=> window.open(`${url}`, '_blank')} className={`${"governance-list-card"} ${className}`}>
            <div className="list-card-inner">
                <div className="list-left">
                    <div className="nameintial-circle">{hubid}</div>
                    <div className="hub-name">{hubname}</div>
                </div>
                <div className="list-right">
                    <div className="status-right">
                        {passed &&
                            (<div className="tags passed-tag"><span></span> Passed</div>)
                        }
                        {pending &&
                            (<div className="tags pending-tag"><span></span> Pending</div>) 
                        }
                        {failed &&
                            (<div className="tags failed-tag"><span></span> Failed</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const Governance = () => {
    return (
        <DetailsBox
            subtitle="Governance"
            subtitlelink="home"
            >
            <StatsWidget
                title="Current Hub"
                statsnumbers="Sentinelhub 2"
            />
            <HubList
                hubid="#7"
                hubname="Change of vesting unlock timeline"
                url="https://www.mintscan.io/sentinel/proposals/7"
                passed
            />
            <HubList
                hubid="#6"
                hubname="Inflation parameter changes according to Sentinel token economics model"
                url="https://www.mintscan.io/sentinel/proposals/6"
                passed
            />
            <HubList
                hubid="#5"
                hubname="Sentinel Hub Software Upgrade - 2"
                url="https://www.mintscan.io/sentinel/proposals/5"
                passed
            />
            <HubList
                hubid="#4"
                hubname="Staking Param Change"
                url="https://www.mintscan.io/sentinel/proposals/4"
                passed
            />
            <HubList
                hubid="#3"
                hubname="Sentinel Hub Software Upgrade - 1"
                url="https://www.mintscan.io/sentinel/proposals/3"
                passed
            />
        </DetailsBox>
    )
}

export default Governance
