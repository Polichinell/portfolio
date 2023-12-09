import React from "react"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

function Menu({ text, link }) {
  return (
    <nav
      className={`z-10 ${styles.navbar} text-slate-50`}
      style={{ position: "absolute", top: "20px", leftMargin: "300px" }}
    >
      <Link href={link}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={`${styles.mdXagon} font-light text-xl text-white flex items-center justify-center`}
          >
            {text}
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Menu
