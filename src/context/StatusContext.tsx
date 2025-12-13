import { AccSetStore } from "@/types/types";
import { createContext, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const StatusContext = createContext<AccSetStore<StatusInterface>>();

export function StatusContextProvider(props: { children: JSXElement }) {
  const [status, setStatus] = createStore({
    animationReady: true
  });

  return (
    <StatusContext.Provider value={{ acc: status, set: setStatus}}>
      {props.children}
    </StatusContext.Provider>
  );
}

export interface StatusInterface {
  animationReady: boolean
}
