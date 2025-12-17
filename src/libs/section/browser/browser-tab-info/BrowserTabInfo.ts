import { globeAlt, wrenchScrewdriver, devicePhoneMobile } from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import Bowser from "bowser";
import { createSignal } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";

const bowserParser = Bowser.getParser(window.navigator.userAgent);

//// BROWSER NAME ////
const [browserName_val, setBrowserName_val] = createSignal("");

export const browserName: Knowledge = {
  title: "Browser Name",
  description: "The most basic of information. Some users use Google Chrome. Some users use Safari. But lets be honest here, everything is chromium.",
  dependencies: ["userAgent"],
  value: browserName_val,
  icon: globeAlt,
  code:
`
// Using the navigator interface
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getBrowserName();
// Experimental method
navigator.userAgentData.brands;
`
};

export function setBrowserName() {
  if (!CheckDependancies(browserName.dependencies)) return;
  setBrowserName_val(bowserParser.getBrowserName() || "unknown browser");
}
//// BROWSER NAME ////

//// OPERATING SYSTEM ////
const [operatingSystem_val, setOperatingSystem_val] = createSignal("");

export const operatingSystem: Knowledge = {
  title: "Operating System",
  description: "The OS (operating system) is the software that manages everything in a computer. Most people use Windows, MacOS, Linux, Android, iOS.",
  dependencies: ["userAgent"],
  value: operatingSystem_val,
  icon: wrenchScrewdriver,
  code:
`
// Using the navigator interface
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getOSName();
// Experimental method
navigator.userAgentData.platform;
`
};

export function setOperatingSystem() {
  if (!CheckDependancies(operatingSystem.dependencies)) return;
  setOperatingSystem_val(bowserParser.getOSName() || "unknown OS");
}
//// OPERATING SYSTEM ////

//// PLATFORM ////

const [platform_val, setPlatform_val] = createSignal("");

export const platform: Knowledge = {
  title: "Platform",
  description: "The platform the user is using. (desktop, mobile, tablet)",
  dependencies: ["userAgent"],
  value: platform_val,
  icon: wrenchScrewdriver,
  code:
`
// Using the navigator interface (inferred value)
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getOSName();
// Experimental method
navigator.userAgentData.mobile; // returns true if mobile, false if desktop
`
};

export function setPlatform() {
  if (!CheckDependancies(platform.dependencies)) return;
  setPlatform_val(bowserParser.getPlatformType() || "unknown platform");
}
//// PLATFORM ////

//// DEVICE ////
const [device_val, setDevice_val] = createSignal("");

export const device: Knowledge = {
  title: "Device",
  description: "The device model the user is using. Contains vendor and model information.",
  dependencies: ["userAgent"],
  value: device_val,
  icon: devicePhoneMobile,
  code:
`
// Using the navigator interface (inferred value)
window.navigator.userAgent;
// Using the Bowser-js library for easy access
bowserParser.getResult().platform.vendor + bowserParser.getResult().platform.model;
`
};

export function setDevice() {
  if (!CheckDependancies(device.dependencies)) return;
  setDevice_val((bowserParser.getResult().platform.vendor || "") + (bowserParser.getResult().platform.model || "") || "unknown");
}
//// DEVICE ////

// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];

functionList.push(setBrowserName);
functionList.push(setOperatingSystem);
functionList.push(setDevice);
functionList.push(setPlatform);


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
