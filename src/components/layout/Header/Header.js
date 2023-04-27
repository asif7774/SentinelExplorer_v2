import React, {Component} from 'react';
import {AutoComplete, Checkbox, Switch, Tooltip} from 'antd';
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
import {Link, NavLink} from 'react-router-dom';
import {SvgIcon} from '../../common';
import './Header.less';
import {Button, Dropdown, Space} from 'antd';
import {CaretDownOutlined} from '@ant-design/icons';

const options = [
  {value: 'Burns Bay Road'},
  {value: 'Downing Street'},
  {value: 'Wall Street'},
  {value: 'Wall Street'},
  {value: 'Wall Street'},
  {value: 'Wall Street'},
];

// const Horncontent = () => {
//   return <div></div>;
// };

// const FeedbackHorn = () => {
//   return (
//     <div className="bullhorn-header">
//       <Popover content={Horncontent} trigger="click">
//         <SvgIcon name="horn" viewbox="0 0 19.826 19.448" />
//       </Popover>
//     </div>
//   );
// };

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      currentThemeState: undefined,
    };
  }

  currentThemeFn() {
    let isLocalStorage =
        'localStorage' in window && window['localStorage'] !== null,
      currentTheme;
    let htmlBody = document.getElementsByTagName('body')[0];
    htmlBody.classList.add('dark');
    // if (isLocalStorage && localStorage.getItem('currentTheme')) {
    //   currentTheme = localStorage.getItem('currentTheme');
    //   if (currentTheme === 'light') {
    //     this.setState({
    //       currentThemeState: false,
    //     });
    //     htmlBody.classList.add('light');
    //     htmlBody.classList.remove('dark');
    //     this.props.setTheme('light');
    //   } else {
    //     this.setState({
    //       currentThemeState: true,
    //     });
    //     htmlBody.classList.remove('light');
    //     htmlBody.classList.add('dark');
    //     this.props.setTheme('dark');
    //   }
    // } else {
    //   localStorage.setItem('currentTheme', 'light');
    //   this.props.setTheme('light');
    //   this.setState({
    //     currentThemeState: false,
    //   });
    //   htmlBody.classList.add('light');
    // }
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

                {/* <NavLink to="/governance" className="menu-item">
                  Governance
                </NavLink>
                <NavLink to="/market" className="menu-item">
                  Market
                </NavLink>
                <NavLink to="/utilities" className="menu-item">
                  Utilities
                </NavLink> */}
              </div>
            </nav>
            {/* <FeedbackHorn /> */}
            <Dropdown
              // open
              className="header-dropdown"
              menu={{
                items: [
                  {
                    key: '1',
                    label: (
                      <button
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
                      </button>
                    ),
                  },
                  {
                    key: '2',
                    label: (
                      <button
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
                      </button>
                    ),
                  },
                  {
                    key: '3',
                    label: (
                      <button
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
                      </button>
                    ),
                  },
                  {
                    key: '4',
                    label: (
                      <button
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
                      </button>
                    ),
                  },
                ],
              }}
              placement="bottom"
              overlayClassName="header-menu-box"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Node View
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* <Checkbox id="handshake-change" /> */}
            {/* {this.props.isDataInitialized && (
              <Tooltip
                title={`Switch to ${
                  this.props.currentTheme !== 'light' ? 'light' : 'dark'
                } mode.`}
              >
                <Switch
                  className="theme_switch"
                  defaultChecked={this.state.currentThemeState}
                  onChange={this.handleThemeToggle}
                  checkedChildren={
                    <SvgIcon
                      className="light"
                      name="light_mode"
                      viewbox="0 0 4000 4000"
                    />
                  }
                  unCheckedChildren={
                    <SvgIcon
                      className="dark"
                      name="dark_mode"
                      viewbox="0 0 4000 4000"
                    />
                  }
                />
              </Tooltip>
            )} */}
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