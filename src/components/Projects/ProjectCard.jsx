import React from "react"

function ProjectCard({ title, team, website }) {
  return (
    <div className="bg-amber-100 rounded-xl text-amber-900 text-center w-7/12 flex flex-col justify-center mx-auto">
      <h1 className="text-4xl py-5">{title}</h1>
      <p className="italic text-sm">{website}</p>

      <p>
        {team[0]}, {team[1]}, {team[2]}, {team[3]}, {team[4]}
        {team[5] ? <>, {team[5]}</> : <></>}
      </p>
    </div>
  )
}

export default ProjectCard
