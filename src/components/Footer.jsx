import React from "react"
import { useRef } from "react"
import Link from "next/link"

function Footer() {
  const modal = useRef()
  const openModal = (e) => {
    e.preventDefault()
    modal.current.showModal()
  }

  return (
    <>
      <div>
        <div className="footerSVG">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#FEA28B"
              fillOpacity="1"
              d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,165.3C672,203,768,245,864,240C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg-[#FEA28B] text-center text-[#FEFBF2] pb-[20px] w-full">
          <div className="flex flex-row justify-center gap-[4rem]">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/case-studies">
              <p>Case Studies</p>
            </Link>
            <div onClick={openModal}>
              <p className=" hover:cursor-pointer">Credits</p>
            </div>
          </div>
          <div className="opacity-60 mt-4 text-sm">
            <p>&copy; Chinell - 2023</p>
          </div>
        </div>
      </div>

      <dialog id="credits_modal" ref={modal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-[#FEA28B]">Credits</h3>
          <p className="py-4">
            <ul>
              <li>
                Flower illustration by{" "}
                <Link href="storyset.com/" target="_BLANK">
                  Storyset
                </Link>
              </li>
              <li>
                Hexagon grid by{" "}
                <Link href="https://codepen.io/ericornelissen" target="_BLANK">
                  Eric Cornelissen
                </Link>
              </li>
              <li>
                Lily icon by{" "}
                <Link
                  href="https://icons8.com/icon/vU1hzXyejzpT/lily"
                  target="_BLANK"
                >
                  icongeek26
                </Link>
              </li>
            </ul>
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => modal.current.close()}>close</button>
        </form>
      </dialog>
    </>
  )
}

export default Footer
