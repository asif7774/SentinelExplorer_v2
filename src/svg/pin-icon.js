import * as React from 'react';

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
};

function Pin({size = 12}) {
  return (
    <svg
      className="pulse-svg"
      height={size}
      viewBox="0 0 50 50"
      style={pinStyle}
    >
      <circle
        className="circle first-circle"
        fill="#00B6FA"
        cx="25"
        cy="25"
        r="25"
      ></circle>
      <circle
        className="circle second-circle"
        fill="#00B6FA"
        cx="25"
        cy="25"
        r="25"
      ></circle>
      <circle
        className="circle third-circle"
        fill="#00B6FA"
        cx="25"
        cy="25"
        r="25"
      ></circle>
      <circle
        className="circle fourth-circle"
        fill="#00B6FA"
        cx="25"
        cy="25"
        r="25"
      ></circle>
    </svg>
  );
}

export default React.memo(Pin);
