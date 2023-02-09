import { SVGProps } from "react";

const Setinha = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "32"}
      height={props.height ?? "32"}
      viewBox={props.viewBox ?? "0 0 32 32"}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M12 6L22 16L12 26"
          stroke="#FEEDE1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default Setinha;
