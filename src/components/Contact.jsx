import emailjs from "@emailjs/browser"
import { useRef } from "react"
import styles from "../styles/Home.module.css"

const Contact = () => {
  const form = useRef()
  const modal = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_akiewsq",
        "template_ebypndy",
        form.current,
        "AUZAJZ-K5L0LW-KwP",
      )
      .then(
        (result) => {
          console.log(result.text)
          modal.current.showModal()
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`${styles.formulaire} flex flex-col gap-4`}
      >
        <div className="flex flex-col items-center px-2">
          <div className="flex flex-row gap-4 ">
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                name="from_name"
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

        <label className="form-control w-full px-2">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="rounded-3xl input"
          />
        </label>

        <label className="form-control px-2">
          <textarea
            placeholder="Message"
            name="message"
            className="rounded-3xl textarea textarea-lg min-h-[200px]"
          ></textarea>
        </label>

        <button
          type="submit"
          className=" max-w-sm btn mt-5 bg-[#CEC79B] mx-auto text-slate-50 hover:bg-[#a8a06c]"
        >
          Submit
        </button>
      </form>

      <dialog id="my_modal_2" ref={modal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sent!</h3>
          <p className="py-4">
            Form submitted! I will get back to you as soon as possible ☺
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => modal.current.close()}>close</button>
        </form>
      </dialog>
    </>
  )
}

export default Contact
