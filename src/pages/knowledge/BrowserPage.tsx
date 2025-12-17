import Section from "@/components/molecule/Section";
import Card from "@/components/molecule/Card";
import { computerDesktop } from "solid-heroicons/outline";
import { loadAllBrowserSection } from "@/libs/section/browser/load";
import { onMount } from "solid-js";

// Import knowledge sections
import { browserName, operatingSystem, platform, device } from "@/libs/section/browser/browser-tab-info/BrowserTabInfo";
import BaseLayout from "@/components/layout/BaseLayout";

export default function BrowserPage() {
  onMount(loadAllBrowserSection);

  return (
    <BaseLayout>
      <h2 class="text-5xl font-semibold">Browser Knowledge</h2>
      <p class="text-xl">
        These are the things the browser knows about you by default and are
        given to developers via the API.
      </p>
      <div id="main-section" class="grid w-full grid-cols-1">
        <Section sectionName="Browser & Tab Info">
          <Card info={browserName} />
          <Card info={operatingSystem} />
          <Card info={platform} />
          <Card info={device} />
        </Section>
      </div>
    </BaseLayout>
  );
}
