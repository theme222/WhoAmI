import { arrowRight } from "solid-heroicons/outline";
import { Icon } from "solid-heroicons";
import { A } from "@solidjs/router";
import Navbar from "@/components/molecule/Navbar";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { onMount, useContext } from "solid-js";
import { StatusContext, StatusInterface } from "@/context/StatusContext";
import { AccSetStore } from "@/types/types";

export default function Root() {
  const status = useContext(StatusContext)!;
  const [doAnimation, setDoAnimation] = createSignal(false);

  onMount(() => {
      setTimeout(() => setDoAnimation(true), 100)
  } );
  
  return (
    <>
      <div class="absolute w-full flex flex-col justify-center items-center my-40 gap-20">
        <h1 class={`text-9xl font-bold text-primary ${doAnimation() && status.acc.animationReady ? 'scale-100' : 'scale-0'} transition-transform tranform duration-800 ease-out`}>
          WhoAmI?
        </h1>
        <div class="flex justify-center items-center gap-10">
          <A class="btn btn-accent text-base-200 text-xl w-auto h-20 gap-4 items-center" href="/knowledge/browser">
            Let's find out
            <Icon path={arrowRight} class="size-8"/>
          </A>
        </div>
      </div>
    </>
  );
}
