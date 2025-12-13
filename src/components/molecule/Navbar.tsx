import { A } from "@solidjs/router";
import LightSwitch from "../atom/LightSwitch";
export default function Navbar() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <A href="/" class="btn btn-ghost text-xl">WhoAmI?</A>
      </div>
      <div class="flex-none">
        <LightSwitch />
      </div>
    </div>
  );
}
