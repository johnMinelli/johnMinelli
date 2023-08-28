// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line41Icon(props: Line41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 297 84"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#RgAZtEDi2La)"}>
        <path d={"M38 42h221"} stroke={"currentColor"} strokeWidth={"7"}></path>
      </g>

      <defs>
        <filter
          id={"RgAZtEDi2La"}
          x={"0"}
          y={".5"}
          width={"297"}
          height={"83"}
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
            stdDeviation={"19"}
            result={"effect1_foregroundBlur_124_119"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Line41Icon;
/* prettier-ignore-end */
