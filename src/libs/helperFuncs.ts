import { StatusContext, StatusInterface, StatusResetFuncs } from "@/context/StatusContext";
import { type Dependancy, type AccSetStore } from "@/types/types";
import { useContext } from "solid-js";

export function CheckDependancies(dependancies: Dependancy[]): boolean {
  const statusStore = useContext(StatusContext)!;
  for (const dep of dependancies)
    if (!statusStore.acc[dep])
      return false;
  return true;
}

export function ResetDependancies(dependancies: Dependancy[]): void {
  for (const dep of dependancies)
    StatusResetFuncs[dep]();
}

export function GetUnavailableDependancies(dependancies: Dependancy[]): Dependancy[] {
  const statusStore = useContext(StatusContext)!;
  const unavailableDependancies: Dependancy[] = [];
  for (const dep of dependancies)
    if (!statusStore.acc[dep])
      unavailableDependancies.push(dep);
  return unavailableDependancies;
}
