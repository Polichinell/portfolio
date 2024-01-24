import React from "react"
import Link from "next/link"

function CaseStudy({ title, website, team, children }) {
  return (
    <div className="justify-center mx-auto text-center">
      <h1 className="text-5xl text-[#FDD443] pb-4">{title}</h1>

      <p className="italic text-md">
        {website === "no production" ? (
          <span>no production</span>
        ) : (
          <Link href={website} target="_BLANK">
            {website}
          </Link>
        )}
      </p>
      <div className="mt-[5rem] text-center bg-white bg-opacity-70 rounded-badge min-h-[300px] mx-5 pt-5">
        <div className="bg-amber-100 rounded-xl text-amber-900 text-center w-7/12 flex flex-col justify-center mx-auto mt-5 p-5">
          <h1 className="case-text text-4xl py-5">{team.name}</h1>
          {
            <p>
              My team:{" "}
              {team.member.map((member, index) => (
                <React.Fragment key={index}>
                  {index > 0 && " | "}
                  <Link href={member.site} target="_BLANK">
                    {member.name}
                  </Link>
                </React.Fragment>
              ))}
            </p>
          }
        </div>

        <div className="p-10">{children}</div>
      </div>
    </div>
  )
}

export default CaseStudy
