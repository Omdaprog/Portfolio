import React from 'react';

const Logo = React.forwardRef((props, svgRef) => {
  const logoStyles = {
    color: "#64ffda",
    width: 80,
    height: 80,
    fill: "none",
  };

  return (
    <svg
      width="210mm"
      height="297mm"
      viewBox="0 0 210 297"
      id="svg240"
      ref={svgRef}
      style={{ ...logoStyles, display: 'block' }} // Apply width, height, and fill
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1">
        <path
          d="m 100.17525,162.40691 c 0,-17.80646 0,-35.50708 0,-53.28708 3.38667,0 6.74688,0 10.18646,0 0,17.72708 0,35.48062 0,53.28708 -3.36021,0 -6.69396,0 -10.18646,0 z"
          style={{ fill: "#5afed8", strokeWidth: 0.264583 }}
        />
        <polygon
          points="540,241.9 282.3,390.6 282.3,688.2 539.9,836.9 797.6,688.2 797.6,390.6"
          style={{
            fill: "none",
            stroke: "#5afed8",
            strokeWidth: 30,
            strokeMiterlimit: 10,
            transform: "matrix(0.26458333,0,0,0.26458333,-37.593287,-6.9528783)"
          }}
        />
        <rect
          x="89.644836"
          y="109.11983"
          width="30.797501"
          height="7.7258334"
          style={{ fill: "#5afed8", strokeWidth: 0.264583 }}
        />
        <rect
          x="89.644836"
          y="154.68109"
          width="30.797501"
          height="7.7258334"
          style={{ fill: "#5afed8", strokeWidth: 0.264583 }}
        />
      </g>
    </svg>
  );
});

export default Logo;
