import React from "react";
import ArchiveBody from "./ArchiveParts/ArchiveBody";
import ArchiveMain from "./ArchiveParts/ArchiveMain";
import ArchiveSection from "./ArchiveParts/ArchiveSection";
import HomeNavbar from "./HomeParts/HomeNavbar";

export default function Archive() {
  return (
    <div>
        <HomeNavbar />
        <ArchiveMain />
        <ArchiveBody />
        <ArchiveSection />
    </div>
  );
}
