// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.006 2.405c0 1.183.082 2.416-.04 3.594-.15 1.456-.413 2.885-.617 4.33-.088.623-.317 1.196-.336 1.836-.019.599-.02 1.206.011 1.804.044.849.064 1.562.27 2.371.238.938.545 1.872.748 2.818.203.951.13 2.01.102 2.976a59.497 59.497 0 01-.447 5.774c-.123.981-.095 2.082-.475 3.008-.278.678-.242 1.488-.158 2.2.118.993.932.259 1.266-.193.51-.69.846-1.466 1.132-2.284.25-.714.38-1.468.65-2.168.169-.44.307-.89.403-1.346.198-.939.412-1.927.412-2.89 0-.346.157-.72.269-1.044.188-.546.267-1.137.443-1.694.285-.904.57-1.82.815-2.735.138-.513.353-1.008.467-1.524.032-.14.134-.208.143-.372.016-.314.11-.621.21-.918.08-.243.056-.463.079-.712.02-.222.206-.402.25-.633.084-.447.067-.901.157-1.354.1-.5.127-1 .301-1.48.216-.594.684-1.35.713-1.995.036-.829.213-1.633.213-2.47 0-.34.072-.671.072-1.013 0-.468.285-.888.285-1.361 0-.241.194-.495.269-.728.077-.24.213-.441.285-.673.087-.285.302-1.175.15-1.44-.191-.335-1.72.382-1.951.454-.61.192-1.219.361-1.848.464-.779.126-2.413.028-2.858.807-.096.169-.035.507-.032.689.01.473.167.852.321 1.29.43 1.225.507 2.732.46 4.02-.037.976-.47 1.917-.638 2.874-.124.706-.087 1.404-.158 2.114-.149 1.463.03 2.952.015 4.424-.005.528-.3 1.299-.106 1.801.097.254.237.336.356.546.233.414.313.201.455-.154.513-1.287 1.068-2.581 1.338-3.946.125-.636.082-1.403.308-2.015.485-1.31 1.06-2.647 1.211-4.052.084-.777-.008-1.62.19-2.379.202-.771.43-1.56.697-2.311.149-.42.35-.866.324-1.318-.034-.627-.747-.954-1.29-.91-.505.04-.36.512-.312.898.067.542.11 1.177 0 1.71-.242 1.16-.93 2.188-1.16 3.36-.167.851-.3 1.67-.3 2.54 0 .533.034 1.089-.108 1.608-.127.466-.047-.418-.035-.515"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
