import React from "react";

// Link
import { Link } from "react-router-dom";

function Items({
  title,
  description1,
  description2,
  description3,
  description4,
}) {
  return (
    <div>
      <div>
        <h6 className="font-medium text-gray-400">{title}</h6>
        <ul className="mt-2">
          <li className="py-2 text-sm">{description1}</li>
          <li className="py-2 text-sm">{description2}</li>
          <li className="py-2 text-sm">{description3}</li>
          <li className="py-2 text-sm">{description4}</li>
        </ul>
      </div>
    </div>
  );
}
export default function HomeFooter() {
  return (
    <div className="mx-auto grid gap-2 bg-[#2B2D42] px-16 py-6 text-gray-300 2xl:grid-cols-2">
      <div>
        <h1 className="text-2xl">Space Explorer</h1>
        <p className="py-1 text-justify indent-10 text-md mt-5">
          This system dynamic operates like a fractal, at many scales, from
          localized microcosm to planetary, in biological, societal, economic,
          cultural and even political systems as we are witnessing now.
        </p>
      </div>
      <div className="mt-5 flex justify-around 2xl:col-span-1">
        <Items
          title="Solutions"
          description1="Rocketship"
          description2="Spaceship"
          description3="Astronaut"
          description4=""
        />
        <Items
          title="Support"
          description1="Documentation"
          description2="Guides"
          description3="Insights"
          description4=""
        />
        <Items
          title="Team"
          description1="About"
          description2="Jobs"
          description3="Careers"
        />
        <Link to="/privacy">
          <Items
            title="Legal"
            description1="Claim"
            description2="Policy"
            description3="Terms"
          />
        </Link>
      </div>
    </div>
  );
}
