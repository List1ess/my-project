import React from 'react'
import HomeBody from './HomeParts/HomeBody';
import HomeNavbar from "./HomeParts/HomeNavbar";
import TechMain from './TechParts/TechMain';

export default function Tech() {
    return (
        <div>
            <HomeNavbar />
            <HomeBody />
            <TechMain />
        </div>
    )
}