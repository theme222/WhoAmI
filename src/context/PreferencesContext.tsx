// Stores user preferences that can be changed with buttons or switches.
import { AccSetStore } from "@/types/types";
import { createContext, createSignal, useContext } from "solid-js";
import { type JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export const PreferencesContext = createContext<AccSetStore<PreferencesInterface>>();

export function PreferencesContextProvider(props: { children: JSXElement }) {
  const [preferences, setPreferences] = createStore({
    useLightMode: true, // winter dim
    language: "en",
  });

  return (
    <PreferencesContext.Provider value={{ acc: preferences, set: setPreferences }}>
      <div data-theme={preferences.useLightMode ? "winter": "dim"}>
        {props.children}
      </div>
    </PreferencesContext.Provider>
  );
}

export interface PreferencesInterface {
  useLightMode: boolean,
  language: string
}
