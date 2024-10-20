import { type SVGProps } from "react";

const CheckedBoxRainbow = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "26"}
      height={props.height ?? "26"}
      viewBox={props.viewBox ?? "0 0 26 26"}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 21V5C1 2.79086 2.79086 1 5 1H21C23.2091 1 25 2.79086 25 5V21C25 23.2091 23.2091 25 21 25H5C2.79086 25 1 23.2091 1 21Z"
        stroke="url(#paint0_linear_155_126)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M20.875 5.875L11.125 20.125L5.5 12.625"
        stroke="url(#paint1_linear_155_126)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_155_126"
          x1="13"
          y1="1"
          x2="13"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#632329" />
          <stop offset="0.49648" stopColor="#F25551" />
          <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_155_126"
          x1="13.1875"
          y1="5.875"
          x2="13.1875"
          y2="20.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#632329" />
          <stop offset="0.49648" stopColor="#F25551" />
          <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckedBoxRainbow;
