function setStation(data) {
  return {
    type: 'SET_ACTIVE_STATION',
    payload: data,
  };
}

function setTheme(data) {
  return {
    type: 'SET_THEME',
    payload: data,
  };
}
function resetStation() {
  return {
    type: 'RESET_STATION',
  };
}
function resetMapZoom() {
  return {
    type: 'RESET_MAPZOOM',
  };
}

function setActiveNode(data) {
  return {
    type: 'SET_ACTIVE_NODE',
    payload: data,
  };
}

function setHandshakeEnableMetadata() {
  return {
    type: 'SET_HANDSHAK_ENABLE_DATA',
    currentPath: window.location.href,
  };
}

function setHandshakedisableMetadata() {
  return {
    type: 'SET_HANDSHAK_DISABLE_DATA',
    currentPath: window.location.href,
  };
}

function setAllNodesData() {
  return {
    type: 'SET_ALL_NODES_DATA',
    currentPath: window.location.href,
  };
}
function setV2RayData() {
  return {
    type: 'SET_V2RAY_DATA',
    currentPath: window.location.href,
  };
}

function setWireguardData() {
  return {
    type: 'SET_WIREGUARD_DATA',
    currentPath: window.location.href,
  };
}

function setReload(data) {
  return {
    type: 'SET_RELOAD',
    payload: data,
  };
}

export {
  setStation,
  resetStation,
  setActiveNode,
  setHandshakeEnableMetadata,
  setHandshakedisableMetadata,
  setReload,
  setTheme,
  setAllNodesData,
  setV2RayData,
  setWireguardData,
  resetMapZoom,
};
