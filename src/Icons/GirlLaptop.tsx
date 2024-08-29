import { SVGProps } from "react";

const GirlLaptop = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "517"}
      height={props.height ?? "487"}
      viewBox={props.viewBox ?? "0 0 517 487"}
      fill={props.fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="517"
        height="487"
        transform="matrix(-1 0 0 1 517 0)"
        fill="url(#pattern0_107_592)"
      />
      <defs>
        <pattern
          id="pattern0_107_592"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_107_592"
            transform="matrix(0.0005 0 0 0.000530801 0 -0.0308008)"
          />
        </pattern>
        <image
          id="image0_107_592"
          width="2000"
          height="2000"
        />
      </defs>
    </svg>
  );
};

export default GirlLaptop;