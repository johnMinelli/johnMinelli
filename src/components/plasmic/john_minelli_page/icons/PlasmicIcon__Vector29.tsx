// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 110"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.5 109L6 101.5l-3.5-10L1 78V65l1-13 1-12 3-17L9 9l2-8h1.5v108h-2z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
