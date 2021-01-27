import React from "react"

import * as styles from "./herosection.module.scss"

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.wrapper}>
        <div className={styles.simonPicture}></div>
        <div className={styles.heroBody}>
          <h1>
            I'm Simon Julius <br /> <span>A Software Engineer</span>
          </h1>
          <p>
            I'm very passionate about solving some of the world's most complex
            problems. I find solution relentlessly and tiredlessly, and until we
            make that history together, I won't stop digging for solutions.
          </p>
        </div>
      </div>
      <div className={styles.heroBg}></div>
    </div>
  )
}

export default HeroSection
