import { Icon } from "solid-heroicons";
import { sun, moon } from "solid-heroicons/solid";
import { PreferencesContext, PreferencesInterface } from "@/context/PreferencesContext";
import { useContext } from "solid-js";
import { type AccSetStore } from "@/types/types";


export default function LightSwitch() {
  const preferences = useContext(PreferencesContext) as AccSetStore<PreferencesInterface>;
  return (
    <label class="toggle group-checked:text-white toggle-accent">
      <input
        type="checkbox"
        checked={preferences.acc.useLightMode}
        onInput={(e) => preferences.set("useLightMode", e.target.checked)}
      />
      <Icon path={moon} />
      <Icon path={sun} />
    </label>
  );
}
