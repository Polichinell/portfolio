import React from "react"
import { useState } from "react"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [rotation, setRotation] = useState(0)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
    setRotation(rotation + 45)
  }

  return (
    <nav
      className={`z-10 ${styles.navbar}`}
      style={{ position: "absolute", top: "20px", leftMargin: "300px" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className={styles.bigXagon}
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={toggleMenu}
        >
          <div
            style={{ transform: `rotate(-${rotation}deg)` }}
            className={`${styles.bigXagon} font-light text-2xl text-white flex items-center justify-center`}
          >
            Menu
          </div>
        </div>

        <div
          className={`${
            menuVisible ? styles.visibleMenu : styles.hiddenMenu
          } gap-3 mt-3`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "whitesmoke",
            fontWeight: "bold",
          }}
        >
          <Link href={`#about`}>
            <div className={styles.menuItems}>
              <div className="mx-auto my-auto">About</div>
            </div>
          </Link>

          <Link href={`#projects`}>
            <div className={styles.menuItems}>
              <div className="mx-auto my-auto">Projects</div>
            </div>
          </Link>

          <Link href={`#contact`}>
            <div className={styles.menuItems}>
              <div className="mx-auto my-auto">Contact</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
