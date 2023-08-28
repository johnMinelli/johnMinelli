// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 31"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.705 2c-.294.589-.378 1.196-.625 1.781-.216.512-.149 1.042-.336 1.567-.113.317-.094.678-.218.998-.224.576-.44 1.147-.637 1.737-.23.69-.178 1.368-.178 2.094 0 .888-.009 1.689-.396 2.509-.254.539-.037 1.156-.277 1.706-.11.25-.04.625-.04.894 0 .402-.101.757-.138 1.16a2.83 2.83 0 01-.25.973c-.138.297 0 .702-.094 1.021-.153.514-.21 1.17-.23 1.71-.025.66-.071 1.306-.071 1.971 0 1.279.082 2.502-.499 3.633-.176.343-.234.708-.36 1.065-.064.181-.214.316-.265.51-.078.294-.087.708-.087 1.014 0 .092-.03.475.075.197.181-.483.366-1.045.479-1.551.065-.295.158-.645.158-.946 0-.338.185.238.214.289.1.174.142.477.142.673 0 .29-.071.57-.071.85 0 .292.165 1.383-.071 1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
