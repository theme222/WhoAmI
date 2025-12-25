import {
  wrenchScrewdriver,
  devicePhoneMobile,
  cog_8Tooth,
} from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import Bowser from "bowser";
import { createSignal } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";

const bowserParser = Bowser.getParser(window.navigator.userAgent);

//// OPERATING SYSTEM ////
const [operatingSystem_val, setOperatingSystem_val] = createSignal("");

export function setOperatingSystem() {
  if (!CheckDependancies(operatingSystem_k.dependencies)) return;
  setOperatingSystem_val(bowserParser.getOSName() || "unknown OS");
}

export const operatingSystem_k: Knowledge = {
  title: "Operating System",
  description:
    "The OS (operating system) is the software that manages everything in a computer. Most people use Windows, MacOS, Linux, Android, iOS.",
  dependencies: ["userAgent"],
  value: operatingSystem_val,
  icon: wrenchScrewdriver,
  set: setOperatingSystem,
  code: `
// Using the navigator interface
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getOSName();
// Experimental method
window.navigator.userAgentData.platform;
`,
};

//// OPERATING SYSTEM ////

//// PLATFORM ////

const [platform_val, setPlatform_val] = createSignal("");

export function setPlatform() {
  if (!CheckDependancies(platform_k.dependencies)) return;
  setPlatform_val(bowserParser.getPlatformType() || "unknown platform");
}

export const platform_k: Knowledge = {
  title: "Platform",
  description: "The platform the user is using. (desktop, mobile, tablet)",
  dependencies: ["userAgent"],
  value: platform_val,
  icon: cog_8Tooth,
  set: setPlatform,
  code: `
// Using the navigator interface (inferred value)
window.navigator.userAgent;
// Using the Bowser-js library for easy access
Bowser.getParser(window.navigator.userAgent).getPlatformType();
// Experimental method
window.navigator.userAgentData.mobile; // returns true if mobile, false if desktop
`,
};
//// PLATFORM ////

//// DEVICE ////
const [device_val, setDevice_val] = createSignal("");

export function setDevice() {
  if (!CheckDependancies(device_k.dependencies)) return;
  setDevice_val(
    (bowserParser.getResult().platform.vendor || "") +
      (bowserParser.getResult().platform.model || "") || "unknown",
  );
}

export const device_k: Knowledge = {
  title: "Device",
  description:
    "The device model the user is using. Contains vendor and model information.",
  dependencies: ["userAgent"],
  value: device_val,
  icon: devicePhoneMobile,
  set: setDevice,
  code: `
// Using the navigator interface (inferred value)
window.navigator.userAgent;
// Using the Bowser-js library for easy access
bowserParser.getResult().platform.vendor + bowserParser.getResult().platform.model;
`,
};
//// DEVICE ////

// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];

functionList.push(setOperatingSystem);
functionList.push(setPlatform);
functionList.push(setDevice);

export function loadAllDeviceInfo() {
  for (let i = 0; i < functionList.length; i++) {
    try {
      functionList[i]();
    } catch (error) {
      console.error(
        `Error while loading device info of function: ${functionList[i].name}`,
      );
      console.error(error);
    }
  }
}
