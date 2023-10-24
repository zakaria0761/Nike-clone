import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Z"
    />
    <path
      fill="#FF6452"
      fillRule="evenodd"
      d="M11.089 6.185a.694.694 0 0 0 0 .893l2.014 2.29H5.556C5.249 9.368 5 9.651 5 10c0 .349.249.632.556.632h7.547l-2.014 2.29a.694.694 0 0 0 0 .893.51.51 0 0 0 .785 0l2.963-3.368a.694.694 0 0 0 0-.894l-2.963-3.368a.51.51 0 0 0-.785 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
