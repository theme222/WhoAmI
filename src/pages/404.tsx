import { Icon } from "solid-heroicons";
import { questionMarkCircle } from "solid-heroicons/solid";

export default function NotFoundPage() {
  return (
    <div class="outline-base-300 outline-dotted rounded-sm flex flex-col items-center gap-10 h-80 p-5 shadow-xl">
      <div class="flex justify-center items-center h-10 gap-5">
        <Icon path={questionMarkCircle} class="w-5 h-5" />
        <h1 class="text-2xl font-bold">404</h1>
      </div>
      <p class="text-center">Page not found</p>
    </div>
  );
}
