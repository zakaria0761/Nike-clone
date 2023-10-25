import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle
      cx={24}
      cy={24}
      r={24}
      fill="#F4F5FF"
      transform="rotate(180 24 24)"
    />
    <path
      stroke="#BABABA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m27 18-6 6 6 6"
    />
  </svg>
);
export default SvgChevronLeft;
