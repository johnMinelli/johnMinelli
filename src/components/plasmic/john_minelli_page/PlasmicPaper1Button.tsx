// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sJW2SjvbA4LuFhHrBsyfEH
// Component: 7xOpXosNwe

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_john_minelli_page.module.css"; // plasmic-import: sJW2SjvbA4LuFhHrBsyfEH/projectcss
import sty from "./PlasmicPaper1Button.module.css"; // plasmic-import: 7xOpXosNwe/css

import eye16FTwf51Q1 from "./images/eye16.svg"; // plasmic-import: fTwf5-1Q1/picture

createPlasmicElementProxy;

export type PlasmicPaper1Button__VariantMembers = {};
export type PlasmicPaper1Button__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaper1Button__VariantsArgs;
export const PlasmicPaper1Button__VariantProps = new Array<VariantPropType>();

export type PlasmicPaper1Button__ArgsType = {
  onPress?: (event: any) => void;
};
type ArgPropType = keyof PlasmicPaper1Button__ArgsType;
export const PlasmicPaper1Button__ArgProps = new Array<ArgPropType>("onPress");

export type PlasmicPaper1Button__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPaper1ButtonProps {
  onPress?: (event: any) => void;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPaper1Button__RenderFunc(props: {
  variants: PlasmicPaper1Button__VariantsArgs;
  args: PlasmicPaper1Button__ArgsType;
  overrides: PlasmicPaper1Button__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const triggers = {
    hover_root: isRootHover,
    active_root: isRootActive
  };

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
        data-plasmic-trigger-props={[
          triggerRootHoverProps,
          triggerRootActiveProps
        ]}
      >
        {(triggers.active_root ? true : triggers.hover_root ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__zzrox)}
            displayHeight={"100%" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"100%" as const}
            loading={"lazy" as const}
            src={{
              src: eye16FTwf51Q1,
              fullWidth: 14,
              fullHeight: 14,
              aspectRatio: 1
            }}
          />
        ) : null}
        {(triggers.active_root ? true : triggers.hover_root ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__bzTrt)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: eye16FTwf51Q1,
              fullWidth: 14,
              fullHeight: 14,
              aspectRatio: 1
            }}
          />
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaper1Button__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaper1Button__VariantsArgs;
    args?: PlasmicPaper1Button__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaper1Button__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaper1Button__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPaper1Button__ArgProps,
          internalVariantPropNames: PlasmicPaper1Button__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaper1Button__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaper1Button";
  } else {
    func.displayName = `PlasmicPaper1Button.${nodeName}`;
  }
  return func;
}

export const PlasmicPaper1Button = Object.assign(
  // Top-level PlasmicPaper1Button renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPaper1Button
    internalVariantProps: PlasmicPaper1Button__VariantProps,
    internalArgProps: PlasmicPaper1Button__ArgProps,

    // Key-value metadata
    metadata: { nameProject: "FLATLAND" }
  }
);

export default PlasmicPaper1Button;
/* prettier-ignore-end */
