import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import Skillhex from "@/components/Skillhex"
import Planets from "@/components/svg/Planets"
import Navbar from "@/components/Navbar"
import Flowers from "@/components/svg/Flowers"
import Blob from "@/components/svg/Blob"
import IntroSection from "@/components/IntroSection"
import Projects from "@/components/Projects"

const Home = () => {
  const projectArr = ["Project 1", "Project 2", "Project 3"]

  return (
    <div className={styles.container}>
      <Head>
        <title>Polichinell | web artist♪</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/icons-96.png" />
      </Head>

      {/* Hero Section */}
      <div className="intro">
        <IntroSection />
      </div>

      <section className={`${styles.skills} my-[7rem]`}>
        <Skillhex className="z-8" />
      </section>

      <Projects />

      <section id="contact" className={styles.contact}>
        <h1 className="text-center text-5xl my-[5rem] text-[#AE5770]">
          Contact
        </h1>

        <form className="formulaire pl-[6rem]">
          <div className="flex flex-row gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className=" ">First Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span>Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span>Subject</span>
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Type here"
              className="input input-bordered w-[655px]"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span>Message</span>
            </div>
            <textarea
              placeholder="Your message here"
              className="textarea textarea-bordered textarea-lg w-[655px] min-h-[200px]"
            ></textarea>
          </label>

          <button
            type="submit"
            className="flex btn mt-5 bg-[#CEC79B] text-slate-50 hover:bg-[#a8a06c]"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default Home
