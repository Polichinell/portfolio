import React from "react"

import Link from "next/link"

function index() {
  const studyPages = [
    { name: "e-commerce", title: "E-commerce Data" },
    { name: "e-reger", title: "E-cogregerce Data" },
    { name: "e-reger", title: "E-cogregerce Data" },
    { name: "e-reger", title: "E-cogregerce Data" },
  ]
  return (
    <>
      <div>
        <h1 className="text-[#AE5770] text-5xl text-center pt-[3rem]">
          Case Studies
        </h1>

        <div class="mt-[5rem] grid grid-cols-2 gap-10 px-10">
          {studyPages.map((page, index) => (
            <div key={index} className="card card-side bg-base-100 shadow-xl">
              <figure className="max-w-[300px]">
                <img src="../low-poly-grid-haikei.png" alt="Movie" width="20" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{page.title}</h2>
                <p>Description here</p>
                <div className="card-actions justify-end">
                  <Link href={`/case-studies/${page.name}`}>
                    <button className="btn btn-primary">Read more</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default index
