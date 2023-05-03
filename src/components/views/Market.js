import React from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';

const Market = () => {
    return (
        <DetailsBox
            subtitle="Market"
            subtitlelink="home"
            >
            <StatsWidgetChart
                title="Market Price"
                statsnumbers="0.50"
                statspercents="27.34"
                tooltip="Data provided by CoinGecko."
                externalurl="https://www.coingecko.com/en/coins/sentinel"
            />
            <StatsWidget
                title="Market Cap"
                statsnumbers="240M"
                tooltip="Data provided by CoinGecko."
                extenalurl="https://www.coingecko.com/en/coins/sentinel"
            />
            <StatsWidget
                title="Volume"
                statsnumbers="Volume"
                tooltip="Data provided by CoinGecko."
                extenalurl="https://www.coingecko.com/en/coins/sentinel"
            />
            <StatsWidget
                title="Circulating Supply"
                statsnumbers="11.8B"
                tooltip="Data provided by CoinGecko."
                extenalurl="https://www.coingecko.com/en/coins/sentinel"
            />
            <StatsWidget
                title="Max Supply"
                statsnumbers="49B"
                tooltip="The time until max supply depends on the amount of DVPN staked since inception. For example, 80% of DVPN staked will take a
                longer period of time to reach max supply compared to 100% of DVPN staked."
                extenalurl="https://www.coingecko.com/en/coins/sentinel"
            />
        </DetailsBox>
    )
}

export default Market
