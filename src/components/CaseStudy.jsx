import React from "react"

function CaseStudy({ title, description }) {
  return (
    <div className="justify-center mx-auto text-center">
      <h1 className="text-5xl text-[#FDD443]">{title}</h1>

      <div className="mt-[5rem] text-center bg-white bg-opacity-70 rounded-badge min-h-[300px] mx-5">
        <p className="p-5">{description}</p>
      </div>
    </div>
  )
}

export default CaseStudy
