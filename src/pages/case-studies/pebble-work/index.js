import React from "react"
import CaseStudy from "@/components/CaseStudy"

function Pebble() {
  const title = "Case Study: Pebble Work website"
  const desc = "This is the description of the Pebble Work website case study"
  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy title={title} description={desc} />
        </div>
      </div>
    </>
  )
}

export default Pebble
