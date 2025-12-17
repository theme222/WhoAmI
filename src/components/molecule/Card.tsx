import type { IconInfo, Knowledge } from "@/types/types";
import { sun, questionMarkCircle } from "solid-heroicons/outline";
import { Icon } from "solid-heroicons";
import { GetUnavailableDependancies } from "@/libs/helperFuncs";

export default function Card(props: { info: Knowledge }) {
  const info = props.info;
  const unavailableDeps = GetUnavailableDependancies(info.dependencies);
  let displayValue = unavailableDeps.length == 0;

  return (
    <div class="bg-base-300 rounded-sm flex flex-col items-center justify-between h-80 p-5 shadow-xl [container-type:inline-size]">
      <div class="flex justify-center items-center h-10 gap-5">
        <h3 class="text-[12cqw] font-semibold text-nowrap">{info.title}</h3>
      </div>
      <p class="text-[7cqw] text-center text-pretty">{info.description}</p>
      <div
        class={`flex justify-center gap-5 items-center p-3 w-full rounded-md text-xl text-neutral-content ${displayValue ? 'bg-neutral-800' : 'bg-error'}`}
      >
        <Icon path={info.icon || questionMarkCircle} class="size-10" />
        {displayValue ? info.value() : `Requires ${unavailableDeps.join(', ')}`}
      </div>
    </div>
  );
}
