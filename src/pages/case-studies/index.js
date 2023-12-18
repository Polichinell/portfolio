import React from "react"
import Navbar2 from "@/components/CaseStudyMenu"
import Link from "next/link"

function index() {
  const studyPages = [
    { name: "e-commerce", title: "E-commerce Website" },
    { name: "pebble-work", title: "Pebble Work" },
    { name: "movie-project", title: "Movie Catalogue" },
  ]
  return (
    <>
      <div className="mb-[3rem]">
        <h1 className="text-[#F57956] text-5xl text-center pt-[5rem]">
          Case Studies
        </h1>
      </div>

      <div className="mt-[10rem] case-grid grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-5">
        {studyPages.map((page, index) => (
          <div key={index} className="card card-side bg-base-100 shadow-sm ">
            <figure
              className="lg:w-[15rem] bg-cover sm:w-[50px] md:w-[10rem]"
              style={{ backgroundImage: 'url("../low-poly-grid-haikei.png")' }}
            ></figure>
            <div className="card-body min-w-[300px]">
              <h2 className="card-title">{page.title}</h2>
              <p>Description here.</p>
              <div className="card-actions justify-end">
                <Link href={`/case-studies/${page.name}`}>
                  <button className="btn bg-[#FBE9AE] text-slate-50">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default index
