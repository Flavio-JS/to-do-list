import { type SVGProps } from "react";

const ButtonMore = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox={props.viewBox ?? "0 0 24 24"}
      fill={props.fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4Z"
        stroke="#F25551"
        strokeWidth="2"
      />
      <path
        d="M17.3332 12H6.6665M11.9998 6.66666V17.3333"
        stroke="#F25551"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default ButtonMore;
