import { arrowRight } from "solid-heroicons/outline";
import { Icon } from "solid-heroicons";
import { A,  } from "@solidjs/router";
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
      const navigate = useNavigate();
      
      // Github pages refresh fix
      if (sessionStorage.getItem("redirect")) {
        navigate(sessionStorage.getItem("redirect") as string, {replace: true});
        sessionStorage.removeItem("redirect");
      }
  } );
  
  return (
    <>
      <div class="absolute w-full flex flex-col justify-center items-center my-40 gap-20">
        <h1 class={`text-[10cqw] font-bold text-primary ${doAnimation() && status.acc.animationReady ? 'scale-100' : 'scale-0'} transition-transform tranform duration-800 ease-out`}>
          WhoAmI?
        </h1>
        <div class="flex justify-center items-center gap-10">
          <A class="btn btn-accent text-base-200 text-[2cqw] w-auto h-auto gap-4 p-2 items-center" href="/knowledge/browser">
            Let's find out
            <Icon path={arrowRight} class="size-8"/>
          </A>
        </div>
      </div>
    </>
  );
}
