// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 34"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.287 4.805c-1.055 2.96-1.946 6.062-2.193 9.205-.174 2.23.208 4.458.253 6.685.029 1.415.076 2.828-.102 4.235-.052.41-.219 1.634-.237 1.22-.016-.373.165-.92.226-1.258.464-2.574.69-5.158.935-7.76.29-3.062.84-6.09 1.601-9.07.258-1.007 1.186-3.976.807-3.01-.844 2.147-1.245 4.52-1.72 6.76a584.15 584.15 0 00-3.036 15.273 121.18 121.18 0 00-.747 4.621c-.028.192-.125.758-.134.564-.119-2.485-.006-5.004-.006-7.49 0-2.922-.073-5.855.01-8.776.018-.588.131-1.141.184-1.72.038-.427-.12.851-.15 1.28a27.368 27.368 0 00-.044 3.277c.01.197.116.05.178-.048.32-.51.515-1.128.671-1.703.662-2.433.976-4.995 1.29-7.492.123-.98.201-1.827 0-2.783-.073-.346-.293.299-.322.365-1.473 3.37-2.628 6.906-3.929 10.345a141.023 141.023 0 00-1.94 5.508c-.062.188-.19.756-.199.559-.038-.895.005-1.816.038-2.709.171-4.623.724-9.227.828-13.853.012-.534.009-1.987.14-.538.15 1.68.374 3.35.676 5.009.131.718.157 1.945.538 2.612.239.417.097-.96.097-1.44 0-.76.063-1.582-.146-2.322-.149-.531-.053 1.006-.043 1.085.086.635.295 1.398.178 2.042-.073.398-.539-.623-.688-1-.514-1.296-.952-2.67-1.709-3.852-.285-.445-.611-.851-.881-1.306-.377-.634-.82 1.174-.87 1.343-.42 1.424-.586 2.887-.775 4.353-.03.235-.09 1.264-.096.44-.014-1.832 0-3.695 0-5.507 0-.254-.041-1.622-.118-1.532-.331.384-.656 1.501-.656 2.01 0 .417-.148.434-.048-.043.13-.63.338-1.086.338-1.741 0-.528-.29-.943-.29-1.5 0-.53-.222-1.033-.194-1.595.02-.398.138-1.3.387-1.548"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */