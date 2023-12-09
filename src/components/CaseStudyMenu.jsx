import React from "react"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

function Menu() {
  return (
    <nav
      className={`z-10 ${styles.navbar} text-slate-50`}
      style={{ position: "absolute", top: "20px", leftMargin: "300px" }}
    >
      <Link href="/case-studies">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={`${styles.bigXagon} font-light text-2xl text-white flex items-center justify-center`}
          >
            Back
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Menu
