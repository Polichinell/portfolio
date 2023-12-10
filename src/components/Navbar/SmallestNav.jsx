import React from "react"
import styles from "@/styles/Navbar.module.css"
import Link from "next/link"

function SmallestNav() {
  return (
    <div
      className={`fixed z-40 top-4 left-1/2 transform -translate-x-1/2 flex flex-row gap-3 pt-3 font-bold justify-center text-slate-50`}
    >
      <Link href={`#about`}>
        <div className={styles.menuItems2}>
          <div className="mx-auto my-auto">About</div>
        </div>
      </Link>

      <Link href={`#projects`}>
        <div className={styles.menuItems2}>
          <div className="mx-auto my-auto">Projects</div>
        </div>
      </Link>

      <Link href={`#contact`}>
        <div className={styles.menuItems2}>
          <div className="mx-auto my-auto">Contact</div>
        </div>
      </Link>
    </div>
  )
}

export default SmallestNav
