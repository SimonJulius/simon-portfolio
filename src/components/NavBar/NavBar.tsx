import React from "react"
import * as styles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        Simon <span>Julius</span>
      </div>
      <div className={styles.menus}>
        <div className={styles.menu}>Home</div>
        <div className={styles.menu}>Experience</div>
        <div className={styles.menu}>Portfolio</div>
        <div className={styles.menu}>Hire Me</div>
      </div>
    </div>
  )
}

export default NavBar
