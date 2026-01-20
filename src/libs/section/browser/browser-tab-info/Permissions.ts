import {
  wrenchScrewdriver,
  devicePhoneMobile,
  cog_8Tooth,
} from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import { createSignal, Setter } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";
import { Availability as Avail, availabilityToString } from "@/types/enums";

function getDetailedPermissionString(initialString: string, availability: Avail) {
  return `${initialString} The value displayed can be either 'granted', 'denied', or 'prompt'. 
  If it is prompt that means that the user must interact in some way for the permission to be granted.
  This method is considered ${availabilityToString(availability)}.
  `;
}

function setPermissionEnabledBase(perm: PermissionName, knowledge: Knowledge, set: Setter<any>) {
  if (!CheckDependancies(knowledge.dependencies)) return;
  window.navigator.permissions.query({ name: perm })
    .then((permissionStatus) => set(permissionStatus.state))
    .catch((error) => set("N/A"));
}

function getPermissionCodeString(perm: PermissionName) {
  return `
  // Using the navigator interface
  window.navigator.permissions.query({name: "${perm}"})
    .then((permissionStatus) => {
      // Either "granted", "denied", or "prompt"
      console.log(permissionStatus.state);
    })
    .catch((error) => {
      // Not supported by the browser
      console.error(error);
    });
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
  setPermissionEnabledBase("accelerometer", accelerometerEnabled_k, setAccelerometerEnabled_val);
}

const accelDescription = "This checks whether the website can access the accelerometer. It is used to measure changes in speed and direction.";
export const accelerometerEnabled_k: Knowledge = {
  title: "Accelerometer",
  description: accelDescription,
  detailedDescription: getDetailedPermissionString(accelDescription, permissionList.accelerometer),
  dependencies: ["window", "navigator", "permissions"],
  value: accelerometerEnabled_val,
  set: setAccelerometerEnabled,
  code: getPermissionCodeString("accelerometer")
};
//// ACCELEROMETER ENABLED ////

//// ACCESSIBILITY EVENTS ENABLED ////
const [accessibilityEventsEnabled_val, setAccessibilityEventsEnabled_val] = createSignal<string | null>("");

export function setAccessibilityEventsEnabled() {
  setPermissionEnabledBase("accessibility-events", accessibilityEventsEnabled_k, setAccessibilityEventsEnabled_val);
}

const accessibilityEventsDescription = "This checks whether the website can access accessibility events.";
export const accessibilityEventsEnabled_k: Knowledge = {
  title: "Accessibility Events",
  description: accessibilityEventsDescription,
  detailedDescription: getDetailedPermissionString(accessibilityEventsDescription, permissionList["accessibility-events"]),
  dependencies: ["window", "navigator", "permissions"],
  value: accessibilityEventsEnabled_val,
  set: setAccessibilityEventsEnabled,
  code: getPermissionCodeString("accessibility-events")
};
//// ACCESSIBILITY EVENTS ENABLED ////

//// AMBIENT LIGHT SENSOR ENABLED ////
const [ambientLightSensorEnabled_val, setAmbientLightSensorEnabled_val] = createSignal<string | null>("");

export function setAmbientLightSensorEnabled() {
    setPermissionEnabledBase("ambient-light-sensor", ambientLightSensorEnabled_k, setAmbientLightSensorEnabled_val);
}

const ambientLightSensorDescription = "This checks whether the website can access the ambient light sensor. It is used to adjust screen brightness based on surrounding light levels.";
export const ambientLightSensorEnabled_k: Knowledge = {
  title: "Ambient Light Sensor",
  description: ambientLightSensorDescription,
  detailedDescription: getDetailedPermissionString(ambientLightSensorDescription, permissionList["ambient-light-sensor"]),
  dependencies: ["window", "navigator", "permissions"],
  value: ambientLightSensorEnabled_val,
  set: setAmbientLightSensorEnabled,
  code: getPermissionCodeString("ambient-light-sensor")
};
//// AMBIENT LIGHT SENSOR ENABLED ////

//// BACKGROUND SYNC ENABLED ////
const [backgroundSyncEnabled_val, setBackgroundSyncEnabled_val] = createSignal<string | null>("");

export function setBackgroundSyncEnabled() {
    setPermissionEnabledBase("background-sync", backgroundSyncEnabled_k, setBackgroundSyncEnabled_val);
}

const backgroundSyncDescription = "This checks whether the website can use the background sync API, allowing for deferred actions until a stable connection is available.";
export const backgroundSyncEnabled_k: Knowledge = {
  title: "Background Sync",
  description: backgroundSyncDescription,
  detailedDescription: getDetailedPermissionString(backgroundSyncDescription, permissionList["background-sync"]),
  dependencies: ["window", "navigator", "permissions"],
  value: backgroundSyncEnabled_val,
  set: setBackgroundSyncEnabled,
  code: getPermissionCodeString("background-sync")
};
//// BACKGROUND SYNC ENABLED ////

//// CAMERA ENABLED ////
const [cameraEnabled_val, setCameraEnabled_val] = createSignal<string | null>("");

export function setCameraEnabled() {
    setPermissionEnabledBase("camera", cameraEnabled_k, setCameraEnabled_val);
}

const cameraDescription = "This checks whether the website can access the camera.";
export const cameraEnabled_k: Knowledge = {
  title: "Camera",
  description: cameraDescription,
  detailedDescription: getDetailedPermissionString(cameraDescription, permissionList.camera),
  dependencies: ["window", "navigator", "permissions"],
  value: cameraEnabled_val,
  set: setCameraEnabled,
  code: getPermissionCodeString("camera")
};
//// CAMERA ENABLED ////

//// CAPTURED SURFACE CONTROL ENABLED ////
const [capturedSurfaceControlEnabled_val, setCapturedSurfaceControlEnabled_val] = createSignal<string | null>("");

export function setCapturedSurfaceControlEnabled() {
    setPermissionEnabledBase("captured-surface-control", capturedSurfaceControlEnabled_k, setCapturedSurfaceControlEnabled_val);
}

const capturedSurfaceControlDescription = "This checks whether the website can control a captured display surface.";
export const capturedSurfaceControlEnabled_k: Knowledge = {
  title: "Captured Surface Control",
  description: capturedSurfaceControlDescription,
  detailedDescription: getDetailedPermissionString(capturedSurfaceControlDescription, permissionList["captured-surface-control"]),
  dependencies: ["window", "navigator", "permissions"],
  value: capturedSurfaceControlEnabled_val,
  set: setCapturedSurfaceControlEnabled,
  code: getPermissionCodeString("captured-surface-control")
};
//// CAPTURED SURFACE CONTROL ENABLED ////

//// CLIPBOARD READ ENABLED ////
const [clipboardReadEnabled_val, setClipboardReadEnabled_val] = createSignal<string | null>("");

export function setClipboardReadEnabled() {
    setPermissionEnabledBase("clipboard-read", clipboardReadEnabled_k, setClipboardReadEnabled_val);
}

const clipboardReadDescription = "This checks whether the website can read from the clipboard.";
export const clipboardReadEnabled_k: Knowledge = {
  title: "Clipboard Read",
  description: clipboardReadDescription,
  detailedDescription: getDetailedPermissionString(clipboardReadDescription, permissionList["clipboard-read"]),
  dependencies: ["window", "navigator", "permissions"],
  value: clipboardReadEnabled_val,
  set: setClipboardReadEnabled,
  code: getPermissionCodeString("clipboard-read")
};
//// CLIPBOARD READ ENABLED ////

//// CLIPBOARD WRITE ENABLED ////
const [clipboardWriteEnabled_val, setClipboardWriteEnabled_val] = createSignal<string | null>("");

export function setClipboardWriteEnabled() {
    setPermissionEnabledBase("clipboard-write", clipboardWriteEnabled_k, setClipboardWriteEnabled_val);
}

const clipboardWriteDescription = "This checks whether the website can write to the clipboard.";
export const clipboardWriteEnabled_k: Knowledge = {
  title: "Clipboard Write",
  description: clipboardWriteDescription,
  detailedDescription: getDetailedPermissionString(clipboardWriteDescription, permissionList["clipboard-write"]),
  dependencies: ["window", "navigator", "permissions"],
  value: clipboardWriteEnabled_val,
  set: setClipboardWriteEnabled,
  code: getPermissionCodeString("clipboard-write")
};
//// CLIPBOARD WRITE ENABLED ////

//// GEOLOCATION ENABLED ////
const [geolocationEnabled_val, setGeolocationEnabled_val] = createSignal<string | null>("");

export function setGeolocationEnabled() {
    setPermissionEnabledBase("geolocation", geolocationEnabled_k, setGeolocationEnabled_val);
}

const geolocationDescription = "This checks whether the website can access the user's location.";
export const geolocationEnabled_k: Knowledge = {
  title: "Geolocation",
  description: geolocationDescription,
  detailedDescription: getDetailedPermissionString(geolocationDescription, permissionList.geolocation),
  dependencies: ["window", "navigator", "permissions"],
  value: geolocationEnabled_val,
  set: setGeolocationEnabled,
  code: getPermissionCodeString("geolocation")
};
//// GEOLOCATION ENABLED ////

//// GYROSCOPE ENABLED ////
const [gyroscopeEnabled_val, setGyroscopeEnabled_val] = createSignal<string | null>("");

export function setGyroscopeEnabled() {
    setPermissionEnabledBase("gyroscope", gyroscopeEnabled_k, setGyroscopeEnabled_val);
}

const gyroscopeDescription = "This checks whether the website can access the gyroscope sensor.";
export const gyroscopeEnabled_k: Knowledge = {
  title: "Gyroscope",
  description: gyroscopeDescription,
  detailedDescription: getDetailedPermissionString(gyroscopeDescription, permissionList.gyroscope),
  dependencies: ["window", "navigator", "permissions"],
  value: gyroscopeEnabled_val,
  set: setGyroscopeEnabled,
  code: getPermissionCodeString("gyroscope")
};
//// GYROSCOPE ENABLED ////

//// LOCAL FONTS ENABLED ////
const [localFontsEnabled_val, setLocalFontsEnabled_val] = createSignal<string | null>("");

export function setLocalFontsEnabled() {
    setPermissionEnabledBase("local-fonts", localFontsEnabled_k, setLocalFontsEnabled_val);
}

const localFontsDescription = "This checks whether the website can access local fonts.";
export const localFontsEnabled_k: Knowledge = {
  title: "Local Fonts",
  description: localFontsDescription,
  detailedDescription: getDetailedPermissionString(localFontsDescription, permissionList["local-fonts"]),
  dependencies: ["window", "navigator", "permissions"],
  value: localFontsEnabled_val,
  set: setLocalFontsEnabled,
  code: getPermissionCodeString("local-fonts")
};
//// LOCAL FONTS ENABLED ////

//// MAGNETOMETER ENABLED ////
const [magnetometerEnabled_val, setMagnetometerEnabled_val] = createSignal<string | null>("");

export function setMagnetometerEnabled() {
    setPermissionEnabledBase("magnetometer", magnetometerEnabled_k, setMagnetometerEnabled_val);
}

const magnetometerDescription = "This checks whether the website can access the magnetometer sensor.";
export const magnetometerEnabled_k: Knowledge = {
  title: "Magnetometer",
  description: magnetometerDescription,
  detailedDescription: getDetailedPermissionString(magnetometerDescription, permissionList.magnetometer),
  dependencies: ["window", "navigator", "permissions"],
  value: magnetometerEnabled_val,
  set: setMagnetometerEnabled,
  code: getPermissionCodeString("magnetometer")
};
//// MAGNETOMETER ENABLED ////

//// MICROPHONE ENABLED ////
const [microphoneEnabled_val, setMicrophoneEnabled_val] = createSignal<string | null>("");

export function setMicrophoneEnabled() {
    setPermissionEnabledBase("microphone", microphoneEnabled_k, setMicrophoneEnabled_val);
}

const microphoneDescription = "This checks whether the website can access the microphone.";
export const microphoneEnabled_k: Knowledge = {
  title: "Microphone",
  description: microphoneDescription,
  detailedDescription: getDetailedPermissionString(microphoneDescription, permissionList.microphone),
  dependencies: ["window", "navigator", "permissions"],
  value: microphoneEnabled_val,
  set: setMicrophoneEnabled,
  code: getPermissionCodeString("microphone")
};
//// MICROPHONE ENABLED ////

//// MIDI ENABLED ////
const [midiEnabled_val, setMidiEnabled_val] = createSignal<string | null>("");

export function setMidiEnabled() {
    setPermissionEnabledBase("midi", midiEnabled_k, setMidiEnabled_val);
}

const midiDescription = "This checks whether the website can access MIDI devices.";
export const midiEnabled_k: Knowledge = {
  title: "MIDI",
  description: midiDescription,
  detailedDescription: getDetailedPermissionString(midiDescription, permissionList.midi),
  dependencies: ["window", "navigator", "permissions"],
  value: midiEnabled_val,
  set: setMidiEnabled,
  code: getPermissionCodeString("midi")
};
//// MIDI ENABLED ////

//// NOTIFICATIONS ENABLED ////
const [notificationsEnabled_val, setNotificationsEnabled_val] = createSignal<string | null>("");

export function setNotificationsEnabled() {
    setPermissionEnabledBase("notifications", notificationsEnabled_k, setNotificationsEnabled_val);
}

const notificationsDescription = "This checks whether the website can display notifications.";
export const notificationsEnabled_k: Knowledge = {
  title: "Notifications",
  description: notificationsDescription,
  detailedDescription: getDetailedPermissionString(notificationsDescription, permissionList.notifications),
  dependencies: ["window", "navigator", "permissions"],
  value: notificationsEnabled_val,
  set: setNotificationsEnabled,
  code: getPermissionCodeString("notifications")
};
//// NOTIFICATIONS ENABLED ////

//// PAYMENT HANDLER ENABLED ////
const [paymentHandlerEnabled_val, setPaymentHandlerEnabled_val] = createSignal<string | null>("");

export function setPaymentHandlerEnabled() {
    setPermissionEnabledBase("payment-handler", paymentHandlerEnabled_k, setPaymentHandlerEnabled_val);
}

const paymentHandlerDescription = "This checks whether the website can handle payments.";
export const paymentHandlerEnabled_k: Knowledge = {
  title: "Payment Handler",
  description: paymentHandlerDescription,
  detailedDescription: getDetailedPermissionString(paymentHandlerDescription, permissionList["payment-handler"]),
  dependencies: ["window", "navigator", "permissions"],
  value: paymentHandlerEnabled_val,
  set: setPaymentHandlerEnabled,
  code: getPermissionCodeString("payment-handler")
};
//// PAYMENT HANDLER ENABLED ////

//// PERSISTENT STORAGE ENABLED ////
const [persistentStorageEnabled_val, setPersistentStorageEnabled_val] = createSignal<string | null>("");

export function setPersistentStorageEnabled() {
    setPermissionEnabledBase("persistent-storage", persistentStorageEnabled_k, setPersistentStorageEnabled_val);
}

const persistentStorageDescription = "This checks whether the website can use persistent storage.";
export const persistentStorageEnabled_k: Knowledge = {
  title: "Persistent Storage",
  description: persistentStorageDescription,
  detailedDescription: getDetailedPermissionString(persistentStorageDescription, permissionList["persistent-storage"]),
  dependencies: ["window", "navigator", "permissions"],
  value: persistentStorageEnabled_val,
  set: setPersistentStorageEnabled,
  code: getPermissionCodeString("persistent-storage")
};
//// PERSISTENT STORAGE ENABLED ////

//// PUSH ENABLED ////
const [pushEnabled_val, setPushEnabled_val] = createSignal<string | null>("");

export function setPushEnabled() {
    setPermissionEnabledBase("push", pushEnabled_k, setPushEnabled_val);
}

const pushDescription = "This checks whether the website can use the Push API.";
export const pushEnabled_k: Knowledge = {
  title: "Push",
  description: pushDescription,
  detailedDescription: getDetailedPermissionString(pushDescription, permissionList.push),
  dependencies: ["window", "navigator", "permissions"],
  value: pushEnabled_val,
  set: setPushEnabled,
  code: getPermissionCodeString("push")
};
//// PUSH ENABLED ////

//// SCREEN WAKE LOCK ENABLED ////
const [screenWakeLockEnabled_val, setScreenWakeLockEnabled_val] = createSignal<string | null>("");

export function setScreenWakeLockEnabled() {
    setPermissionEnabledBase("screen-wake-lock", screenWakeLockEnabled_k, setScreenWakeLockEnabled_val);
}

const screenWakeLockDescription = "This checks whether the website can prevent the screen from turning off.";
export const screenWakeLockEnabled_k: Knowledge = {
  title: "Screen Wake Lock",
  description: screenWakeLockDescription,
  detailedDescription: getDetailedPermissionString(screenWakeLockDescription, permissionList["screen-wake-lock"]),
  dependencies: ["window", "navigator", "permissions"],
  value: screenWakeLockEnabled_val,
  set: setScreenWakeLockEnabled,
  code: getPermissionCodeString("screen-wake-lock")
};
//// SCREEN WAKE LOCK ENABLED ////

//// STORAGE ACCESS ENABLED ////
const [storageAccessEnabled_val, setStorageAccessEnabled_val] = createSignal<string | null>("");

export function setStorageAccessEnabled() {
    setPermissionEnabledBase("storage-access", storageAccessEnabled_k, setStorageAccessEnabled_val);
}

const storageAccessDescription = "This checks whether the website can access storage in a third-party context.";
export const storageAccessEnabled_k: Knowledge = {
  title: "Storage Access",
  description: storageAccessDescription,
  detailedDescription: getDetailedPermissionString(storageAccessDescription, permissionList["storage-access"]),
  dependencies: ["window", "navigator", "permissions"],
  value: storageAccessEnabled_val,
  set: setStorageAccessEnabled,
  code: getPermissionCodeString("storage-access")
};
//// STORAGE ACCESS ENABLED ////

//// TOP-LEVEL STORAGE ACCESS ENABLED ////
const [topLevelStorageAccessEnabled_val, setTopLevelStorageAccessEnabled_val] = createSignal<string | null>("");

export function setTopLevelStorageAccessEnabled() {
    setPermissionEnabledBase("top-level-storage-access", topLevelStorageAccessEnabled_k, setTopLevelStorageAccessEnabled_val);
}

const topLevelStorageAccessDescription = "This checks whether a top-level site can request storage access on behalf of embedded content.";
export const topLevelStorageAccessEnabled_k: Knowledge = {
  title: "Top-level Storage Access",
  description: topLevelStorageAccessDescription,
  detailedDescription: getDetailedPermissionString(topLevelStorageAccessDescription, permissionList["top-level-storage-access"]),
  dependencies: ["window", "navigator", "permissions"],
  value: topLevelStorageAccessEnabled_val,
  set: setTopLevelStorageAccessEnabled,
  code: getPermissionCodeString("top-level-storage-access")
};
//// TOP-LEVEL STORAGE ACCESS ENABLED ////

//// WINDOW MANAGEMENT ENABLED ////
const [windowManagementEnabled_val, setWindowManagementEnabled_val] = createSignal<string | null>("");

export function setWindowManagementEnabled() {
    setPermissionEnabledBase("window-management", windowManagementEnabled_k, setWindowManagementEnabled_val);
}

const windowManagementDescription = "This checks whether the website can manage windows.";
export const windowManagementEnabled_k: Knowledge = {
  title: "Window Management",
  description: windowManagementDescription,
  detailedDescription: getDetailedPermissionString(windowManagementDescription, permissionList["window-management"]),
  dependencies: ["window", "navigator", "permissions"],
  value: windowManagementEnabled_val,
  set: setWindowManagementEnabled,
  code: getPermissionCodeString("window-management")
};
//// WINDOW MANAGEMENT ENABLED ////


// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];

functionList.push(setAccelerometerEnabled);
functionList.push(setAccessibilityEventsEnabled);
functionList.push(setAmbientLightSensorEnabled);
functionList.push(setBackgroundSyncEnabled);
functionList.push(setCameraEnabled);
functionList.push(setCapturedSurfaceControlEnabled);
functionList.push(setClipboardReadEnabled);
functionList.push(setClipboardWriteEnabled);
functionList.push(setGeolocationEnabled);
functionList.push(setGyroscopeEnabled);
functionList.push(setLocalFontsEnabled);
functionList.push(setMagnetometerEnabled);
functionList.push(setMicrophoneEnabled);
functionList.push(setMidiEnabled);
functionList.push(setNotificationsEnabled);
functionList.push(setPaymentHandlerEnabled);
functionList.push(setPersistentStorageEnabled);
functionList.push(setPushEnabled);
functionList.push(setScreenWakeLockEnabled);
functionList.push(setStorageAccessEnabled);
functionList.push(setTopLevelStorageAccessEnabled);
functionList.push(setWindowManagementEnabled);

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