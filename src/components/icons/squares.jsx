import React from "react";

const squares = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H18.9621V18.9538H0V0ZM21.0379 0H40V18.9538H21.0379V0ZM0 21.0379H18.9621V40H0V21.0379ZM21.0379 21.0379H40V40H21.0379"
        fill="#214B6B"
      />
    </svg>
  );
};

export default squares;
