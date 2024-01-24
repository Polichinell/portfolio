import React from "react"
import Image from "next/image"
import CaseStudy from "@/components/CaseStudy"
import Card from "@/components/Projects/ProjectCard"

function Ecommerce() {
  const title = "Mock E-commerce website"
  const website = "no production"

  const team = {
    member: [
      { name: "Hocine B.", site: "https://github.com/hocine1212" },
      { name: "Manel Hasna H.", site: "https://github.com/hasnahadd" },
      { name: "Amel B.", site: "https://github.com/Amel7400" },
      { name: "Youssouf S.", site: "https://github.com/ysergma" },
    ],
    name: "souqDZ",
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

export default Ecommerce
