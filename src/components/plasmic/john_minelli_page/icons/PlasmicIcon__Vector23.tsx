// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.686 7.984c.043-1.325-.119-2.641-.344-3.946-.064-.374-.08-1.053-.297-1.397-.14-.222.077-.459.214-.641"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
