// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XLogo2023OriginalsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XLogo2023OriginalsvgIcon(props: XLogo2023OriginalsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 300 300.251"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M178.57 127.15L290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59H300M36.01 19.54h40.65l187.13 262.13h-40.66"
        }
      ></path>
    </svg>
  );
}

export default XLogo2023OriginalsvgIcon;
/* prettier-ignore-end */
