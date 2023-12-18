import React from "react"
import CaseStudy from "@/components/CaseStudy"

function MoviePr() {
  const title = "Movie Catalogue Project"
  const desc =
    "This is the description of the movie catalogue project case study"
  const website = "https://cinecoderss.vercel.app"

  const team = {
    member: [
      "Walid Belharazem",
      "Khalil Noui",
      "Mounia Belkheir",
      "Bushra Djalti",
      "and yours truly",
    ],
    name: "cinecoders",
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

export default MoviePr
