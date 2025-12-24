// Contains all the functions that loads the values into the knowledge signals

import { loadAllBrowserTabInfo } from "./browser-tab-info/BrowserTabInfo";
import { loadAllDeviceInfo } from "./browser-tab-info/DeviceInfo";

const functionList: (() => void)[] = [];

functionList.push(loadAllBrowserTabInfo);
functionList.push(loadAllDeviceInfo)

export function loadAllBrowserSection() {
  functionList.forEach(func => func());
}
