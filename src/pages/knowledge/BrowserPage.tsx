import Section from "@/components/molecule/Section";
import Card from "@/components/molecule/Card";
import { computerDesktop } from "solid-heroicons/outline";


export default function BrowserPage() {
  return (<>
    <div class="w-full h-full bg-purple-100 p-10 flex justify-center items-center">
      <div class="max-w-500 bg-red-200 flex flex-col justify-center items-center gap-10">
        <h2 class="text-5xl font-semibold">Some <span class="italic">basic</span> knowledge</h2>
        <p class="text-xl">These are the things the browser knows about you by default and are given to developers via the API.</p>

        <div id="main-section" class="bg-base-100 rounded-sm grid w-full grid-cols-1">
          <Section>
            <Card title="Browser Type" description="The most basic of information. Some users use Chrome. Some users use Safari. Personally tho? I use firefox." val={2} icon={computerDesktop}/>
            <Card title="Browser Type" description="how are you doing today?" val={2} icon={computerDesktop}/>
            <Card title="Browser Type" description="how are you doing today?" val={2} icon={computerDesktop}/>
          </Section>
        </div>
      </div>
    </div>

  </>)

}
