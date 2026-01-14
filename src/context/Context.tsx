import { PreferencesContextProvider } from "./PreferencesContext";
import { StatusContextProvider } from "./StatusContext";
import { FeatureContextProvider } from "./FeatureContext";
import type { JSXElement } from "solid-js";

export default function Context(props: {children: JSXElement[]})
{
  return (
    <>
      <FeatureContextProvider>
        <StatusContextProvider>
          <PreferencesContextProvider>
            <div>
              {props.children}
            </div>
          </PreferencesContextProvider>
        </StatusContextProvider>
      </FeatureContextProvider>
    </>
  )
}
