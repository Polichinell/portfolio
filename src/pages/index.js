import styles from "../styles/Home.module.css"
import { useState } from "react"
import Skillhex from "@/components/Skillhex"
import Planets from "@/components/svg/Planets"
import Navbar from "@/components/Navbar/Navbar"
import Flowers from "@/components/svg/Flowers"
import Blob from "@/components/svg/Blob"
import IntroSection from "@/components/IntroSection"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const Home = () => {
  const projectArr = ["Project 1", "Project 2", "Project 3"]

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

        <Projects />
      </div>
      <section id="contact" className={`${styles.contact} z-30 smallestScreen`}>
        <h1 className="text-center text-5xl my-[5rem] text-[#AE5770]">
          Contact
        </h1>
        <Contact />
      </section>
    </>
  )
}

export default Home
