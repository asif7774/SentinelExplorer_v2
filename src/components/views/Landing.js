import React, {useEffect, useState} from 'react';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import StatsWidget from '../common/StatsWidget/StatsWidget';
import StatsWidgetChart from '../common/StatsWidgetChart/StatsWidgetChart';
import {useSelector} from 'react-redux';
import axios from 'axios';

const nodeT = {
  allNodes: 'All Nodes',
  v2ray: 'V2Ray Nodes',
  wireguard: 'WireGuard Nodes',
  hns: 'HSN Resolver Nodes',
};
const nodeTooltip = {
  allNodes: 'Total Number of active dVPN Nodes on the Network.',
  v2ray: 'Number of active V2Ray nodes on the Sentinel Network.',
  wireguard: 'Number of active Wireguard nodes hosted on the Sentinel Network.',
  hns: 'Number of Handshake Network Resolvers on the Sentinel Network.',
};

const getUniqueCitiesCount = (array) => {
  const cities = [];
  array.forEach((element) => {
    if (!cities.includes(element.location.city)) {
      cities.push(element.location.city);
    }
  });

  return cities.length;
};

const Landing = () => {
  const initData = useSelector((state) => state);
  const [totalNode, setTotalNode] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPrice, setCurrentPrice] = useState('NA');
  const [totalCountries, setTotalCountries] = useState(0);
  const [totalCities, setTotalCities] = useState(0);
  const [totalHNSResolver, setTotalHNSResolver] = useState(0);
  const [hubData, setHubData] = useState(null);
  const nodeType = useSelector((state) => state.filteredDataAs);

  const get24hrsData = async () => {
    try {
      const response = await axios
        .get(
          'https://api.explorer.sentinel.co/api/v1/statistics?method=CurrentSessionCount&status=STATUS_ACTIVE'
        )
        .then((res) => {
          return res.data.result;
        });
      if (response !== null && response !== undefined) {
        setHubData(response[0].value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const initFn = () => {
      if (initData.isDataInitialized) {
        const data = initData.metadata;

        setTotalNode(data.length);
        let countriesCount = new Set(data.map((o) => o.location.country));
        if (initData.coinGeckoData !== []) {
          if (initData.coinGeckoData.usd !== undefined) {
            console.log(initData);
            let current_price_cg = initData.coinGeckoData.usd;
            let formatted_current_price = current_price_cg.toFixed(5);
            setCurrentPrice(formatted_current_price);
          }
        }
        const totalCities = getUniqueCitiesCount(data);
        const HNSResolvers = data.filter((el) => {
          return el.handshake.enable;
        });
        setTotalHNSResolver(HNSResolvers.length);
        setTotalCities(totalCities);
        setTotalCountries(countriesCount.size);
        setLoading(false);
      }
    };
    initFn();
  }, [initData]);

  useEffect(() => {
    get24hrsData();
  }, []);
  useEffect(() => {
    if (hubData !== null && hubData !== undefined) {
      setLoading(false);
    }
  }, [hubData]);

  return (
    <>
      {!loading && (
        <DetailsBox>
          <StatsWidgetChart
            title="Bandwidth"
            statsnumbers="309,841"
            statspercents="42,730"
            tooltip="Total bandwidth shared and used across the network."
          />
          {/* <StatsWidget
            title="Active Sessions"
            statsnumbers={hubData}
            // statspercents="42,730"
            tooltip="Number of Active Sessions"
            // extenalurl={"https://www.mintscan.io/sentinel"}
          /> */}
          <StatsWidget
            title={`Market Price`}
            statsnumbers={`$ ${currentPrice}`}
            statspercents={`${
              initData.coinGeckoData?.usd_24h_change !== undefined
                ? initData.coinGeckoData?.usd_24h_change.toFixed(2)
                : 'NA'
            }`}
            tooltip="dVPN Price Data Provided by CoinGecko."
            extenalurl={'https://www.coingecko.com/en/coins/sentinel'}
            addPercentSign={true}
            extraText="Powered by CoinGecko"
          />
          <StatsWidget
            title="HNS Resolvers"
            statsnumbers={String(totalHNSResolver)}
            // statspercents="4.24"
            tooltip="Number of Handshake Network Resolvers on the Sentinel Network."
            url="/HNSResolvers"
          />
          {nodeType !== 'hns' && (
            <StatsWidget
              title={nodeT[nodeType]}
              statsnumbers={totalNode}
              // statspercents="4.24"
              tooltip={nodeTooltip[nodeType]}
              url="/continents"
            />
          )}
          {/* <StatsWidget
            title="DVPN Staked"
            statsnumbers="27.71M"
            statspercents="614,765,900.00"
            tooltip="Number of $DVPN staked, securing the network."
            url="/validators"
          /> */}
          <StatsWidget
            title="dVPN Node Cities"
            statsnumbers={`${totalCities} ${
              totalCities > 1 ? 'Cities' : 'City'
            }`}
            tooltip="Number of cities dVPN Nodes are currently hosted in."
            url="/cities"
          />
          <StatsWidget
            title="dVPN Node Countries"
            statsnumbers={`${totalCountries} ${
              totalCountries > 1 ? 'Countries' : 'Country'
            }`}
            tooltip="Number of Countries dVPN Nodes are Hosted in."
            // copyIcon={true}
            url="/countries"
          />
          {/* <StatsWidget
            title="Validators"
            statsnumbers={`${initData?.validatorsData.unjailed_validator_num} / ${initData?.validatorsData.total_validator_num}`}
            tooltip="Active validators / Total number of validators."
            extenalurl="https://www.mintscan.io/sentinel/validators"
          /> */}
        </DetailsBox>
      )}
    </>
  );
};

export default Landing;
