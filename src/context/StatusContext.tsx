// Stores current website status. (Load readyness / dependencies)
import { AccSetStore } from "@/types/types";
import { createContext, createEffect, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const StatusContext = createContext<AccSetStore<StatusInterface>>();

export function StatusContextProvider(props: { children: JSXElement }) {
  const [status, setStatus] = createStore({
    animationReady: false,
    userAgent:
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined" &&
      typeof window.navigator.userAgent !== "undefined",
    detailOverlayOpen: true
  });

  status.animationReady = false;
  requestAnimationFrame(() => setStatus("animationReady", true) );

  return (
    <StatusContext.Provider value={{ acc: status, set: setStatus }}>
      {props.children}
    </StatusContext.Provider>
  );
}

export interface StatusInterface {
  animationReady: boolean;
  userAgent: boolean;
  detailOverlayOpen: boolean;
}
