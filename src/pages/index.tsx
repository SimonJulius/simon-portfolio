import React from "react"
import "fontsource-open-sans"

import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import "../styles/generic.scss"

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  )
}
