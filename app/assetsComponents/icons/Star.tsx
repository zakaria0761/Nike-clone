import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      fill="#FF6452"
      d="M10.075 1.242c.34-.825 1.51-.825 1.85 0L13.969 6.2a2 2 0 0 0 1.65 1.228l5.177.518c.857.086 1.212 1.142.58 1.728l-4.001 3.716a2 2 0 0 0-.596 1.88l1.152 5.437c.182.862-.758 1.521-1.506 1.057l-4.37-2.713a2 2 0 0 0-2.11 0l-4.37 2.713c-.748.464-1.688-.195-1.506-1.057l1.152-5.437a2 2 0 0 0-.596-1.88L.623 9.674c-.63-.586-.276-1.642.581-1.728l5.177-.518A2 2 0 0 0 8.031 6.2l2.044-4.958Z"
    />
  </svg>
);
export default SvgStar;
