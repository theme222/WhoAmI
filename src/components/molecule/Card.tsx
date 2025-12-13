import { type JSXElement } from "solid-js";
import type { IconInfo } from "@/types/types";
import { sun, questionMarkCircle } from "solid-heroicons/outline";
import { Icon } from "solid-heroicons";

export default function Card(props: { icon?: IconInfo, title: string, description: string, val: any, children: JSXElement[] | JSXElement }) {
  return (
    <div class="bg-accent bg-transparent outline-3 outline-base-300 outline-dotted rounded-sm flex flex-col items-center gap-10 h-80 p-5 shadow-xl">
      <div class="flex justify-center items-center h-10 gap-5">
        <Icon path={props.icon || questionMarkCircle} class="size-10"/>
        <h3 class="text-3xl font-semibold">{props.title}</h3>
      </div>
      <p class="text-sm">
        {props.description}
      </p>
      <div class="">
        <div class="flex items-center">
          <span class="ml-2">{props.val}</span>
        </div>
      </div>
    </div>
  );
}
