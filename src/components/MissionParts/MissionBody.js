import React from "react";

function Items({ text, description, description1 }) {
  return (
    <div className="rounded-lg bg-[#2B2D42] p-5">
      <div className="grid grid-cols-12 bg-[#2B2D42] p-4">
        <div className="col-span-10 self-center pl-2 lg:col-span-11">
          <div className="text-md text-white">{description1}</div>
        </div>
      </div>
    </div>
  );
}

export default function MissionBody() {
  return (
    <div>
      <div className="bg-[#2B2D42]">
        <Items description1="What had once been considered as philosophical constructs for a future time are now rapidly becoming the current reality. We are enmeshed into an emergent co-evolutionary human / synthetic symbiosis, not specifically by design, but by evolutionary momentum." />

        <Items description1="Separation between biological and non-biological forms of intelligence and life are becoming ever less distinguishable, or relevant.  Synthetic sentience may not necessarily be recognized as it emerges.  Life as it is currently known to be is no longer confined to biological processes or constructs, but is encompassing entities, systems and networks which behave biologically.  Synthetic biology is rapidly becoming manifest in myriad applications ranging from genetic modification to rendering entire organisms and hybrid forms of life on demand." />

        <Items description1="There is a steep learning curve (and by implication, filtration process), that shapes a planetary scale civilization to exist for x amount of time, slowly at first, consuming the planetary resources as it becomes more socially organized and technically advanced . . . until it reaches a relatively sudden acceleration (as we are now), when it either graduates to that next level of existence where it can become truly extra-terrestrial, or expunges itself or the home planet before it graduates beyond that point." />

        <Items description1="This suggests a necessary type of evolutionary imperative . . . to have a quasi self regulating cosmic ecosystem in which the vast majority of planetary civilizations who do not make the grade are subject to a defacto form of planetary quarantine confinement." />

        <Items description1="Only those planetary scale civilizations who haven't expunged themselves (or their home planet) through bad mismanagement, avarice, self induced planetary disaster or some other form of catastrophic dysfunction can actually graduate into this cosmic ecosystem." />

        <Items description1="We are, at this moment, rapidly approaching this planetary scale evolutionary eventhorizon." />
      </div>
    </div>
  );
}
