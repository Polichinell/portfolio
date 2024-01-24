import React from "react"
import Image from "next/image"
import CaseStudy from "@/components/CaseStudy"

function MoviePr() {
  const title = "Movie Catalogue Project"
  const website = "https://cinecoderss.vercel.app"

  const team = {
    member: [
      { name: "Walid B.", site: "https://github.com/walidbelharazem" },
      { name: "Khalil N.", site: "https://github.com/Khalil-NOUIz" },
      { name: "Mounia B.", site: "https://github.com/MouniaBelkheir" },
      { name: "Bushra D.", site: "https://github.com/Bushra369" },
    ],
    name: "cinecoders",
  }

  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy title={title} team={team} website={website}>
            <div className="flex items-center justify-center">
              <Image
                className="w-[fit-content]"
                width={100}
                height={100}
                src="/Loading-cuate.svg"
                alt="Work in Progress"
              />
            </div>
            <p>🚧 Work in Progress 🚧</p>

            <br />

            <p className="mb-5">
              Stay tuned for a full article about the project! Little magical
              bees are busy crafting and enhancing the content to be posted
              here. Your patience and understanding are highly appreciated.{" "}
              <br />
              Meanwhile, explore my existing content or the repository, and feel
              free to reach out for any inquiry.
              <br />
              Thank you!
            </p>
          </CaseStudy>
        </div>
      </div>
    </>
  )
}

export default MoviePr
