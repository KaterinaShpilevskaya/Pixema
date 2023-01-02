import React from "react";

export const ShareIcon = ({ width = "16", height = "18" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3.54545"
        cy="8.63627"
        r="2.54545"
        stroke="#AFB2B6"
        stroke-width="2"
      />
      <circle
        cx="12.4544"
        cy="3.54545"
        r="2.54545"
        stroke="#AFB2B6"
        stroke-width="2"
      />
      <circle
        cx="12.4544"
        cy="13.7273"
        r="2.54545"
        stroke="#AFB2B6"
        stroke-width="2"
      />
      <path
        d="M10 13L6.09106 10.5455M6.09106 7.5L10 5"
        stroke="#AFB2B6"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
