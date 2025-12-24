import type { IconInfo, Knowledge } from "@/types/types";
import { sun, questionMarkCircle } from "solid-heroicons/outline";
import { Icon } from "solid-heroicons";
import { GetUnavailableDependancies, ResetDependancies } from "@/libs/helperFuncs";
import { openOverlay } from "./DetailOverlay";
import { useContext } from "solid-js";
import { StatusContext, StatusResetFuncs } from "@/context/StatusContext";

export default function Card(props: { info: Knowledge }) {
  const info = props.info;
  const unavailableDeps = GetUnavailableDependancies(info.dependencies);
  const status = useContext(StatusContext)!;
  let displayValue = unavailableDeps.length == 0;

  return (
    <div
      onClick={() => openOverlay(info, status)}
      class="bg-base-300 rounded-md flex flex-col items-center justify-between
      h-80 p-5 [container-type:inline-size] cursor-help shadow-sm
      hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      <div class="flex justify-center items-center h-10 gap-5">
        <h3 class="text-[12cqw] font-semibold text-nowrap">{info.title}</h3>
      </div>
      <p class="text-[7cqw] text-center text-pretty">{info.description}</p>
      <div
        class={`flex justify-center gap-5 items-center p-3 w-full rounded-md
            text-xl text-neutral-content
            ${displayValue ? "bg-neutral-800" : "bg-error"}
            `}
        onClick={() => {ResetDependancies(info.dependencies)}}
      >
        <Icon path={info.icon || questionMarkCircle} class="size-10" />
        {displayValue ? info.value() : `Requires ${unavailableDeps[0]}`}
      </div>
    </div>
  );
}
