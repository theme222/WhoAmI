import { globeAlt, wrenchScrewdriver, devicePhoneMobile, cog_8Tooth, magnifyingGlass, language as language_icon } from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import Bowser from "bowser";
import { createSignal } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";

const bowserParser = Bowser.getParser(window.navigator.userAgent);

//// BROWSER NAME ////
const [browserName_val, setBrowserName_val] = createSignal("");

export function setBrowserName() {
  if (!CheckDependancies(browserName_k.dependencies)) return;
  setBrowserName_val(bowserParser.getBrowserName() || "unknown browser");
}

export const browserName_k: Knowledge = {
  title: "Browser Name",
  description: "The most basic of information. Some users use Google Chrome. Some users use Safari. But lets be honest here, everything is chromium.",
  detailedDescription: "The most basic of information. Although with modern browsers, the browser name is often not the name of the browser itself, but rather the name of the engine that powers it. For example Chromium based browsers will show up as 'Chrome'",
  dependencies: ["window", "navigator", "userAgent"],
  value: browserName_val,
  icon: globeAlt,
  set: setBrowserName,
  code:
`
// Using the navigator interface
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getBrowserName();
// Experimental method
window.navigator.userAgentData.brands;
`
};
//// BROWSER NAME ////

//// DO NOT TRACK ////
const [doNotTrack_val, setDoNotTrack_val] = createSignal<string | null>("");

export function setDoNotTrack() {
  if (!CheckDependancies(doNotTrack_k.dependencies)) return;
  setDoNotTrack_val(window.navigator.doNotTrack || "unspecified");
}

export const doNotTrack_k: Knowledge = {
  title: "Do Not Track",
  description: "Do Not Track is a privacy feature that allows users to opt-out of tracking by websites and advertisers.",
  dependencies: ["window", "navigator", "doNotTrack"],
  value: doNotTrack_val,
  icon: magnifyingGlass,
  set: setDoNotTrack,
  code:
`
// Using the navigator interface
// Warning: This method is considered deprecated and should not be used.
// Actual values vary by browser.
window.navigator.doNotTrack;
`
};
//// DO NOT TRACK ////

//// LANGUAGE ////
const [language_val, setLanguage_val] = createSignal<string>("");

export function setLanguage() {
  if (!CheckDependancies(language_k.dependencies)) return;
  setLanguage_val(window.navigator.languages.join(", ") || window.navigator.language);
}

export const language_k: Knowledge = {
  title: "Language",
  description: "A string that contains the preferred language of the user, in a BCP 47 language tag.",
  dependencies: ["window", "navigator", "language"],
  value: language_val,
  icon: language_icon,
  set: setLanguage,
  code:
`
// Using the navigator interface
window.navigator.language; // Get the user's preffered langugae
window.navigator.languages; // Get user preffered languages ordered by preference
`
};
//// DO NOT TRACK ////

// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];

functionList.push(setBrowserName);
functionList.push(setDoNotTrack);
functionList.push(setLanguage);


export function loadAllBrowserTabInfo() {
  for (let i = 0; i < functionList.length; i++) {
    try {
      functionList[i]();
    }
    catch (error) {
      console.error(`Error while loading browser tab info of function: ${functionList[i].name}`);
      console.error(error);
    }
  }
}
