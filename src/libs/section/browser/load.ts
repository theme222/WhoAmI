// Contains all the functions that loads the values into the knowledge signals

const functionList: (() => void)[] = [];
import { loadAllBrowserTabInfo } from "./browser-tab-info/BrowserTabInfo";
functionList.push(loadAllBrowserTabInfo);

export function loadAllBrowserSection() {
  functionList.forEach(func => func());
}
