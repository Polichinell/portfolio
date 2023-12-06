import React from "react"

function About() {
  return (
    <>
      <h1 id="about" className="text-center pt-5 text-5xl text-[#AE5770]">
        About me
      </h1>

      <div className="flex gap-10">
        <div
          className="bg-white bg-opacity-70 rounded-3xl w-7/12 mx-auto mt-5"
          style={{ minHeight: "450px" }}
        >
          <p className="p-8">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès
            qu&apos;il est prêt ou que la mise en page est achevée.
            Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
            Lipsum
          </p>{" "}
        </div>

        <div
          className="bg-white bg-opacity-70 rounded-3xl w-7/12 mx-auto mt-5"
          style={{ minHeight: "200px" }}
        >
          <p className="p-8">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès
            qu&apos;il est prêt ou que la mise en page est achevée.
            Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
            Lipsum
          </p>
        </div>
      </div>
    </>
  )
}

export default About
