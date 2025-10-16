import React from "react"

function About() {
  return (
    <>
      <h1 id="about" className="text-center pt-5 text-5xl text-[#F57956]">
        About me
      </h1>

      <div className="flex gap-10">
        <div className="bg-white bg-opacity-70 box-info rounded-3xl w-3/4 mx-auto mt-[4rem]">
          <p className="p-[3rem] mt-3 text-md">
            Hello there!~ I&apos;m Lou, a coding enthusiast with a passion for
            pixels and a certain interest in simple yet pretty web designs.
            <br />
            <br />
            As a junior front-end developer, creating fun and engaging digital
            experiences is what I strive for. Balancing both form and function
            with HTML, CSS, and JavaScript. When I&apos;m not typing away, you
            can find me creating digital illustrations or learning new tools and
            technologies!
            <br />
            <br />
            Let&apos;s build something amazing together. ♪
          </p>{" "}
        </div>
      </div>
    </>
  )
}

export default About
