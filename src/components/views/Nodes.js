import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const Nodes = () => {
    return (
        <DetailsBox
            subtitle="Nodes"
            subtitlelink="home"
            >
            <StatsWidgetChart
                title="dVPN Nodes"
                statsnumbers="112"
                statspercents="4.14"
                tooltip="Number of active dVPN nodes on the network."
                url="dvpnnodes"
            />
            <StatsWidget
                title="Countries"
                statsnumbers="Countries"
                url="countries"
            />
            <StatsWidget
                title="Avg Speed"
                statsnumbers="170 mbps"
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

export default Nodes
