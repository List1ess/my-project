import React from "react";
import HomeBody from "./HomeParts/HomeBody";
import HomeNavbar from "./HomeParts/HomeNavbar";
import HomeMain from "./HomeParts/HomeMain";
import HomeFooter from "./HomeParts/HomeFooter";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <HomeMain />
      <HomeBody />
      <HomeFooter />
    </div>
  );
}
