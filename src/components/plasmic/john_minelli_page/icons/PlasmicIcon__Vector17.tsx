// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.32 2c-.197.548-.677 1.06-.677 1.644 0 .447-.097.934-.097 1.408 0 .506-.18 1.126-.365 1.59-.226.566-.184 1.337-.505 1.86-.225.365-.387 1.207-.387 1.623 0 .388-.29.647-.29 1.016 0 .414-.181.673-.334 1.02-.108.25-.134.73-.15 1.006-.015.256-.18.488-.194.73-.03.58-.096 1.126-.096 1.72 0 .572-.194 1.105-.194 1.66 0 .533-.193.98-.193 1.505 0 1.05-.774 1.997-.774 3.069 0 .998.208 2.26-.247 3.17-.233.465-.141 1.035-.258 1.548C2.287 27.759 2 28.894 2 30.148"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
