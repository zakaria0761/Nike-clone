import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyrightSign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.688 16.096c-1.11 0-2.112-.245-3.008-.736a5.48 5.48 0 0 1-2.096-2.032c-.501-.875-.752-1.85-.752-2.928 0-1.077.25-2.048.752-2.912A5.415 5.415 0 0 1 7.696 5.44c.896-.49 1.899-.736 3.008-.736.832 0 1.6.139 2.304.416A4.776 4.776 0 0 1 14.8 6.336l-.752.752c-.875-.885-1.979-1.328-3.312-1.328-.885 0-1.69.203-2.416.608a4.501 4.501 0 0 0-1.712 1.664C6.203 8.736 6 9.525 6 10.4c0 .875.203 1.664.608 2.368a4.501 4.501 0 0 0 1.712 1.664c.725.405 1.53.608 2.416.608 1.344 0 2.448-.448 3.312-1.344l.752.752a4.912 4.912 0 0 1-1.808 1.232 6.232 6.232 0 0 1-2.304.416Z"
    />
    <circle cx={10} cy={10} r={9.5} stroke="#fff" />
  </svg>
);
export default SvgCopyrightSign;
