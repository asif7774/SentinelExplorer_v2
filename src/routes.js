import Landing from './components/views/Landing';
import Nodes from './components/views/Nodes';
import Providers from './components/views/Providers';
import Validators from './components/views/Validators';
import Blockchain from './components/views/Blockchain';
import BlockchainDetails from './components/views/BlockchainDetails';
import Governance from './components/views/Governance';
import Market from './components/views/Market';
import Utilities from './components/views/Utilities';
import AllNodes from './components/views/AllNodes';
import DvpnnodesCountry from './components/views/DvpnnodesCountry';
import DvpnnodesDetails from './components/views/DvpnnodesDetails';
import CountryDvpnnodesList from './components/views/CountryDvpnnodesList';
import ValidatorsList from './components/views/ValidatorsList';
import ValidatorsDetails from './components/views/ValidatorsDetails';
import UtilitiesDapp from './components/views/Utilitiesdapp';
import Continents from './components/views/Continents';
// import ContinentsNodes from './components/views/ContinentsNodes';
import HNSResolversNodes from './components/views/HNSResolverNodes';
// import CountryNodes from './components/views/CountryNodes';
import DvpnnodesCities from './components/views/DvpnNodesCities';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/countries',
    component: DvpnnodesCountry,
  },
  {
    path: 'countries/:countryCode/nodelist',
    component: Nodes,
  },
  {
    path: '/countries/:countryCode',
    component: CountryDvpnnodesList,
  },
  {
    path: '/cities/:city',
    component: AllNodes,
  },
  {
    path: '/cities',
    component: DvpnnodesCities,
  },
  {
    path: '/country/:country',
    component: DvpnnodesCities,
  },
  {
    path: '/allnodes',
    component: AllNodes,
  },
  {
    path: '/continents',
    component: Continents,
  },

  {
    path: '/continent/:continent',
    component: DvpnnodesCountry,
  },

  {
    path: '/HNSResolvers',
    component: HNSResolversNodes,
  },

  {
    path: '/dvpnnodes-details/:nodeId',
    component: DvpnnodesDetails,
  },
  {
    path: '/providers',
    component: Providers,
  },
  {
    path: '/validators',
    component: Validators,
  },
  {
    path: '/blockchain',
    component: Blockchain,
  },
  {
    path: '/blockchain-details',
    component: BlockchainDetails,
  },
  {
    path: '/governance',
    component: Governance,
  },
  {
    path: '/market',
    component: Market,
  },
  {
    path: '/utilities',
    component: Utilities,
  },

  {
    path: '/validatorlist',
    component: ValidatorsList,
  },
  {
    path: '/validatordetails',
    component: ValidatorsDetails,
  },
  {
    path: '/uilitiesdapp',
    component: UtilitiesDapp,
  },
];

export default routes;
