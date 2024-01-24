import React from "react"
import CaseStudy from "@/components/CaseStudy"

function Pebble() {
  const title = "Case Study: Capstone Project"
  const website = "https://pebble-work.vercel.app"

  const team = {
    member: [
      { name: "Takieddine D.", site: "https://github.com/takidilmi" },
      { name: "Manel Hasna H.", site: "https://github.com/hasnahadd" },
      { name: "Halla H.", site: "https://github.com/Halla24" },
      { name: "Youssouf S.", site: "https://github.com/ysergma" },
    ],
    name: "Team 7",
  }

  console.log(team)
  console.log(team.member[0].name)

  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy title={title} team={team} website={website}>
            <p>
              In tellus integer feugiat scelers. Tortor condimentum lacinia quis
              vel eros. Leo a diam sollicitudin tempor id eu nisl nunc. Risus
              nec feugiat in fermentum posuere urna nec tincidunt praesent.
              Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu
              felis bibendum ut tristique et egestas quis ipsum. Faucibus
              pulvinar elementum integer enim neque volutpat ac tincidunt.
              Auctor urna nunc id cursus metus aliquam eleifend mi. Fermentum
              leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi
              enim nunc faucibus a pellentesque. Aliquet porttitor lacus luctus
              accumsan tortor posuere. Sit amet commodo nulla facilisi nullam
              vehicula ipsum a arcu. Ipsum a arcu cursus vitae congue mauris
              rhoncus. Mauris a diam maecenas sed enim ut sem. Natoque penatibus
              et magnis dis. Blandit cursus risus at ultrices mi tempus
              imperdiet nulla.{" "}
            </p>
          </CaseStudy>
        </div>
      </div>
    </>
  )
}

export default Pebble
