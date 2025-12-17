import { JSXElement } from "solid-js";

export default function BaseLayout(props: {children: JSXElement, class?: string}) {
  return (
    <div class={`w-full h-full p-10 flex items-start justify-center ${props.class || ''}`}>
      <div class="max-w-280 w-280 flex flex-col items-center gap-10">
        {props.children}
      </div>
    </div>
  );
}
