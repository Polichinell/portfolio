import styles from "../styles/Home.module.css"
import { useState } from "react"
import Skillhex from "@/components/Skillhex"
import Link from "next/link"
import Image from "next/image"
import Planets from "@/components/svg/Planets"
import Navbar from "@/components/Navbar/Navbar"
import Flowers from "@/components/svg/Flowers"
import Blob from "@/components/svg/Blob"
import IntroSection from "@/components/IntroSection"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact"
import ProjectsMD from "@/components/Projects/ProjectsMD"
import { useMediaQuery } from "@mui/material"

const Home = () => {
  const projectArr = ["Project 1", "Project 2", "Project 3"]
  const projectLg = useMediaQuery("(max-width: 1023px)")

  return (
    <>
      <div className={` z-10 ${styles.container}`}>
        {/* Hero Section */}
        <div className="intro smallestScreen">
          <IntroSection />
        </div>

        <section className={`${styles.skills} my-[10rem]`}>
          <Skillhex className="z-8" />
        </section>
        {projectLg ? <ProjectsMD /> : <Projects />}
      </div>
      <section id="contact" className={`${styles.contact} z-30 smallestScreen`}>
        <h1 className="text-center text-5xl mt-[5rem] mb-4 text-[#F57956]">
          Contact
        </h1>

        <div className="flex w-full gap-5 justify-center slide-content mb-[3rem]">
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=l19.45.127.0@gmail.com&tf=cm"
            key="index"
            target="_BLANK"
            className="social-media-icon"
          >
            <Image
              className="w-[2.5rem]"
              width={50}
              height={50}
              src="/Google.svg"
              alt="Gmail"
            />
          </Link>

          <Link
            href="https://github.com/Polichinell"
            key="index"
            target="_BLANK"
            className="social-media-icon"
          >
            <Image
              className="w-[2.5rem]"
              width={50}
              height={50}
              src="/Github.svg"
              alt="Github"
            />
          </Link>
        </div>
        <Contact />
      </section>
    </>
  )
}

export default Home
