import React from "react"

function About() {
  return (
    <>
      <h1 id="about" className="text-center pt-5 text-5xl text-[#AE5770]">
        About me
      </h1>

      <div className="flex gap-10">
        <div className="bg-white bg-opacity-70 rounded-3xl w-3/4 mx-auto mt-[4rem]">
          <p className="p-[3rem] mt-3 text-md">
            Hello there!~ I&apos;m Chinell, a coding enthusiast with a passion
            for pixels and a certain interest in simple yet pretty web designs.
            <br />
            <br />
            As a junior front-end developer, crafting delightful and engaging
            digital experiences is my main quest. Brewing a special blend of
            form and function with HTML, CSS, and JavaScript as my special
            ingredients, I&apos;m on a mission to bring designs to life and add
            that extra sprinkle of magic to the web. When I&apos;m not typing
            away, you can find me creating digital illustrations, adding an
            extra touch of wonder to the experience.
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
