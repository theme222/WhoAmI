import { PreferencesContextProvider } from "./PreferencesContext";
import { StatusContextProvider } from "./StatusContext";
import type { JSXElement } from "solid-js";

export default function Context(props: {children: JSXElement[]})
{
  return (
    <>
      <StatusContextProvider>
        <PreferencesContextProvider>
          <div>
            {props.children}
          </div>
        </PreferencesContextProvider>
      </StatusContextProvider>
    </>
  )
}
