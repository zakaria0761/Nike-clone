import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={24} fill="#E6E8FF" />
    <path
      stroke="#25282B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 30 6-6-6-6"
    />
  </svg>
);
export default SvgChevronRight;
