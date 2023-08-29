// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sJW2SjvbA4LuFhHrBsyfEH
// Component: ktUZWyedPGv

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
import Paper1Button from "../../Paper1Button"; // plasmic-import: DiDoqGTUiD/component
import Paper2Button from "../../Paper2Button"; // plasmic-import: N0wwUZYvk9/component

import { useScreenVariants as useScreenVariants_943UUhCMfqsg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 943uUhC-MFQSG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_john_minelli_page.module.css"; // plasmic-import: sJW2SjvbA4LuFhHrBsyfEH/projectcss
import sty from "./PlasmicPrinter.module.css"; // plasmic-import: ktUZWyedPGv/css

import imageRqSlXdSwk from "./images/image.svg"; // plasmic-import: rqSlXDSwk/picture
import image10Beg4PkDLy from "./images/image10.svg"; // plasmic-import: BEG4pkDLy/picture
import image8TwfgTt7W from "./images/image8.svg"; // plasmic-import: TwfgTT-7w/picture

createPlasmicElementProxy;

export type PlasmicPrinter__VariantMembers = {
  printedPapers: "nvs" | "leggedLocomotion";
};
export type PlasmicPrinter__VariantsArgs = {
  printedPapers?: SingleChoiceArg<"nvs" | "leggedLocomotion">;
};
type VariantPropType = keyof PlasmicPrinter__VariantsArgs;
export const PlasmicPrinter__VariantProps = new Array<VariantPropType>(
  "printedPapers"
);

export type PlasmicPrinter__ArgsType = {
  variable?: string;
  onVariableChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicPrinter__ArgsType;
export const PlasmicPrinter__ArgProps = new Array<ArgPropType>(
  "variable",
  "onVariableChange"
);

export type PlasmicPrinter__OverridesType = {
  root?: p.Flex<"div">;
  printer?: p.Flex<typeof p.PlasmicImg>;
  nvsButton?: p.Flex<typeof Paper1Button>;
  legButton?: p.Flex<typeof Paper2Button>;
  longerSheet?: p.Flex<typeof p.PlasmicImg>;
  printedArea?: p.Flex<"div">;
  text?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  link?: p.Flex<"a">;
  sheetWheel?: p.Flex<"div">;
};

export interface DefaultPrinterProps {
  variable?: string;
  onVariableChange?: (val: string) => void;
  printedPapers?: SingleChoiceArg<"nvs" | "leggedLocomotion">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPrinter__RenderFunc(props: {
  variants: PlasmicPrinter__VariantsArgs;
  args: PlasmicPrinter__ArgsType;
  overrides: PlasmicPrinter__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "writable",
        variableType: "text",

        valueProp: "variable",
        onChangeProp: "onVariableChange"
      },
      {
        path: "printedPapers",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.printedPapers
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_943UUhCMfqsg()
  });

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
          sty.root,
          {
            [sty.rootprintedPapers_nvs]: hasVariant(
              $state,
              "printedPapers",
              "nvs"
            )
          }
        )}
      >
        <p.PlasmicImg
          data-plasmic-name={"printer"}
          data-plasmic-override={overrides.printer}
          alt={""}
          className={classNames(sty.printer, {
            [sty.printerprintedPapers_leggedLocomotion]: hasVariant(
              $state,
              "printedPapers",
              "leggedLocomotion"
            ),
            [sty.printerprintedPapers_nvs]: hasVariant(
              $state,
              "printedPapers",
              "nvs"
            )
          })}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("158px" as const)
              : hasVariant(globalVariants, "screen", "laptop")
              ? ("auto" as const)
              : ("100%" as const)
          }
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("320px" as const)
              : hasVariant(globalVariants, "screen", "laptop")
              ? ("100%" as const)
              : ("100%" as const)
          }
          loading={"lazy" as const}
          src={{
            src: imageRqSlXdSwk,
            fullWidth: 299,
            fullHeight: 150,
            aspectRatio: 1.995146
          }}
        />

        <Paper1Button
          data-plasmic-name={"nvsButton"}
          data-plasmic-override={overrides.nvsButton}
          className={classNames("__wab_instance", sty.nvsButton, {
            [sty.nvsButtonprintedPapers_nvs]: hasVariant(
              $state,
              "printedPapers",
              "nvs"
            )
          })}
          onPress={async event => {
            const $steps = {};
            $steps["updatePrintedPapers"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "-AmJn4AXH",
                        componentUuid: "ktUZWyedPGv",
                        argName: "vgroup"
                      },
                      () => "printedPapers"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "-AmJn4AXH",
                        componentUuid: "ktUZWyedPGv",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "-AmJn4AXH",
                        componentUuid: "ktUZWyedPGv",
                        argName: "value"
                      },
                      () => "nvs"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "-AmJn4AXH",
                      componentUuid: "ktUZWyedPGv"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updatePrintedPapers"] === "object" &&
              typeof $steps["updatePrintedPapers"].then === "function"
            ) {
              $steps["updatePrintedPapers"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "-AmJn4AXH",
                  componentUuid: "ktUZWyedPGv"
                },
                $steps["updatePrintedPapers"]
              );
            }
          }}
        />

        <Paper2Button
          data-plasmic-name={"legButton"}
          data-plasmic-override={overrides.legButton}
          className={classNames("__wab_instance", sty.legButton, {
            [sty.legButtonprintedPapers_leggedLocomotion]: hasVariant(
              $state,
              "printedPapers",
              "leggedLocomotion"
            ),
            [sty.legButtonprintedPapers_nvs]: hasVariant(
              $state,
              "printedPapers",
              "nvs"
            )
          })}
          onPress={async event => {
            const $steps = {};
            $steps["updatePrintedPapers"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "uqHFMzs7a",
                        componentUuid: "ktUZWyedPGv",
                        argName: "vgroup"
                      },
                      () => "printedPapers"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "uqHFMzs7a",
                        componentUuid: "ktUZWyedPGv",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "uqHFMzs7a",
                        componentUuid: "ktUZWyedPGv",
                        argName: "value"
                      },
                      () => "leggedLocomotion"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "uqHFMzs7a",
                      componentUuid: "ktUZWyedPGv"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updatePrintedPapers"] === "object" &&
              typeof $steps["updatePrintedPapers"].then === "function"
            ) {
              $steps["updatePrintedPapers"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "uqHFMzs7a",
                  componentUuid: "ktUZWyedPGv"
                },
                $steps["updatePrintedPapers"]
              );
            }
          }}
        />

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.PlasmicImg
            data-plasmic-name={"longerSheet"}
            data-plasmic-override={overrides.longerSheet}
            alt={""}
            className={classNames(sty.longerSheet)}
            displayHeight={"102px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: image10Beg4PkDLy,
              fullWidth: 300,
              fullHeight: 139,
              aspectRatio: 2.152174
            }}
          />
        ) : null}
        {true ? (
          <div
            data-plasmic-name={"printedArea"}
            data-plasmic-override={overrides.printedArea}
            className={classNames(projectcss.all, sty.printedArea, {
              [sty.printedAreaprintedPapers_leggedLocomotion]: hasVariant(
                $state,
                "printedPapers",
                "leggedLocomotion"
              ),
              [sty.printedAreaprintedPapers_nvs]: hasVariant(
                $state,
                "printedPapers",
                "nvs"
              )
            })}
          >
            {(
              hasVariant($state, "printedPapers", "leggedLocomotion")
                ? true
                : hasVariant($state, "printedPapers", "nvs")
                ? true
                : true
            ) ? (
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text,
                  {
                    [sty.textprintedPapers_leggedLocomotion]: hasVariant(
                      $state,
                      "printedPapers",
                      "leggedLocomotion"
                    ),
                    [sty.textprintedPapers_nvs]: hasVariant(
                      $state,
                      "printedPapers",
                      "nvs"
                    )
                  }
                )}
              >
                {hasVariant($state, "printedPapers", "leggedLocomotion")
                  ? "Towards Continual RL for Quadruped Robots"
                  : hasVariant($state, "printedPapers", "nvs")
                  ? "Depth self-supervision for single image novel view synthesis"
                  : ""}
              </div>
            ) : null}
            {(
              hasVariant($state, "printedPapers", "nvs")
                ? true
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img, {
                  [sty.imgprintedPapers_nvs]: hasVariant(
                    $state,
                    "printedPapers",
                    "nvs"
                  )
                })}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"39px" as const}
                loading={"lazy" as const}
                src={{
                  src: image8TwfgTt7W,
                  fullWidth: 300,
                  fullHeight: 135,
                  aspectRatio: 2.222644
                }}
              />
            ) : null}
            {(
              hasVariant($state, "printedPapers", "nvs")
                ? true
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <a
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link, {
                  [sty.linkprintedPapers_nvs]: hasVariant(
                    $state,
                    "printedPapers",
                    "nvs"
                  )
                })}
                href={"" as const}
                onClick={async event => {
                  const $steps = {};
                }}
                target={"_blank" as const}
              />
            ) : null}
          </div>
        ) : null}
        <div
          data-plasmic-name={"sheetWheel"}
          data-plasmic-override={overrides.sheetWheel}
          className={classNames(projectcss.all, sty.sheetWheel)}
          onClick={async event => {
            const $steps = {};
            $steps["updatePrintedPapers"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "gbX1k5tF-",
                        componentUuid: "ktUZWyedPGv",
                        argName: "vgroup"
                      },
                      () => "printedPapers"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "gbX1k5tF-",
                        componentUuid: "ktUZWyedPGv",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "gbX1k5tF-",
                        componentUuid: "ktUZWyedPGv",
                        argName: "value"
                      },
                      () => []
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "gbX1k5tF-",
                      componentUuid: "ktUZWyedPGv"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updatePrintedPapers"] === "object" &&
              typeof $steps["updatePrintedPapers"].then === "function"
            ) {
              $steps["updatePrintedPapers"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "gbX1k5tF-",
                  componentUuid: "ktUZWyedPGv"
                },
                $steps["updatePrintedPapers"]
              );
            }
          }}
        />
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "printer",
    "nvsButton",
    "legButton",
    "longerSheet",
    "printedArea",
    "text",
    "img",
    "link",
    "sheetWheel"
  ],
  printer: ["printer"],
  nvsButton: ["nvsButton"],
  legButton: ["legButton"],
  longerSheet: ["longerSheet"],
  printedArea: ["printedArea", "text", "img", "link"],
  text: ["text"],
  img: ["img"],
  link: ["link"],
  sheetWheel: ["sheetWheel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  printer: typeof p.PlasmicImg;
  nvsButton: typeof Paper1Button;
  legButton: typeof Paper2Button;
  longerSheet: typeof p.PlasmicImg;
  printedArea: "div";
  text: "div";
  img: typeof p.PlasmicImg;
  link: "a";
  sheetWheel: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrinter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrinter__VariantsArgs;
    args?: PlasmicPrinter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrinter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPrinter__ArgsType,
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
          internalArgPropNames: PlasmicPrinter__ArgProps,
          internalVariantPropNames: PlasmicPrinter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrinter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrinter";
  } else {
    func.displayName = `PlasmicPrinter.${nodeName}`;
  }
  return func;
}

export const PlasmicPrinter = Object.assign(
  // Top-level PlasmicPrinter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    printer: makeNodeComponent("printer"),
    nvsButton: makeNodeComponent("nvsButton"),
    legButton: makeNodeComponent("legButton"),
    longerSheet: makeNodeComponent("longerSheet"),
    printedArea: makeNodeComponent("printedArea"),
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    sheetWheel: makeNodeComponent("sheetWheel"),

    // Metadata about props expected for PlasmicPrinter
    internalVariantProps: PlasmicPrinter__VariantProps,
    internalArgProps: PlasmicPrinter__ArgProps,

    // Key-value metadata
    metadata: { nameProject: "FLATLAND" }
  }
);

export default PlasmicPrinter;
/* prettier-ignore-end */
