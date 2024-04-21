// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle71Icon(props: Rectangle71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 552 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#PyVl152S3sQta)"}>
        <path
          d={"M9.064 0h533.872L552 31H0L9.064 0z"}
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"PyVl152S3sQta"}
          x={"-23"}
          y={"0"}
          width={"575"}
          height={"32"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1"}></feOffset>

          <feGaussianBlur stdDeviation={"5.45"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.94902 0 0 0 0 0.792157 0 0 0 0 0.615686 0 0 0 1 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"plus-darker"}
            in2={"shape"}
            result={"effect1_innerShadow_402_51"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1"}></feOffset>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_402_51"}
            result={"effect2_innerShadow_402_51"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"-23"}></feOffset>

          <feGaussianBlur stdDeviation={"12.5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect2_innerShadow_402_51"}
            result={"effect3_innerShadow_402_51"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle71Icon;
/* prettier-ignore-end */
