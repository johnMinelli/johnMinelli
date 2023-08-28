// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line44Icon(props: Line44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 247 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#fLO3WqEwjqa)"}>
        <path d={"M13 14h221"} stroke={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"fLO3WqEwjqa"}
          x={"0"}
          y={".5"}
          width={"247"}
          height={"27"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"6.5"}
            result={"effect1_foregroundBlur_125_146"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Line44Icon;
/* prettier-ignore-end */
