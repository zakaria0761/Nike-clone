import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbnailBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 506 505"
    {...props}
  >
    <rect width={505.626} height={502.15} fill="#C1C4DE" rx={30} />
    <mask
      id="thumbnail-background_svg__a"
      width={506}
      height={505}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <rect width={505.626} height={504.485} fill="#C1C4DE" rx={30} />
    </mask>
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeOpacity={0.8}
      strokeWidth={3}
      mask="url(#thumbnail-background_svg__a)"
    >
      <path d="M509.14 26.86c-21.55 51.605-66.929 134.513-95.684 183.444-3.601 6.129-7.988 12.056-11.345 18.266-5.301 9.805-9.014 24.845-7.646 35.428 3.199 24.73 36.579 46.457 61.166 58.109 17.355 8.224 32.482 19.651 51.793 24.889" />
      <path d="M478.708-11.68c-27.655 70.197-86.031 148.897-122.932 215.456-4.621 8.336-10.251 16.399-14.559 24.845-6.802 13.337-11.568 33.795-9.811 48.19 4.104 33.639 46.94 63.193 78.491 79.042 22.159 12.349 68.261 37.176 95.731 47.033" />
      <path d="M460.564-87.586c-41.286 99.638-94.217 185.995-149.306 280.47-6.899 11.832-15.303 23.277-21.735 35.267-10.155 18.93-17.27 47.968-14.648 68.401 6.128 47.749 70.078 89.699 117.181 112.194 33.25 15.88 81.256 45.335 118.251 55.449" />
    </g>
  </svg>
);
export default SvgThumbnailBackground;
