// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
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
          "M3.122 15.68c-.079.093-.478.7-.333.574.163-.14.3-.342.451-.5.299-.31.476-.788.565-1.187a4.49 4.49 0 00.091-1.016c0-.216.123-.348.236-.526.034-.053-.234.943-.386 1.193-.298.487-.254 1.001-.452 1.537a4.19 4.19 0 00-.269 1.424c0 .152-.096 1.078-.096.564 0-.674.078-1.426.344-2.053.134-.317.404-.617.516-.924.32-.883.494-1.608.494-2.569 0-.378-.041-.781.005-1.155.072-.57.669-.886.79-1.403.12-.508.269-.879.269-1.408 0-.321-.05-.672.075-.967.152-.36.118-.964.118-1.354 0-.507.024-1.043.172-1.526.102-.33.119-.74.119-1.086 0-.34.104-.535.188-.827.035-.125.672-.614.682-.43.034.606-.07 1.236-.107 1.838-.133 2.095-.254 4.271-.86 6.292-.896 2.986-1.838 5.922-1.838 9.082 0 1.101-.363 2.289-.075 3.37.139.52.033 1.047.268 1.552.228.487.398-.173.463-.403.34-1.213.497-2.497.687-3.74.216-1.407.395-2.82.635-4.224.13-.762.435-1.483.537-2.251.02-.157.067-.602.129-.457.07.165-.03.359-.054.537-.12.889-.254 1.776-.365 2.666-.268 2.145-.415 4.3-.522 6.46-.05 1.008-.097 2.024.113 3.02.05.237.414 1.266.409 1.257-.193-.338-.764-.96-1.161-.742-.353.194-.64.511-.967.747-.158.114-.502.604-.667.645-.006.001-.01-.503-.01-.516 0-.524-.02-1.053.043-1.575.05-.418.53-2.311-.011-.956-.404 1.01-.772 2.016-1.145 3.036-.158.433-.28.755-.145 1.16.06.182.181.399.409.243.537-.37 1.029-.948 1.499-1.392.801-.756 1.436-1.536 2.058-2.434"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */