import React from 'react';
import UtilitiesListView from '../common/UtilitiesListView/UtilitiesListView';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const UtilitiesDapp = () => {
    return (
        <DetailsBox
            subtitle="dApps"
            subtitlelink="utilities"
            >
            <StatsWidgetChart
                title="Cumulative Downloads"
                statsnumbers="750,000"
                tooltip="Total number of downloads across all applications tying into the Sentinel network."
            />
            <div className="utilities-list">
                <UtilitiesListView
                    title="Exidio dVPN"
                    description="A Decentralized blockchain VPN. Exidio dVPN is rewriting the true definition of what it means to be a VPN."
                    externalurl="https://dvpn.exidio.co/"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="Sentinel dVPN"
                    description="Connect directly to dVPN nodes across the world and pay for the bandwidth used with $DVPN."
                    externalurl="https://play.google.com/store/apps/details?id=co.sentinel.dvpn"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="Velocity VPN"
                    description="Velocity VPN brings you ultra fast VPN servers. Powered by the secure Sentinel decentralized VPN protocol, our service gives you an edge when it comes to your
                    online privacy."
                    externalurl="https://play.google.com/store/apps/details?id=vpn.proxy.velocity"
                    className="link-tag"
                />
                <UtilitiesListView
                    title="DVPN Casino"
                    description="Tortuga Labs bring you a casino where you can use and win $DVPN."
                    externalurl="https://dvpn.casino/"
                    className="link-tag"
                />
            </div>
        </DetailsBox>
    )
}

export default UtilitiesDapp
