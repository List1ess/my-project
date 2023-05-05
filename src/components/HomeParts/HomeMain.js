import React from "react";
import Typed from "react-typed";

// Images
import Space from "../../images/Space.jpg";

export default function HomeMain() {
    return (
        <div>
            <div className="h-[570px] w-full bg-[#2F2E41] md:relative lg:relative">
                <div>
                    <img
                        className="absolute h-[570px] w-full object-cover opacity-40"
                        src={Space}
                        alt="LandingBackground"
                    />
                </div>
                <div className="relative flex h-screen flex-col py-48">
                    <div className="mt-4 items-center text-center">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">
                            SPACE
                            <Typed
                                className="sm:text-5xl pl-2 text-4xl font-bold text-white md:pl-4 md:text-5xl"
                                strings={["EXPLORER", "ADVENTURER", "TRAVELER"]}
                                typeSpeed={120}
                                backSpeed={140}
                                loop
                            />
                        </h1>
                        <h2 className="mt-5 text-lg font-bold text-white sm:text-2xl ">
                            HISTORY OF THE FUTURE OF THE WORLD
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}