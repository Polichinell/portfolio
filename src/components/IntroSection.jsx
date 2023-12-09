import React from "react"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Blob from "./svg/Blob"

function IntroSection() {
  return (
    <>
      <div className="relative z-30 mb-[5rem]">
        <div className="mb-[4.5rem] ">
          <Hero />{" "}
        </div>

        <About />
      </div>

      <div className="absolute inset-[3rem] z-5 opacity-70 max-h-[100px]">
        <Blob />
      </div>
    </>
  )
}

export default IntroSection
