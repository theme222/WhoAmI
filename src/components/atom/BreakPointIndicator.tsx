import { createSignal, onCleanup, onMount } from "solid-js";

type Breakpoint = {
  name: string;
  query: string;
};

const breakpoints: Breakpoint[] = [
  { name: "2xl", query: "(min-width: 1536px)" },
  { name: "xl",  query: "(min-width: 1280px)" },
  { name: "lg",  query: "(min-width: 1024px)" },
  { name: "md",  query: "(min-width: 768px)" },
  { name: "sm",  query: "(min-width: 640px)" },
];

function getCurrentBreakpoint(): string {
  for (const bp of breakpoints) {
    if (window.matchMedia(bp.query).matches) {
      return bp.name;
    }
  }
  return "base";
}

export default function TailwindBreakpointIndicator() {
  const [breakpoint, setBreakpoint] = createSignal("base");

  const update = () => {
    setBreakpoint(getCurrentBreakpoint());
  };

  onMount(() => {
    update();
    window.addEventListener("resize", update);
  });

  onCleanup(() => {
    window.removeEventListener("resize", update);
  });

  return (
    <div
      class="
        fixed bottom-4 right-4 z-50
        rounded-lg px-4 py-2 text-sm text-white shadow-lg
        bg-gray-700
        sm:bg-blue-600
        md:bg-green-600
        lg:bg-yellow-600
        xl:bg-orange-600
        2xl:bg-red-600
      "
    >
      {breakpoint()}
    </div>
  );
}