import React, {Component} from 'react';
import {AutoComplete, Switch, Dropdown, Space} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  setTheme,
  setHandshakeEnableMetadata,
  setHandshakedisableMetadata,
  setReload,
  setAllNodesData,
  setV2RayData,
  setWireguardData,
  setActiveNode,
} from '../../../store/actions/mapActions';
import { Link } from 'react-router-dom';
import {SvgIcon} from '../../common';
import './Header.less';
import {CaretDownOutlined} from '@ant-design/icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      currentThemeState: undefined,
    };
  }

  currentThemeFn() {
    let htmlBody = document.getElementsByTagName('body')[0];
    htmlBody.classList.add('dark');
  }

  componentDidMount() {
    this.currentThemeFn();
  }
  handleToggle = () => {
    this.setState({isActive: !this.state.isActive});
  };
  handleThemeToggle = (status) => {
    let htmlBody = document.getElementsByTagName('body')[0];
    if (!status) {
      this.props.setTheme('light');
      localStorage.setItem('currentTheme', 'light');
      htmlBody.classList.remove('dark');
      htmlBody.classList.add('light');
    } else {
      this.props.setTheme('dark');
      localStorage.setItem('currentTheme', 'dark');
      htmlBody.classList.remove('light');
      htmlBody.classList.add('dark');
    }
  };

  applyNodesFilte = (filter) => {
    this.props.setReload(true);
    setTimeout(() => {
      if (filter === 'hns') {
        this.props.setHandshakeEnableMetadata();
      } else if (filter === 'v2ray') {
        this.props.setV2RayData();
      } else if (filter === 'wireguard') {
        this.props.setWireguardData();
      } else if (filter === 'allNodes') {
        this.props.setAllNodesData();
      }
    }, 500);
  };

  handlesearch = (data) => {
    const activeNoe = this.props.metadata.filter((node) => {
      return node.address === data;
    });

    this.props.setActiveNode(activeNoe[0]);
    this.props.history.push(`/dvpnnodes-details/${data}`);
  };
  render() {
    const isActive = this.state.isActive;
    return (
      <React.Fragment>
        <div className="main-header">
          <div className="header-inner">
            <nav className="header-nav">
              {this.props.isDataInitialized && (
                <div className={isActive ? 'header-logo' : 'header-logo show'}>
                  <Link to="/">
                    <SvgIcon
                      // name={
                      //   this.props.currentTheme === 'logo'
                      //     ? 'logo'
                      //     : 'logo_dark'
                      // }
                      name={'logo'}
                      viewbox="0 0 180.124 50.271"
                    />
                  </Link>
                </div>
              )}
              <div
                className={isActive ? 'hamburger' : 'hamburger show'}
                onClick={this.handleToggle}
              >
                <span className="hline"></span>
                <span className="hline"></span>
                <span className="hline"></span>
              </div>
              <div className={isActive ? 'header-menu dn-mob' : 'header-menu'}>
                {/* <NavLink to="/continents" className="menu-item">
                  Nodes
                </NavLink> */}
                {/* <NavLink to="/providers" className="menu-item">
                  Providers
                </NavLink> */}
                {/* <NavLink to="/validators" className="menu-item">
                  Validators
                </NavLink> */}
                <a
                  href="https://www.mintscan.io/sentinel"
                  rel="noreferrer"
                  target="_blank"
                  className="menu-item"
                >
                  Blockchain
                </a>
                <a
                  href="https://sentinel.co/nodes"
                  rel="noreferrer"
                  target="_blank"
                  className="menu-item"
                >
                  Run a Node
                </a>
                <a
                  href="https://github.com/sentinel-official"
                  rel="noreferrer"
                  target="_blank"
                  className="menu-item"
                >
                  Github
                </a>
              </div>
            </nav>
            <Dropdown
              // open
              className="header-dropdown"
              menu={{
                items: [
                  {
                    key: '1',
                    label: (
                      <div
                        tabIndex="-1"
                        className="options"
                        onClick={() => {
                          this.applyNodesFilte('allNodes');
                        }}
                      >
                        <span>All nodes</span>
                        <Switch
                          checked={this.props.filteredDataAs === 'allNodes'}
                          size="small"
                        />
                      </div>
                    ),
                  },
                  {
                    key: '2',
                    label: (
                      <div 
                        tabIndex="-1"
                        className="options"
                        onClick={() => {
                          this.applyNodesFilte('v2ray');
                        }}
                      >
                        <span>V2Ray</span>
                        <Switch
                          checked={this.props.filteredDataAs === 'v2ray'}
                          size="small"
                        />
                      </div>
                    ),
                  },
                  {
                    key: '3',
                    label: (
                      <div 
                        tabIndex="-1"
                        className="options"
                        onClick={() => {
                          this.applyNodesFilte('wireguard');
                        }}
                      >
                        <span>WireGuard</span>
                        <Switch
                          checked={this.props.filteredDataAs === 'wireguard'}
                          size="small"
                        />
                      </div>
                    ),
                  },
                  {
                    key: '4',
                    label: (
                      <div 
                        tabIndex="-1"
                        className="options"
                        onClick={() => {
                          this.applyNodesFilte('hns');
                        }}
                      >
                        <span>HNS Resolver</span>
                        <Switch
                          checked={this.props.filteredDataAs === 'hns'}
                          size="small"
                        />
                      </div>
                    ),
                  },
                ],
              }}
              placement="bottom"
              overlayClassName="header-menu-box"
            >
              <div>
                <Space>
                  Node View
                  <CaretDownOutlined />
                </Space>
              </div>
            </Dropdown>
            <div className="header-search">
              <SvgIcon
                className="search-icon"
                name="search"
                viewbox="0 0 17 16"
              />
              <AutoComplete
                style={{width: 280}}
                options={this.props.metadata.map((data) => {
                  return {value: data.address};
                })}
                placeholder={'Search for nodes..'}
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onSelect={this.handlesearch}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setTheme: state.setTheme,
    isDataInitialized: state.isDataInitialized,
    currentTheme: state.currentTheme,
    filteredDataAs: state.filteredDataAs,
    metadata: state.metadata,
  };
};
const HeaderWithRouter = withRouter(Header);
export default connect(mapStateToProps, {
  setTheme,
  setHandshakedisableMetadata,
  setHandshakeEnableMetadata,
  setReload,
  setAllNodesData,
  setActiveNode,
  setV2RayData,
  setWireguardData,
})(HeaderWithRouter);
