import React from "react";

import Logo from "../../images/Logo.png";
import Space from "../../images/Space.jpg";
import Space1 from "../../images/Space1.jpg";
import Space2 from "../../images/Space2.jpg";

function Body({ page, date, description, image, image1 }) {
  return (
    <div class="col-span-2 rounded-2xl bg-[#2B2D42] p-5 text-white">
      <div class="flex">
        <div class="grow">
          <p class="pl-5 text-lg font-bold">{page}</p>
          <p class="pl-5 text-sm font-light">{date}</p>
        </div>
      </div>
      <div>
        <p class="p-5 text-justify indent-10 text-lg">{description}</p>
      </div>
      <div className="flex justify-evenly">
        <img src={image} class="w-64" alt="/" />
        <img src={image1} className="w-64" alt="/" />
      </div>
    </div>
  );
}

export default function MediaBody() {
  return (
    <div className="bg-[#2B2D42]">
      <Body
        profile={Logo}
        page="
        Interviews, appearances and presentations on broadcast media & other media platforms"
        date="May 5, 2023"
        description="Coast to Coast AM, Beyond Belief, PBS TV, Midnight in the Desert, the Unexplained, Tesla Tech, KGO radio, KCO radio Hyperspace, Future Theater, Vantage Point, Talk Universe, Kingdom of Nye, etc. Complete collection of on air radio and TV interview files below"
        image={Space}
        image1={Space1}
      />
      <Body
        profile={Logo}
        page="A Big History Approach to Emergent Future History"
        date="April 2, 2023"
        description="On-air discussion with George Noory - Beyond Belief Gaia TV"
        image={Space1}
        image1={Space}
      />
      <Body
        profile={Logo}
        page="
        Evolving Existence Matrices"
        date="March 22, 2023"
        description="Entering the Quantum Age Accelerating Toward the Evolutionary Eventhorizon Quantum Computing Quantum Nodes & Networks AI / ALife / Synthetic Sentience Synthetic Biology / Artificial Lifeforms Commoditized Genetic Content GMO Humans / Transhuman Mutation The Ubiquitous Computing Paradigm Neuroprosthetics / Mind Machine Interface Amplified Artificial Telepathy Quantum Biology / Quantum Cognition Intersection of Biophysics & Quantum Physics Internet as an Organism Transactional Process Brokeraging Emergent Blockchain Architectures Gravity Manipulation / Gravity Wells on Demand Transmutation of Elements Production of Stable Anti-matter Ambient Temperature Superconductivity ET & Human Genetic Prehistory AI, ALife & Transhuman enhancement accelerating coevolutionary symbiosis Pandemics - socioeconomic systems reset"
        image={Space2}
        image1={Space1}
      />
    </div>
  );
}
