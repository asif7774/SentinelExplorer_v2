import {CONTINENT_MAP} from '../utility/continents';

const getContinentName = (contryName) => {
  for (var i = 0; i < CONTINENT_MAP.length; i++) {
    for (var j = 0; j < CONTINENT_MAP[i].countries.length; j++) {
      if (CONTINENT_MAP[i].countries[j] === contryName)
        return CONTINENT_MAP[i].continent;
    }
  }
  return '';
};

const defaultState = {
  data: [],
  metadata: [], // It should be empty during store init
  filteredDataAs: '',
  isDataInitialized: false,
  reload: false, // You can add additional property to denote, that data is not fetched for the first time,
  selectedNode: null,
  mapCenter: [-97.9222112121185, 39.3812661305678],
  mapZoom: [2.5],
  station: undefined,
  coinGeckoData: [],
  validatorsData: [],
  currentTheme: undefined,
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DATA_INITIALIZED':
      if (state.data.length !== 0) {
        return {
          ...state,
          station: undefined,
          selectedNode: null,
          mapCenter: [-97.9222112121185, 39.3812661305678],
          mapZoom: [2.5],
        };
      }
      const modifiedData = action.metadata.map((el, ind) => {
        if (el.location) {
          const continent = getContinentName(el.location.country);
          return {
            ...el,
            position: [el.location.longitude, el.location.latitude],
            location: {...el.location, continent},
          };
        }
      });
      const filterData = modifiedData.filter((el) => {
        return el;
      });

      return {
        ...state,
        data: filterData,
        metadata: filterData,
        filteredDataAs: 'allNodes',
        isDataInitialized: true,
      };
    case 'SET_ACTIVE_NODE':
      return {
        ...state,
        selectedNode: action.payload.address,
        mapCenter: action.payload.position,
        station: action.payload,
        mapZoom: [11],
      };
    case 'CG_DATA_INITIALIZED':
      return {
        ...state,
        coinGeckoData: action.coinGeckoData,
      };
    case 'VALIDATORS_DATA_INITIALIZED':
      return {
        ...state,
        isDataInitialized: true,
        validatorsData: action.validatorsData,
      };
    case 'SET_ACTIVE_STATION':
      return {
        ...state,
        station: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        currentTheme: action.payload,
      };
    case 'RESET_STATION':
      return {
        ...state,
        station: undefined,
        selectedNode: null,
      };
    case 'RESET_MAPZOOM':
      return {
        ...state,
        mapZoom: [2.5],
      };
    case 'SET_HANDSHAK_ENABLE_DATA':
      const enableMetadata = state.data.filter((el) => {
        return el.handshake.enable;
      });

      return {
        ...state,
        station: undefined,
        metadata: enableMetadata,
        filteredDataAs: 'hns',
        selectedNode: null,
        isDataInitialized: false,
        mapCenter: [-97.9222112121185, 39.3812661305678],
        mapZoom: [2.5],
        reload: false,
      };
    case 'SET_HANDSHAK_DISABLE_DATA':
      const disableMetadata = state.data.filter((el) => {
        return !el.handshake.enable;
      });

      return {
        ...state,
        station: undefined,
        metadata: disableMetadata,
        selectedNode: null,
        isDataInitialized: false,
        mapCenter: [-97.9222112121185, 39.3812661305678],
        mapZoom: [2.5],
        reload: false,
      };
    case 'SET_ALL_NODES_DATA':
      return {
        ...state,
        station: undefined,
        metadata: state.data,
        selectedNode: null,
        filteredDataAs: 'allNodes',
        isDataInitialized: false,
        mapCenter: [-97.9222112121185, 39.3812661305678],
        mapZoom: [2.5],
        reload: false,
      };
    case 'SET_V2RAY_DATA':
      const v2RayFilteredData = state.data.filter((el) => {
        return el.type === 2;
      });

      return {
        ...state,
        station: undefined,
        metadata: v2RayFilteredData,
        selectedNode: null,
        filteredDataAs: 'v2ray',
        isDataInitialized: false,
        mapCenter: [-97.9222112121185, 39.3812661305678],
        mapZoom: [2.5],
        reload: false,
      };
    case 'SET_WIREGUARD_DATA':
      const wireguardFilteredData = state.data.filter((el) => {
        return el.type !== 2;
      });

      return {
        ...state,
        station: undefined,
        metadata: wireguardFilteredData,
        selectedNode: null,
        filteredDataAs: 'wireguard',
        isDataInitialized: false,
        mapCenter: [-97.9222112121185, 39.3812661305678],
        mapZoom: [2.5],
        reload: false,
      };
    case 'SET_RELOAD':
      return {
        ...state,
        reload: action.payload,
        station: undefined,
        selectedNode: null,
      };
    default:
      return state;
  }
}
export default rootReducer;
