import React from "react"
import CaseStudy from "@/components/CaseStudy"

function Ecommerce() {
  const title = "Case Study: E-commerce website"
  const desc = "This is the description of the e-commerce project case study"
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

export default Ecommerce
