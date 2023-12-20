import React from "react"
import Navbar2 from "@/components/CaseStudyMenu"
import Link from "next/link"

function index() {
  const studyPages = [
    { name: "pebble-work", title: "Pebble Work", desc: "Capstone Project!" },
    {
      name: "e-commerce",
      title: "E-commerce Website",
      desc: "Introduction to database work",
    },
    {
      name: "movie-project",
      title: "Movie Catalogue",
      desc: "First look at APIs",
    },
  ]
  return (
    <>
      <div className="mb-[3rem]">
        <h1 className="text-[#F57956] text-5xl text-center pt-[5rem]">
          Case Studies
        </h1>
      </div>

      <div className="mt-[10rem] case-grid grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-10">
        {studyPages.map((page, index) => (
          <Link key={index} href={`/case-studies/${page.name}`}>
            <div className="card w-96 bg-base-100 grid-case shadow-xl">
              <figure>
                <img src="/low-poly-grid-haikei.png" alt="Default" />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-[#F57956]">{page.title}</h2>
                <p>{page.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default index
