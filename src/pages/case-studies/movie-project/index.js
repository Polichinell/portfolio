import React from "react"
import CaseStudy from "@/components/CaseStudy"

function MoviePr() {
  const title = "Case Study: Movie Catalogue"
  const desc =
    "This is the description of the movie catalogue project case study"
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

export default MoviePr
