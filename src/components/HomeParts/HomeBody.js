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

export default function HomeBody() {
  return (
    <div className="w-full px-4 pt-6 bg-[#2B2D42]">
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Image image={Rocket} name="Rocketship" />
        <Image image={Man} name="Spaceship" />
        <Image image={Space} name="Astronaut" />
      </div>
      <div className="lg:gap-30 b mx-auto grid max-w-[1536px] gap-8 lg:grid-cols-3">
        <Items
          title="ROCKET"
          description="Rocketships are likely to continue playing a crucial role in space exploration and transportation. With advancements in technology and materials, we may see improvements in rocket engines and propulsion systems, allowing for more efficient and faster space travel. Additionally, with the increasing demand for space tourism and the potential for space colonization, there may be more commercial rocket companies competing in the market, driving innovation and development."
        />
        <Items
          title="SPACESHIP"
          description="Spaceships are likely to become more advanced and sophisticated, with new technologies and materials allowing for longer and more ambitious space missions. Spaceships may also become more autonomous and intelligent, with advanced AI and robotics enabling them to make decisions and carry out tasks with greater accuracy and efficiency. This could potentially lead to the development of fully autonomous spacecraft that can explore the universe without human intervention."
        />
        <Items
          title="ASTRONAUT"
          description="Astronauts will likely continue to play a vital role in space exploration and research, as we continue to push the boundaries of what is possible in space. One area where astronauts may become more important in the future is in the construction and maintenance of space infrastructure, such as space stations, habitats, and bases. As we look to establish a more permanent human presence in space, astronauts will be needed to carry out the construction and upkeep of these facilities, as well as conduct scientific research and exploration missions."
        />
      </div>
    </div>
  );
}
