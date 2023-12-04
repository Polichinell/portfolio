import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Skillhex from "@/components/Skillhex";
import Planets from "@/components/Planets";
import Navbar from "@/components/Navbar";

const Home = () => {
  const projectArr = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Polichinell, web artist♪</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}

      <section className="hero w-max">
        <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome (:
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Small and cute intro goes here, front end developpment toussa. And
              some more text goes here, front end developpment toussa.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-[#CA8652] rounded-lg bg-amber-800 hover:text-amber-900 hover:bg-amber-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get in touch
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Planets />
            {/*  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
          </div>
        </div>
      </section>

      <h1 id="about" className="text-center text-6xl text-amber-700">
        Titre
      </h1>

      <div className="flex gap-10">
        <div
          className="bg-white bg-opacity-70 rounded-3xl w-7/12 mx-auto mt-5"
          style={{ minHeight: "200px" }}
        >
          <p className="p-8">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum
          </p>{" "}
        </div>

        <div
          className="bg-white bg-opacity-70 rounded-3xl w-7/12 mx-auto mt-5"
          style={{ minHeight: "200px" }}
        >
          <p className="p-8">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum
          </p>
        </div>
      </div>

      <section className={`${styles.skills} my-[7rem]`}>
        <h2 className="text-5xl text-amber-700 my-[2rem]">Skills</h2>

        <Skillhex className="z-8" />
      </section>

      <section id="projects" className={styles.projects}>
        <h1 className="text-center text-5xl my-[5rem] text-amber-700">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-y-4 gap-x-[4rem] justify-center justify-items-center">
          {projectArr.map((project) => (
            <div className="card card-compact w-96 rounded-xl bg-base-100 shadow-md">
              <figure>
                <img src="https://i.imgur.com/1nayVcZ.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project}</h2>
                <p>Description description description</p>
                <div className="card-actions justify-center">
                  <button className="btn bg-amber-300 text-slate-50 hover:bg-amber-600">
                    Check it out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h1 className="text-center text-5xl mt-[5rem] text-amber-700">
          Contact
        </h1>

        <form className="form">
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

          <button type="submit" className="flex btn mt-5">
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-amber-700 text-center text-white mt-[40px] py-[20px]">
        <p>&copy; 2023 Fooooooooooooooooooooooter</p>
      </footer>
    </div>
  );
};

export default Home;
