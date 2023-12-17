import React, { useState } from "react"
import styles from "@/styles/Projects.module.css"

function ProjectsMD() {
  const defaultImage = "../low-poly-orange-haikei.png"

  const projects = {
    project_01: {
      image: "https://i.imgur.com/t9TbhFm.png",
      website: "https://cinecoderss.vercel.app",
      github: "https://github.com/202306-NEA-DZ-FEW/movie-project-cinecoders",
      study: "/case-studies/movie-project",
      info: (
        <>
          A movie showcase website, using API to retrieve information about
          movies and actor.
          <br />
          Technologies: Next.js, TailwindCSS, MaterialUI, public API.
        </>
      ),
    },

    project_02: {
      image: "https://i.imgur.com/NQwHieA.png",
      website: "#",
      github: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-souqdz",
      study: "/case-studies/e-commerce",
      info: (
        <>
          A mock e-commerce website.
          <br />
          Technologies: Next.js, TailwindCSS, DaisyUI, Firebase, public API.
        </>
      ),
    },

    project_03: {
      image: "https://i.imgur.com/T0SAwEH.png",
      website: "https://pebble-work.vercel.app",
      github: "https://github.com/202306-NEA-DZ-FEW/Pebble-work",
      study: "/case-studies/pebble-work",
      info: (
        <>
          A platform to organize different types of volunteer events. This is
          our Capstone project for the Re:Coded&apos;s Front-End WebDev
          Bootcamp.
          <br />
          Technologies: Next.js, TailwindCSS, i18next, Firebase
        </>
      ),
    },
  }

  const [project, setProject] = useState({
    image: defaultImage,
    website: "",
    github: "",
    info: "",
  })

  const imageClick = (id) => {
    const key = `project_${id}`
    const project = projects[key]

    setProject((prevProject) => ({
      ...prevProject,
      image: project.image,
      website: project.website,
      github: project.github,
      info: project.info,
      study: project.study,
    }))

    setInfoVisible(false)
  }

  const [infoVisible, setInfoVisible] = useState(false)

  const infoWindow = () => {
    setInfoVisible(!infoVisible)
  }

  return (
    <>
      <h1
        className={`${styles.h1} smallestScreen text-center text-5xl pt-5 my-[5rem] text-[#F57956]`}
        id="projects"
      >
        Projects
      </h1>

      <section>
        <div className={`${styles.menuHex} avatar flex-row mb-5 gap-3`}>
          <div
            className={`${styles.maskHexagon} w-[5rem] mask mask-hexagon bg-[#FBE9AE] text-slate-50 text-center text-2xl hover:cursor-pointer`}
            onClick={() => imageClick("01")}
          >
            <p className="transform -translate-y-[-1.5rem]">01</p>
          </div>
          <div
            className={`${styles.maskHexagon} w-[5rem] mask mask-hexagon bg-[#FBE9AE] text-slate-50 text-center text-2xl hover:cursor-pointer`}
            onClick={() => imageClick("02")}
          >
            <p className="transform -translate-y-[-1.5rem]">02</p>
          </div>
          <div
            className={`${styles.maskHexagon} w-[5rem] mask mask-hexagon bg-[#FBE9AE] text-slate-50 text-center text-2xl hover:cursor-pointer`}
            onClick={() => imageClick("03")}
          >
            <p className="transform -translate-y-[-1.5rem]">03</p>
          </div>
        </div>

        <div className="justify-center">
          <div
            className={`${styles.boardyMD} flex items-center text-center border-[#FBE9AE] border-2 text-white rounded-xl
      bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div
              className={`bg-[#FDD443] bg-opacity-70 p-10 w-full ${
                infoVisible ? "visible" : "hidden"
              } ${styles.textMD}`}
            >
              {project.info}
            </div>
          </div>

          {project.image !== defaultImage ? (
            <ul
              className={`${styles.menuHorizontal} menu menu-horizontal flex justify-around w-[250px] bg-[#FDD443] rounded-box text-slate-50 mt-6`}
            >
              <li>
                <a
                  className="tooltip"
                  data-tip="Website"
                  href={project.website}
                  target="_BLANK"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip="Info" onClick={infoWindow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="tooltip"
                  data-tip="Case study"
                  href={project.study}
                  target="_BLANK"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          ) : (
            <ul
              className={`${styles.menuHorizontal} menu menu-horizontal flex justify-around w-1/3 bg-[#FDD443] rounded-box border-2 text-slate-50 mt-6`}
            >
              <p>Click on a button ♪</p>
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default ProjectsMD
