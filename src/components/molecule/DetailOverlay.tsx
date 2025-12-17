// The detail overlay that happens when a user clicks on a card
import { createSignal, useContext } from "solid-js";
import { StatusContext } from "@/context/StatusContext";
import { Knowledge } from "@/types/types";
import { PreferencesContext } from "@/context/PreferencesContext";
import BaseLayout from "../layout/BaseLayout";
import { Icon } from "solid-heroicons";
import { questionMarkCircle } from "solid-heroicons/outline";
import { browserName } from "@/libs/section/browser/browser-tab-info/BrowserTabInfo";
import hljs from "highlight.js/lib/common"; // we don't need all the languages

const [overlayData, setOverlayData] = createSignal<Knowledge | null>(null);

export function openOverlay(data: Knowledge) {
  const status = useContext(StatusContext)!;
  setOverlayData(data);
  status.set("detailOverlayOpen", true);
}

export default function DetailOverlay() {
  const status = useContext(StatusContext)!;
  const preferences = useContext(PreferencesContext)!;
  setOverlayData(browserName);

  const codeHTML =
    overlayData()?.code ?
    overlayData()!.code.trim().split("\n").map((val, index) => {
      return `<pre data-prefix=${index + 1}><code>${hljs.highlight(val, { language: "javascript" }).value}</code></pre>`;
    }).join("\n") :
    "";

  return (
    <div
      id="detail-overlay-container"
      class={`absolute w-full h-full
        ${preferences.acc.useLightMode ? "bg-gray-950/80" : "bg-gray-950/90"}
        z-10 flex flex-col justify-center items-center
        ${status.acc.detailOverlayOpen ? "block" : "hidden"}
        overflow-hidden
        `}
    >
      <div id="grid-background-animated" class="absolute w-full h-full">
        <div class="grid-bg scale-120 flex flex-wrap w-full h-full -skew-y-4 animate-[grid-background-animation_10s_linear_infinite]">
        </div>
      </div>

      <BaseLayout class="z-11 mt-20">
        <div class="bg-base-100 size-20 flex flex-col items-center p-8 w-full h-auto rounded-md gap-8">
          <div class="w-full flex justify-center items-center gap-8">
            <Icon path={overlayData()?.icon || questionMarkCircle} class="size-16"/>
            <h2 class="text-5xl font-bold">{overlayData()?.title}</h2>
          </div>
          <p class="text-xl text-center">{overlayData()?.detailedDescription || overlayData()?.description}</p>
        </div>
        <div class="mockup-code w-full" innerHTML={codeHTML}>
        </div>
      </BaseLayout>
    </div>
  );
}
