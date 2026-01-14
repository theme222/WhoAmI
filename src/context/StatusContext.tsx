// Stores current website status. (Load readyness / dependencies)
import { AccSetStore } from "@/types/types";
import { createContext, createEffect, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const StatusContext = createContext<AccSetStore<StatusInterface>>();

// This is the base status list which should not be used
// This contains the current status of these values. It may change during the course of the lifecycle.
const _statusList = {
  animationReady: false,
  detailOverlayOpen: false,
};

export function IsStatus(status: string) {
  return status in _statusList;
}

export type StatusInterface = typeof _statusList;

const [status, setStatus] = createStore<StatusInterface>(_statusList);

// Main use case for re attempting asking for permissions. Always cover these in a try catch.
export const StatusResetFuncs: { [K in keyof StatusInterface]: () => void } = {
  animationReady: () => {
    requestAnimationFrame(() => setStatus("animationReady", true));
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
