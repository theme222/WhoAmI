import { JSXElement } from "solid-js";
import Card from "./Card";
import { computerDesktop } from "solid-heroicons/outline";

export default function Section(props: {children: JSXElement[]}) {
  return (
    <>
      <div class="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 1" checked={true}/>
        <div class="tab-content bg-base-100 border-base-300 grid grid-cols-3 gap-20 p-10">
          {props.children}
        </div>
      </div>
    </>
  )

}
