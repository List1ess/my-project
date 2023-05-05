import React from 'react'
import ContentBody from './ContentParts/ContentBody'
import ContentMain from './ContentParts/ContentMain'
import HomeNavbar from './HomeParts/HomeNavbar'

export default function Content() {
    return (
        <div>
            <HomeNavbar />
            <ContentMain />
            <ContentBody />
        </div>
    ) 
}