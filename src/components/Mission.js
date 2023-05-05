import React from "react"
import HomeFooter from "./HomeParts/HomeFooter"
import HomeNavbar from "./HomeParts/HomeNavbar"
import MissionBody from "./MissionParts/MissionBody"
import MissionMain from "./MissionParts/MissionMain"
import MissionSection from "./MissionParts/MissionSection"

export default function Mission()  {
    return (
        <div>
            <HomeNavbar />
            <MissionMain />
            <MissionBody />
            <MissionSection />
            <HomeFooter />
        </div>
    )
}