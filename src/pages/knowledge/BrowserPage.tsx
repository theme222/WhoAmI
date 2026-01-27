import Section from "@/components/molecule/Section";
import Card from "@/components/molecule/Card";
import { computerDesktop } from "solid-heroicons/outline";
import { loadAllBrowserSection } from "@/libs/section/browser/load";
import { onMount } from "solid-js";

// Import knowledge sections
import { browserName_k, doNotTrack_k, language_k, pdfViewerEnabled_k } from "@/libs/section/browser/browser-tab-info/BrowserTabInfo";
import { device_k, operatingSystem_k, platform_k } from "@/libs/section/browser/browser-tab-info/DeviceInfo";
import BaseLayout from "@/components/layout/BaseLayout";
import {
  accelerometerEnabled_k,
  accessibilityEventsEnabled_k,
  ambientLightSensorEnabled_k,
  backgroundSyncEnabled_k,
  cameraEnabled_k,
  capturedSurfaceControlEnabled_k,
  clipboardReadEnabled_k,
  clipboardWriteEnabled_k,
  geolocationEnabled_k,
  gyroscopeEnabled_k,
  localFontsEnabled_k,
  magnetometerEnabled_k,
  microphoneEnabled_k,
  midiEnabled_k,
  notificationsEnabled_k,
  paymentHandlerEnabled_k,
  persistentStorageEnabled_k,
  pushEnabled_k,
  screenWakeLockEnabled_k,
  storageAccessEnabled_k,
  topLevelStorageAccessEnabled_k,
  windowManagementEnabled_k
} from "@/libs/section/browser/browser-tab-info/Permissions";

export default function BrowserPage() {
  onMount(() => {
    loadAllBrowserSection();
  });

  return (
    <BaseLayout>
      <h2 class="text-5xl font-semibold">Browser Knowledge</h2>
      <p class="text-xl">
        These are the things the browser knows about you by default and are
        given to developers via the API.
      </p>
      <main id="main-section" class="grid w-full grid-cols-1 gap-10">
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
        <Section sectionName="Permissions">
          <Card info={accelerometerEnabled_k} />
          <Card info={accessibilityEventsEnabled_k} />
          <Card info={ambientLightSensorEnabled_k} />
          <Card info={backgroundSyncEnabled_k} />
          <Card info={cameraEnabled_k} />
          <Card info={capturedSurfaceControlEnabled_k} />
          <Card info={clipboardReadEnabled_k} />
          <Card info={clipboardWriteEnabled_k} />
          <Card info={geolocationEnabled_k} />
          <Card info={gyroscopeEnabled_k} />
          <Card info={localFontsEnabled_k} />
          <Card info={magnetometerEnabled_k} />
          <Card info={microphoneEnabled_k} />
          <Card info={midiEnabled_k} />
          <Card info={notificationsEnabled_k} />
          <Card info={paymentHandlerEnabled_k} />
          <Card info={persistentStorageEnabled_k} />
          <Card info={pushEnabled_k} />
          <Card info={screenWakeLockEnabled_k} />
          <Card info={storageAccessEnabled_k} />
          <Card info={topLevelStorageAccessEnabled_k} />
          <Card info={windowManagementEnabled_k} />
        </Section>
      </main>
    </BaseLayout>
  );
}
