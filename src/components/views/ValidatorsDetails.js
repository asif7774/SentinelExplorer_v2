import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import './CommonView.less';

const ValidatorsDetails = () => {
    return (
        <DetailsBox
            subtitle="Validators"
            subtitlelink="validatorlist"
            >
            <div className="validatordtl-head">
                <div className="circle-name">E</div>
                <div className="validator-name">Exotic Topaz Tapir</div>
            </div>
            <div className="validators-content">
                <StatsWidget
                    title="Commission"
                    statsnumbers="5.0%"
                    tooltip="This is the commission that the validator charges. This percentage will be deducted from staking rewards."
                />
                <StatsWidget
                    title="Voting Power"
                    statsnumbers="2.57%"
                    tooltip="The ratio of delegated tokens to the other active validators."
                />
                <StatsWidget
                    title="Up Time"
                    statsnumbers="99.7%"
                    tooltip="Percentage of time the validator has been active and signing blocks."
                />
                <StatsWidget
                    title="Self Bonded"
                    statsnumbers="142,000"
                    tooltip="Amount of $DVPN the validator is self bonding to their own validator."
                />
                <StatsWidget
                    title="Address"
                    statsnumbers="sentvaloper12134124asda..."
                    className="full-width-grid"
                />
            </div>
            <div className="validator-bottom-details">
                <h4>Details</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
            </div>
        </DetailsBox>
    )
}

export default ValidatorsDetails
