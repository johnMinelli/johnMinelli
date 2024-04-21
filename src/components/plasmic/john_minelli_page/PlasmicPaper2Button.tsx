// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sJW2SjvbA4LuFhHrBsyfEH
// Component: N0wwUZYvk9

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_john_minelli_page.module.css"; // plasmic-import: sJW2SjvbA4LuFhHrBsyfEH/projectcss
import sty from "./PlasmicPaper2Button.module.css"; // plasmic-import: N0wwUZYvk9/css

import r2PngPuqjQcwy0 from "./images/r2Png.png"; // plasmic-import: PuqjQcwy0/picture
import r1PngZyKs67Sbe from "./images/r1Png.png"; // plasmic-import: ZyKS67SBE/picture

createPlasmicElementProxy;

export type PlasmicPaper2Button__VariantMembers = {};
export type PlasmicPaper2Button__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaper2Button__VariantsArgs;
export const PlasmicPaper2Button__VariantProps = new Array<VariantPropType>();

export type PlasmicPaper2Button__ArgsType = {
  onPress?: (event: any) => void;
};
type ArgPropType = keyof PlasmicPaper2Button__ArgsType;
export const PlasmicPaper2Button__ArgProps = new Array<ArgPropType>("onPress");

export type PlasmicPaper2Button__OverridesType = {
  root?: Flex__<"div">;
  frame2?: Flex__<typeof PlasmicImg__>;
  frame1?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultPaper2ButtonProps {
  onPress?: (event: any) => void;
  className?: string;
}

const $$ = {};

function PlasmicPaper2Button__RenderFunc(props: {
  variants: PlasmicPaper2Button__VariantsArgs;
  args: PlasmicPaper2Button__ArgsType;
  overrides: PlasmicPaper2Button__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
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
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <PlasmicImg__
        data-plasmic-name={"frame2"}
        data-plasmic-override={overrides.frame2}
        alt={""}
        className={classNames(sty.frame2)}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        onClick={args.onPress}
        src={{
          src: r2PngPuqjQcwy0,
          fullWidth: 25,
          fullHeight: 18,
          aspectRatio: undefined
        }}
      />

      <PlasmicImg__
        data-plasmic-name={"frame1"}
        data-plasmic-override={overrides.frame1}
        alt={""}
        className={classNames(sty.frame1)}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        src={{
          src: r1PngZyKs67Sbe,
          fullWidth: 25,
          fullHeight: 18,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "frame2", "frame1"],
  frame2: ["frame2"],
  frame1: ["frame1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame2: typeof PlasmicImg__;
  frame1: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaper2Button__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaper2Button__VariantsArgs;
    args?: PlasmicPaper2Button__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaper2Button__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaper2Button__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPaper2Button__ArgProps,
          internalVariantPropNames: PlasmicPaper2Button__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaper2Button__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaper2Button";
  } else {
    func.displayName = `PlasmicPaper2Button.${nodeName}`;
  }
  return func;
}

export const PlasmicPaper2Button = Object.assign(
  // Top-level PlasmicPaper2Button renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame2: makeNodeComponent("frame2"),
    frame1: makeNodeComponent("frame1"),

    // Metadata about props expected for PlasmicPaper2Button
    internalVariantProps: PlasmicPaper2Button__VariantProps,
    internalArgProps: PlasmicPaper2Button__ArgProps,

    // Key-value metadata
    metadata: { nameProject: "FLATLAND" }
  }
);

export default PlasmicPaper2Button;
/* prettier-ignore-end */
