import { StatusContext, StatusInterface, StatusResetFuncs, IsStatus } from "@/context/StatusContext";
import { FeatureContext, FeatureInterface, IsFeature } from "@/context/FeatureContext";
import { type Dependancy, type AccSetStore } from "@/types/types";
import { useContext } from "solid-js";


export function CheckDependancies(dependancies: Dependancy[]): boolean {
  type depStore = Record<string, boolean>;
  const statusStore = useContext(StatusContext)!.acc as depStore;
  const featureStore = useContext(FeatureContext)!.acc as depStore;
  for (const dep of dependancies)
  {
    if (IsFeature(dep))  {
      if (!featureStore[dep])
        return false;
    }
    else if (IsStatus(dep)) {
      if (!statusStore[dep])
        return false;
    }
  }

  return true;
}

export function ResetDependancies(dependancies: Dependancy[]): void {
  type funcList = Record<string, () => void>; // When typescript doesn't want to do it's job
  for (const dep of dependancies) {
    try {
      if (IsStatus(dep)) (StatusResetFuncs as funcList)[dep]();
    }
    catch (error) {
      console.log(`Error resetting ${dep}:`, error);
      break;
    }
  }
}

export function ResetAllStatuses() {
  for (const [depFuncName, depFunc] of Object.entries(StatusResetFuncs)) {
    try {
      depFunc();
    }
    catch (error) {
      console.log(`Error resetting ${depFuncName}:`, error);
    }
  }
}

export function GetUnavailableDependancies(dependancies: Dependancy[]): Dependancy[] {
  type depStore = Record<string, boolean>;
  const statusStore = useContext(StatusContext)!.acc as depStore;
  const featureStore = useContext(FeatureContext)!.acc as depStore;
  const unavailableDependancies: Dependancy[] = [];

  for (const dep of dependancies)
  {
    if (IsFeature(dep)) {
      if (!featureStore[dep])
        unavailableDependancies.push(dep);
    }
    else if (IsStatus(dep)) {
      if (!statusStore[dep])
        unavailableDependancies.push(dep);
    }
  }

  return unavailableDependancies;
}
