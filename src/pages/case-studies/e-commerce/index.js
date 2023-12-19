import React from "react"
import CaseStudy from "@/components/CaseStudy"
import Card from "@/components/Projects/ProjectCard"

function Ecommerce() {
  const title = "Mock E-commerce website"
  const desc = "This is the description of the e-commerce project case study"
  const website = "no production"

  const team = {
    member: [
      "Hocine Benouddane",
      "Manel Hasna Hadoud",
      "Amel Batouche",
      "Youssouf Sergma",
      "and yours truly",
    ],
    name: "souqDZ",
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

export default Ecommerce
