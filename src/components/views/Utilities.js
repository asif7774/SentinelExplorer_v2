import React from 'react';
import UtilitiesListView from '../common/UtilitiesListView/UtilitiesListView';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const Utilities = () => {
    return (
        <DetailsBox
            subtitle="Utilities"
            subtitlelink="home"
            >
            <StatsWidgetChart
                title="dApps"
                statsnumbers="3"
                url="uilitiesdapp"
                tooltip="Total number of dApps since inception."
            />
            <div className="utilities-list">
                <UtilitiesListView
                    title="How to Host a dVPN Node"
                    description="For tech individuals who want a launch a dVPN node with their own hardware."
                    externalurl="https://kb.sentinel.co/dvpn/how-to-set-up-a-sentinel-dvpn-node/"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="Indigitus Router dVPN Hardware"
                    description="Launch a dVPN node on the Sentinel network with the Indigitus router."
                    externalurl="https://kb.sentinel.co/dvpn/the-indigitus-router/"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="HandyHost dVPN GUI"
                    description="HandyHost’s GUI walks you through how to launch a dVPN node and earn income."
                    externalurl="https://handyhost.computer/"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="dVPN Reward System"
                    description="Learn how you can be paid in $DVPN to offer a dVPN node on Sentinel’s network. "
                    externalurl="https://kb.sentinel.co/dvpn/how-does-the-dvpn-node-reward-system-work/"
                    className="link-tag"
                />
            </div>
        </DetailsBox>
    )
}

export default Utilities
