import { AccSetStore } from "@/types/types";
import { createContext, createEffect, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const FeatureContext = createContext<AccSetStore<FeatureInterface>>();

// This is the base status list which should not be used 
// This only guarantees the existence (or non existence) of the feature. NOT whether or not is is granted.
const _featureList = { 
  window: typeof window !== "undefined",
  navigator: typeof window.navigator !== "undefined",
  userAgent: typeof window.navigator.userAgent !== "undefined",
  doNotTrack: typeof window.navigator.doNotTrack !== "undefined",
  language: typeof window.navigator.languages !== "undefined" || typeof window.navigator.language !== "undefined",
  pdfViewerEnabled: typeof window.navigator.pdfViewerEnabled !== "undefined",
  permissions: typeof window.navigator.permissions !== "undefined",
  clipboard: typeof window.navigator.clipboard !== "undefined",
};

export function IsFeature(feature: string) {
  return feature in _featureList;
}

export type FeatureInterface = typeof _featureList;

const [feature, setFeature] = createStore(_featureList);

// export const FeatureRecheckFuncs : { [K in keyof FeatureInterface]: () => void } = { }

export function FeatureContextProvider(props: { children: JSXElement }) {
  return (
    <FeatureContext.Provider value={{ acc: feature, set: setFeature }}>
      {props.children}
    </FeatureContext.Provider>
  );
}