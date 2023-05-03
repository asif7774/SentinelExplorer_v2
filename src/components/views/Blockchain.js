import React from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../common';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';

const BlockchainList = ({url, proposal, statsnumbers}) => {
    return (
        <Link to={url} className="blockchain-list-card full-width-grid">
            <h3>Latest Block</h3>
            <div className="list-card-inner">
                <div className="list-left">
                    <div className="nameintial-circle">{(proposal.substring(0, 1))} </div>
                    <div className="validator-name">{proposal} <span className='pl-3'>{statsnumbers}</span></div>
                </div>
                <div className="list-right">
                    <SvgIcon name="arrow-right" viewbox="0 0 12 8" />
                </div>
            </div>
        </Link>
    )
}

const Blockchain = () => {
    return (
        <DetailsBox
            subtitle="Blockchain"
            subtitlelink="home"
            className="without-chart"
            >
            <StatsWidget
                title="Block Height"
                statsnumbers="1,000,000"
                url="blockchain-details"
            />
            <StatsWidget
                title="Block Time"
                statsnumbers="6.7"
                statspercents="Seconds"
            />
            <StatsWidget
                title="DVPN Staked"
                statsnumbers="8.9 B"
                statspercents="$125,000,000"
            />
            <StatsWidget
                title="Community Pool"
                statsnumbers="24,000,000"
                statspercents="DVPN"
            />
            <BlockchainList 
                proposal="Stake Fish"
                statsnumbers="3,626,800"
                url="blockchain-details"
             />
        </DetailsBox>
    )
}

export default Blockchain
