// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle75Icon(props: Rectangle75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 773 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#4uCshpahfSMia)"}>
        <path
          d={"M12.68 0h746.808l12.68 41.996H0L12.68 0z"}
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"4uCshpahfSMia"}
          x={"-30.4"}
          y={"0"}
          width={"802.567"}
          height={"42.996"}
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

          <feGaussianBlur stdDeviation={"4.6"}></feGaussianBlur>

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
            result={"effect1_innerShadow_403_55"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1"}></feOffset>

          <feGaussianBlur stdDeviation={".5"}></feGaussianBlur>

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
            in2={"effect1_innerShadow_403_55"}
            result={"effect2_innerShadow_403_55"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"-45"}></feOffset>

          <feGaussianBlur stdDeviation={"15.2"}></feGaussianBlur>

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
            in2={"effect2_innerShadow_403_55"}
            result={"effect3_innerShadow_403_55"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle75Icon;
/* prettier-ignore-end */
