import Section from "@/components/molecule/Section";
import Card from "@/components/molecule/Card";
import { computerDesktop } from "solid-heroicons/outline";
import { loadAllBrowserSection } from "@/libs/section/browser/load";
import { onMount } from "solid-js";

// Import knowledge sections
import { browserName_k, doNotTrack_k, language_k, pdfViewerEnabled_k } from "@/libs/section/browser/browser-tab-info/BrowserTabInfo";
import { device_k, operatingSystem_k, platform_k } from "@/libs/section/browser/browser-tab-info/DeviceInfo";
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
      <div id="main-section" class="grid w-full grid-cols-1 gap-10">
        <Section sectionName="Browser & Tab Info">
          <Card info={browserName_k} />
          <Card info={doNotTrack_k} />
          <Card info={language_k} />
          <Card info={pdfViewerEnabled_k} />
        </Section>
        <Section sectionName="Device Info">
          <Card info={operatingSystem_k} />
          <Card info={platform_k} />
          <Card info={device_k} />
        </Section>
      </div>
    </BaseLayout>
  );
}
