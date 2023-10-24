import * as React from "react";
import type { SVGProps } from "react";
const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9.236.02c-.959.148-1.573.437-2.171 1.022-1.502 1.47-1.59 3.873-.21 5.74.11.15.464.543.787.875 1.023 1.054 2.434 2.226 4.491 3.73l.577.42.666-.492c2.055-1.524 3.423-2.66 4.37-3.634.74-.76 1.033-1.15 1.334-1.785.332-.7.444-1.201.442-1.977-.002-.768-.079-1.113-.402-1.804-.206-.44-.289-.557-.665-.946-.48-.496-.896-.773-1.437-.957-.905-.31-1.814-.263-2.648.133-.483.23-.733.415-1.23.914l-.434.434-.48-.482c-.533-.533-.955-.815-1.495-1C10.23.039 9.618-.04 9.236.02ZM7.712 13.547c-.599.053-1.459.202-2.06.357-.692.178-1.62.504-1.62.569 0 .08 2.349 7.33 2.39 7.378.02.021.254.001.522-.045.431-.074 1.03-.087 5.245-.114l4.759-.03.45-.126a4.784 4.784 0 0 0 1.469-.681c.163-.118 1.293-1.078 2.512-2.133 1.564-1.356 2.256-1.985 2.352-2.14.372-.604.358-1.235-.038-1.688a1.383 1.383 0 0 0-.404-.318c-.246-.103-.66-.11-.882-.012-.091.04-.84.502-1.664 1.027-1.671 1.064-2.202 1.355-2.898 1.589-1.137.382-1.495.41-5.386.41l-3.27.002v-1.443l2.403-.014c2.324-.014 2.41-.018 2.613-.115.312-.15.496-.33.637-.626a1.36 1.36 0 0 0-.321-1.588c-.359-.316-.344-.315-3.5-.307-1.562.003-3.051.025-3.309.048Zm-6.387 2.106-1.323.612-.001 3.868L0 24l.504-.183c.277-.1 1.39-.494 2.473-.873 1.083-.38 1.987-.706 2.01-.726.042-.038-2.253-7.184-2.307-7.18-.017.001-.627.278-1.355.615Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSupport;
