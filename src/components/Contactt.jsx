import React from "react"
import styles from "../styles/Home.module.css"

function Contactt() {
  return (
    <form className={`${styles.formulaire} flex flex-col gap-4`}>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-4 ">
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full max-w-xs rounded-3xl"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="rounded-3xl input w-full max-w-xs"
            />
          </label>
        </div>
      </div>

      <label className="form-control w-full max-w-xs">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="rounded-3xl input w-[655px]"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <textarea
          placeholder="Message"
          className="rounded-3xl textarea textarea-lg w-[655px] min-h-[200px]"
        ></textarea>
      </label>

      <button
        type="submit"
        className=" max-w-sm btn mt-5 bg-[#CEC79B] mx-auto text-slate-50 hover:bg-[#a8a06c]"
      >
        Submit
      </button>
    </form>
  )
}

export default Contactt
