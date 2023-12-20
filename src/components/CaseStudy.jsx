import React from "react"
import Link from "next/link"

function CaseStudy({ title, website, description, team }) {
  return (
    <div className="justify-center mx-auto text-center">
      <h1 className="text-5xl text-[#FDD443] pb-4">{title}</h1>

      <p className="italic text-md">
        <Link href={website} target="_BLANK">
          {website}
        </Link>
      </p>
      <div className="mt-[5rem] text-center bg-white bg-opacity-70 rounded-badge min-h-[300px] mx-5 pt-5">
        <div className="bg-amber-100 rounded-xl text-amber-900 text-center w-7/12 flex flex-col justify-center mx-auto mt-5 p-5">
          <h1 className="case-text text-4xl py-5">{team.name}</h1>
          {
            <p>
              My team:{" "}
              <Link href={team.member[0].site} target="_BLANK">
                {team.member[0].name}
              </Link>
              {" | "}
              <Link href={team.member[1].site} target="_BLANK">
                {team.member[1].name}
              </Link>
              {" | "}
              <Link href={team.member[2].site} target="_BLANK">
                {team.member[2].name}
              </Link>
              {" | "}
              <Link href={team.member[3].site} target="_BLANK">
                {team.member[3].name}
              </Link>
              {" | "}
              {team.member[4] ? (
                <>
                  {" | "}{" "}
                  <Link href={website} target="_BLANK">
                    {team.member[4].name}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </p>
          }
        </div>

        <p className="p-20">{description}</p>
      </div>
    </div>
  )
}

export default CaseStudy
