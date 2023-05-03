import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const Validators = () => {
    return (
        <DetailsBox
            subtitle="Validators"
            subtitlelink="home"
            >
            <StatsWidgetChart
                title="Validators"
                statsnumbers="80"
                tooltip="Number of active validators securing Sentinel’s Blockchain."
                url="validatorlist"
            />
            <StatsWidget
                title="Avg. Uptime"
                statsnumbers="99%"
            />
            <StatsWidget
                title="Self Bonded"
                statsnumbers="50%"
                tooltip="Percentage of validators self bonding their $DVPN to their own validator."
            />
            <StatsWidget
                title="% Online"
                statsnumbers="100%"
            />
            <StatsWidget
                title="DVPN Staked"
                tooltip=" Number of $DVPN staked, securing the network."
                statsnumbers="8.5 M"
            />
        </DetailsBox>
    )
}

export default Validators
