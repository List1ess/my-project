import React from 'react'
import HomeNavbar from './HomeParts/HomeNavbar'
import MediaBody from './MediaParts/MediaBody'
import MediaMain from './MediaParts/MediaMain'

export default function Media() {
    return (
        <div>
            <HomeNavbar />
            <MediaMain />
            <MediaBody />
        </div>
    )
}