import React from "react";
import { Timeline } from "../components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
   <div>
  <div className="mb-8 text-md font-normal text-white md:text-sm dark:text-neutral-200">
  <span className="font-semibold">Organised Bharat Expo National Level Hackathon</span> with full chaos and innovation:
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>✅ Coordinated 200+ participants across 3 rounds</li>
    <li>✅ Setup real-time judging system (and coffee overflow)</li>
    <li>✅ Managed last-minute WiFi crises like a pro</li>
    
  </ul>
</div>


  <div className="grid grid-cols-1 grid-rows-1 gap-4">
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
    {/* Image 1 */}
    <img
      src="/assets/photo1.jpg"
      alt="hero template"
      className="h-20 w-full rounded-lg object-cover shadow md:h-60 lg:h-70"
    />

    {/* Tall Image - Span 2 rows */}
    <img
      src="/assets/me.jpg"
      alt="feature template"
      className="row-span-2 h-full w-full rounded-lg object-cover shadow md:h-full lg:h-full"
    />

    {/* Image 3 */}
    <img
      src="/assets/photo2.jpg"
      alt="feature template"
      className="h-40 w-full rounded-lg object-cover shadow md:h-60 lg:h-70"
    />
  </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <div className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
  <h1 className="font-bold">🧠Microsoft x Fetch.ai Intro Session</h1>
  <p>
    Attended an exclusive session at Microsoft introducing Fetch.ai’s autonomous agents and their real-world applications in AI automation.
  </p>
</div>

            
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
    {/* Image 1 */}
    <img
      src="/assets/microsoft.jpg"
      alt="hero template"
      className="h-20 w-full rounded-lg object-cover shadow md:h-60 lg:h-70"
    />

    {/* Tall Image - Span 2 rows */}
    <img
      src="/assets/microsoft1.jpg"
      alt="feature template"
      className="row-span-2 h-full w-full rounded-lg object-cover shadow md:h-full lg:h-full"
    />

    {/* Image 3 */}
    <img
      src="/assets/microsoft3.jpg"
      alt="feature template"
      className="h-40 w-full rounded-lg object-cover shadow md:h-60 lg:h-70"
    />
  </div>
          </div>
     
      ),
    },
    {
      title: "2024",
content: (
  <div>
    <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
      Participated in the <span className="font-bold">Fetch.ai Bootcamp</span> organized by <span className="font-bold">Fetch.ai Innovation Lab MIET</span> where we explored the power of Autonomous Economic Agents (AEAs), built real-world dApps using Fetch.ai SDK, and collaborated on futuristic AI + blockchain solutions.
    </p>
    <div className="mb-8">
      <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
        ✅ Learned how to build and deploy Fetch.ai autonomous agents
      </div>
      <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
        ✅ Created a smart scheduling system integrated with Cal.live and uAgents
      </div>
      
    </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/fetch1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/fetch2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
        
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}