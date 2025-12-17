import { AccSetStore } from "@/types/types";
import { PreferencesContext, PreferencesInterface } from "../../context/PreferencesContext";
import { useContext } from "solid-js";
import { Portal } from "solid-js/web";


export default function Background (){

  return (
    <div class={`absolute -z-10 w-full h-full bg-base-200`} >
    </div>
  );
}
