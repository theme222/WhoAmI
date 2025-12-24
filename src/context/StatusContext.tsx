// Stores current website status. (Load readyness / dependencies)
import { AccSetStore } from "@/types/types";
import { createContext, createEffect, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const StatusContext = createContext<AccSetStore<StatusInterface>>();

const [status, setStatus] = createStore<StatusInterface>({
  animationReady: false,
  window: typeof window !== "undefined",
  navigator: typeof window.navigator !== "undefined",
  userAgent: typeof window.navigator.userAgent !== "undefined",
  doNotTrack: typeof window.navigator.doNotTrack !== "undefined",
  language: typeof window.navigator.languages !== "undefined" || typeof window.navigator.language !== "undefined",
  detailOverlayOpen: false
});

// Main use case for re attempting asking for permissions.
export const StatusResetFuncs: { [K in keyof StatusInterface]: () => void } = {
  animationReady: () => {
    requestAnimationFrame(() => setStatus("animationReady", true));
  },

  // These really don't need to be reset but exists for consistency.
  window: () => {
    setStatus("window", typeof window !== "undefined");
  },
  navigator: () => {
    setStatus("navigator", typeof window.navigator !== "undefined");
  },
  userAgent: () => {
    setStatus("userAgent", typeof window.navigator.userAgent !== "undefined");
  },
  doNotTrack: () => {
    setStatus("doNotTrack", typeof window.navigator.doNotTrack !== "undefined");
  },
  language: () => {
    setStatus("language", typeof window.navigator.languages !== "undefined" || typeof window.navigator.language !== "undefined");
  },

  detailOverlayOpen: () => {
    setStatus("detailOverlayOpen", false);
  },
}

export function StatusContextProvider(props: { children: JSXElement }) {
  StatusResetFuncs.animationReady();

  return (
    <StatusContext.Provider value={{ acc: status, set: setStatus }}>
      {props.children}
    </StatusContext.Provider>
  );
}

export interface StatusInterface {
  animationReady: boolean;
  window: boolean;
  navigator: boolean;
  userAgent: boolean;
  doNotTrack: boolean;
  language: boolean;
  detailOverlayOpen: boolean;
}
