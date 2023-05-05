import React from "react";

// Images
import Rocket from "../../images/Rocket.jpg";
import Space from "../../images/Man.jpg";
import Man from "../../images/Spaceship.jpg";

function Image({ image, name }) {
  return (
    <div className="flex w-full flex-col rounded-lg">
      <img className="mx-auto my-2 w-64" src={image} alt="/" />
      <h2 className="block text-center text-2xl font-bold text-white lg:hidden">
        {name}
      </h2>
    </div>
  );
}

function Items({ title, description }) {
  return (
    <div className="my-4 w-full md:flex-col rounded-lg p-8 sm:hidden lg:block hidden">
      <h2 className="text-center text-2xl text-white font-bold">{title}</h2>
      <p className="mt-8 text-justify indent-10 text-md text-white font-sans">
        {description}
      </p>
    </div>
  );
}

export default function ArchiveSection() {
  return (
    <div className="w-full px-4 pt-6 bg-[#2B2D42]">
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Image image={Rocket} name="June 2009" />
        <Image image={Man} name="September 30, 2009" />
        <Image image={Space} name="October 2009 - December 2009" />
      </div>
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Items
          title="June 2009"
          description="New York University Library, University of California San Diego Library, and University of Illinois Urbana-Champaign Library agree to merge Archivists’ Toolkit (AT) and Archon archives information management applications. Andrew W. Mellon offers funding to support the endeavor."
        />
        <Items
          title="September 30, 2009"
          description="AT and Archon stop development but continue user support and fixing of reported bugs."
        />
        <Items
          title="October 2009 - December 2009"
          description="High-level functional requirements established
          Name of ArchivesSpace adopted for product derived from the integration of AT and Archon"
        />
      </div>
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Image image={Rocket} name="January 2010" />
        <Image image={Man} name="January 2010 - June 2011" />
        <Image image={Space} name="January 2010 - June 2012" />
      </div>
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Items
          title="January 2010"
          description="Funding for project planning phase by Andrew W. Mellon Foundation"
        />
        <Items
          title="January 2010 - June 2011"
          description="Business modeling and planning."
        />
        <Items
          title="January 2010 - June 2012"
          description="Functional specifications drafted and vetted by community."
        />
      </div>
    </div>
  );
}
