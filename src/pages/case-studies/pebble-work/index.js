import React from "react"
import CaseStudy from "@/components/CaseStudy"

function Pebble() {
  const title = "Case Study: Pebble Work website"
  const desc = "This is the description of the Pebble Work website case study"
  const website = "https://pebble-work.vercel.app"

  const team = {
    member: [
      "Takieddine Dilmi",
      "Manel Hasna Hadoud",
      "Halla Hamidi",
      "Youssouf Sergma",
      "and yours truly",
    ],
    name: "Team 7",
  }

  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy
            title={title}
            description={desc}
            team={team}
            website={website}
          />
        </div>
      </div>
    </>
  )
}

export default Pebble
