import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const Providers = () => {
    return (
        <DetailsBox
            subtitle="Providers"
            subtitlelink="home"
            >
            <StatsWidgetChart
                title="dVPN Nodes"
                statsnumbers="112"
                statspercents="4.14"
            />
            <StatsWidget
                title="Countries"
                statsnumbers="Countries"
                url="/countries"
            />
            <StatsWidget
                title="Avg Speed"
                statsnumbers="170 mbps"
                url="/"
            />
            <StatsWidget
                title="Subscriptions"
                statsnumbers="1,250"
            />
            <StatsWidget
                title="Sessions"
                statsnumbers="700"
            />
        </DetailsBox>
    )
}

export default Providers
