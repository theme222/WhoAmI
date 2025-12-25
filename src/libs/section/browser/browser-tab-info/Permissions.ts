import {
  wrenchScrewdriver,
  devicePhoneMobile,
  cog_8Tooth,
} from "solid-heroicons/outline";
import { type Knowledge } from "@/types/types";
import Bowser from "bowser";
import { createSignal } from "solid-js";
import { CheckDependancies } from "@/libs/helperFuncs";


// Contains all the functions that loads the values into the knowledge signals
const functionList: (() => void)[] = [];


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
