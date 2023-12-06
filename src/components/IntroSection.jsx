import React from "react"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Blob from "./svg/Blob"

function IntroSection() {
  return (
    <>
      <div className="relative z-30">
        <div className="mb-[4.5rem] ">
          <Hero />{" "}
        </div>

        <About />
      </div>

      <div className="absolute inset-0 z-5 opacity-70">
        <Blob style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  )
}

export default IntroSection
