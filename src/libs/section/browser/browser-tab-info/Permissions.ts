import {
  wrenchScrewdriver,
  devicePhoneMobile,
  cog_8Tooth,
} from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import { createSignal } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";
import { Availability as Avail, availabilityToString } from "@/types/enums";

function getDetailedPermissionString(initialString: string, availability: Avail) {
  return `${initialString} The value displayed can be either 'granted', 'denied', or 'prompt'. 
  If it is prompt that means that the user must interact in some way for the permission to be granted.
  This method is considered ${availabilityToString(availability)}.
  `;
}

const permissionList: Record<string, Avail> = {
  "accelerometer": Avail.EXPERIMENTAL,
  "accessibility-events": Avail.DEPRECATED | Avail.NON_STANDARD,
  "ambient-light-sensor": Avail.EXPERIMENTAL,
  "background-sync": Avail.EXPERIMENTAL,
  "camera": Avail.STANDARD,
  "captured-surface-control": Avail.EXPERIMENTAL,
  "clipboard-read": Avail.EXPERIMENTAL | Avail.NON_STANDARD,
  "clipboard-write": Avail.EXPERIMENTAL,
  "geolocation": Avail.STANDARD,
  "gyroscope": Avail.EXPERIMENTAL,
  "local-fonts": Avail.EXPERIMENTAL,
  "magnetometer": Avail.EXPERIMENTAL,
  "microphone": Avail.STANDARD,
  "midi": Avail.STANDARD,
  "notifications": Avail.STANDARD,
  "payment-handler": Avail.EXPERIMENTAL,
  "persistent-storage": Avail.STANDARD,
  "push": Avail.STANDARD,
  "screen-wake-lock": Avail.EXPERIMENTAL,
  "storage-access": Avail.STANDARD,
  "top-level-storage-access": Avail.EXPERIMENTAL,
  "window-management": Avail.EXPERIMENTAL,
};


//// ACCELEROMETER ENABLED ////
const [accelerometerEnabled_val, setAccelerometerEnabled_val] = createSignal<string | null>("");

export function setAccelerometerEnabled() {
  if (!CheckDependancies(accelerometerEnabled_k.dependencies)) return;
  window.navigator.permissions.query({name: "accelerometer"})
    .then((permissionStatus) => {
      setAccelerometerEnabled_val(permissionStatus.state);
    })
    .catch((error) => {
      setAccelerometerEnabled_val("N/A");
    });
}

export const accelerometerEnabled_k: Knowledge = {
  title: "Accelerometer",
  description: "This checks whether the website can access the accelerometer. It is used to measure changes in speed and direction.",
  detailedDescription: getDetailedPermissionString("The accelerometer is a sensor that measures acceleration in three dimensions. It is used to measure changes in speed and direction.", permissionList.accelerometer),
  dependencies: ["window", "navigator", "permissions"],
  value: accelerometerEnabled_val,
  set: setAccelerometerEnabled,
  code:
`
// Using the navigator interface
window.navigator.permissions.query({name: "accelerometer"})
  .then((permissionStatus) => {
    // Either "granted", "denied", or "prompt"
    console.log(permissionStatus.state);
  })
  .catch((error) => {
    // Not supported by the browser
    console.error(error);
  });
});
`
};
//// ACCELEROMETER ENABLED ////

//// ACCESSIBILITY EVENTS ENABLED ////
const [accessibilityEventsEnabled_val, setAccessibilityEventsEnabled_val] = createSignal<string | null>("");

export function setAccessibilityEventsEnabled() {
  if (!CheckDependancies(accessibilityEventsEnabled_k.dependencies)) return;
  window.navigator.permissions.query({name: "accessibility-events"})
    .then((permissionStatus) => {
      setAccessibilityEventsEnabled_val(permissionStatus.state);
    })
    .catch((error) => {
      setAccessibilityEventsEnabled_val("N/A");
    });
}

export const accessibilityEventsEnabled_k: Knowledge = {
  title: "Accessibility Events",
  description: "This checks whether the website can access the accessibility events.",
  detailedDescription: getDetailedPermissionString("I have no fucking clue what this is.", permissionList["accessibility-events"]),
  dependencies: ["window", "navigator", "permissions"],
  value: accessibilityEventsEnabled_val,
  set: setAccessibilityEventsEnabled,
  code:
`
// Using the navigator interface
window.navigator.permissions.query({name: "accelerometer"})
  .then((permissionStatus) => {
    // Either "granted", "denied", or "prompt"
    console.log(permissionStatus.state);
  })
  .catch((error) => {
    // Not supported by the browser
    console.error("Error while querying accelerometer permission:", error);
  });
`
};

//// ACCESSIBILITY EVENTS ENABLED ////

// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];

functionList.push(setAccelerometerEnabled);
functionList.push(setAccessibilityEventsEnabled)

export function loadAllPermissions() {
  for (let i = 0; i < functionList.length; i++) {
    try {
      functionList[i]();
    } catch (error) {
      console.error(
        `Error while loading permissions of function: ${functionList[i].name}`,
      );
      console.error(error);
    }
  }
}
