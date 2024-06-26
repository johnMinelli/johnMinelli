// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sJW2SjvbA4LuFhHrBsyfEH
// Component: Ckf923Zffah2

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
import sty from "./PlasmicBack.module.css"; // plasmic-import: Ckf923Zffah2/css

import Rectangle78Icon from "./icons/PlasmicIcon__Rectangle78"; // plasmic-import: PYYArtdUr8o1/icon
import Rectangle79Icon from "./icons/PlasmicIcon__Rectangle79"; // plasmic-import: oSyitAU6uZQE/icon
import Rectangle80Icon from "./icons/PlasmicIcon__Rectangle80"; // plasmic-import: Iu66fmOGX9jC/icon
import Rectangle81Icon from "./icons/PlasmicIcon__Rectangle81"; // plasmic-import: CPpQh0S9Ts0o/icon
import Rectangle82Icon from "./icons/PlasmicIcon__Rectangle82"; // plasmic-import: DF487lolQ69u/icon

createPlasmicElementProxy;

export type PlasmicBack__VariantMembers = {};
export type PlasmicBack__VariantsArgs = {};
type VariantPropType = keyof PlasmicBack__VariantsArgs;
export const PlasmicBack__VariantProps = new Array<VariantPropType>();

export type PlasmicBack__ArgsType = {};
type ArgPropType = keyof PlasmicBack__ArgsType;
export const PlasmicBack__ArgProps = new Array<ArgPropType>();

export type PlasmicBack__OverridesType = {
  root?: Flex__<"div">;
  table?: Flex__<"div">;
  rectangle66?: Flex__<"div">;
  rectangle67?: Flex__<"div">;
};

export interface DefaultBackProps {
  className?: string;
}

const $$ = {};

function PlasmicBack__RenderFunc(props: {
  variants: PlasmicBack__VariantsArgs;
  args: PlasmicBack__ArgsType;
  overrides: PlasmicBack__OverridesType;
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
    >
      <div
        data-plasmic-name={"table"}
        data-plasmic-override={overrides.table}
        className={classNames(projectcss.all, sty.table)}
      >
        <div
          data-plasmic-name={"rectangle66"}
          data-plasmic-override={overrides.rectangle66}
          className={classNames(projectcss.all, sty.rectangle66)}
        />

        <div
          data-plasmic-name={"rectangle67"}
          data-plasmic-override={overrides.rectangle67}
          className={classNames(projectcss.all, sty.rectangle67)}
        />

        <Rectangle78Icon
          className={classNames(projectcss.all, sty.svg__iR5Vt)}
          role={"img"}
        />

        <Rectangle79Icon
          className={classNames(projectcss.all, sty.svg__gmGnx)}
          role={"img"}
        />

        <Rectangle80Icon
          className={classNames(projectcss.all, sty.svg__qQIfN)}
          role={"img"}
        />

        <Rectangle81Icon
          className={classNames(projectcss.all, sty.svg___6GR1W)}
          role={"img"}
        />

        <Rectangle82Icon
          className={classNames(projectcss.all, sty.svg__tOYb3)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "table", "rectangle66", "rectangle67"],
  table: ["table", "rectangle66", "rectangle67"],
  rectangle66: ["rectangle66"],
  rectangle67: ["rectangle67"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  table: "div";
  rectangle66: "div";
  rectangle67: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBack__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBack__VariantsArgs;
    args?: PlasmicBack__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBack__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBack__ArgsType,
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
          internalArgPropNames: PlasmicBack__ArgProps,
          internalVariantPropNames: PlasmicBack__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBack__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBack";
  } else {
    func.displayName = `PlasmicBack.${nodeName}`;
  }
  return func;
}

export const PlasmicBack = Object.assign(
  // Top-level PlasmicBack renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    table: makeNodeComponent("table"),
    rectangle66: makeNodeComponent("rectangle66"),
    rectangle67: makeNodeComponent("rectangle67"),

    // Metadata about props expected for PlasmicBack
    internalVariantProps: PlasmicBack__VariantProps,
    internalArgProps: PlasmicBack__ArgProps
  }
);

export default PlasmicBack;
/* prettier-ignore-end */
