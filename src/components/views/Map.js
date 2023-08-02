import React from 'react';
import ReactMapboxGl, {
  ZoomControl,
  Feature,
  Layer,
} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {getInitalData, coinGeckoDataInt} from '../../store/store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  setStation,
  resetStation,
  setActiveNode,
  setReload,
  setTheme,
  setHandshakedisableMetadata,
  setHandshakeEnableMetadata,
} from '../../store/actions/mapActions';
// import Loader from '../common/Loader/Loader';
import './CommonView.less';
import {svg} from '../../svg/dot-icon';
const {token, styles} = require('../../map-config.json');

const Mapbox = ReactMapboxGl({
  maxZoom: 14,
  minZoom: 2,
  accessToken: token,
  renderWorldCopies: false,
  interactive: true,
  touchZoomRotate: false,
  doubleClickZoom:false
});

const mapStyle = {
  height: '100vh',
  width: '100vw',
};

const flyToOptions = {
  speed: 0.8,
};

// Define layout to use in Layer component
const layoutLayer = {'icon-image': 'dot'};

const image = new Image();
image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg);
const images = ['dot', image];

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      fitBounds: undefined,
      center: props.mapCenter,
      zoom: [2.5],
      station: props.station,
      stations: {},
      loadingSt: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getInitalData().then(() => {
        this.setState(({stations}) => ({
          stations: {
            ...stations,
            ...this.props.metadata,
          },
        }));
      });
      this.props.coinGeckoDataInt().then(() => {});
    }, 2500);
  }

  formatBytes = (bytes, decimals = 0) => {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      'bps',
      'kbps',
      'mbps',
      'gbps',
      'tbps',
      'pbps',
      'ebps',
      'zbps',
      'ybps',
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  onDrag = () => {
    if (this.props.station) {
      this.setState({station: undefined});
      this.props.resetStation();
      this.props.history.push(`/`);
    }
  };

  onToggleHover(cursor, el) {
    if (el.map !== undefined) {
      el.map.getCanvas().style.cursor = cursor;
    }
  }

  markerClick = (station, { feature }) => {
    this.setState({
      station,
    });
    this.props.setStation(station);
    this.props.setActiveNode(station);
    if (station.location.city) {
      this.props.history.push(`/cities/${station.location.city}`);
    } else {
      this.props.history.push(`/dvpnnodes-details/${station.address}`);
    }
  };

  onStyleLoad = (map) => {
    const {onStyleLoad} = this.props;
    return onStyleLoad && onStyleLoad(map.onStyleLoad);
  };

  render() {
    const {fitBounds, stations} = this.state;

    const loadLayer = () => {
      return (
        <>
          <Layer type="symbol" id="marker" layout={layoutLayer} images={images}>
            {Object.keys(stations).map((stationK, index) => {
              return (
                <Feature
                  key={index}
                  onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                  onMouseLeave={this.onToggleHover.bind(this, '')}
                  onClick={this.markerClick.bind(this, stations[stationK])}
                  coordinates={stations[stationK].position}
                />
              );
            })}
          </Layer>
        </>
      );
    };
    return (
      <>
        {/* {!this.props.isDataInitialized && <Loader />} */}

        <Mapbox
          con
          ref={this.mapRef}
          style={styles.custom}
          onStyleLoad={this.onStyleLoad(this)}
          fitBounds={fitBounds}
          // maxBounds={US_BOUNDS}
          center={this.props.mapCenter}
          zoom={this.props.mapZoom}
          onDrag={this.onDrag}
          containerStyle={mapStyle}
          flyToOptions={flyToOptions}
          renderChildrenInPortal={true}
        >
          {this.props.isDataInitialized && loadLayer()}
          <ZoomControl position={'bottom-right'} />
        </Mapbox>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getInitalData: state.getInitalData,
    coinGeckoDataInt: state.coinGeckoDataInt,

    isDataInitialized: state.isDataInitialized,
    mapCenter: state.mapCenter,
    mapZoom: state.mapZoom,
    metadata: state.metadata,
    selectedNode: state.selectedNode,
    station: state.station,
    reload: state.reload,
    currentTheme: state.currentTheme,
  };
};
const MapnWithRouter = withRouter(Map);
export default connect(mapStateToProps, {
  setStation,
  setActiveNode,
  resetStation,
  getInitalData,
  coinGeckoDataInt,
  setReload,
  setTheme,
  setHandshakedisableMetadata,
  setHandshakeEnableMetadata,
})(MapnWithRouter);
