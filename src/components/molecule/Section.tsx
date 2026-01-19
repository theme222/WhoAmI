import { JSXElement } from "solid-js";
import Card from "./Card";
import { computerDesktop } from "solid-heroicons/outline";

export default function Section(props: {sectionName: string, children: JSXElement}) {
  return (
    <>
      <div class="tabs tabs-lift bg-transparent">
        <div class="tab tab-active">{props.sectionName}</div>
        <div class="tab-content bg-base-100 border-base-300 grid md:grid-cols-3 grid-cols-1 gap-15 p-10">
          {props.children}
        </div>
      </div>
    </>
  )

}
