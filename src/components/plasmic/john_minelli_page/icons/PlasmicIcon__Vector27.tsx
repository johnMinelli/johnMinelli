// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.017 1.033c-.032.01.003.032.003.012 0-.002-.03.006-.009.004.01 0 .018-.027 0-.027-.014 0-.01-.01-.01-.022"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
