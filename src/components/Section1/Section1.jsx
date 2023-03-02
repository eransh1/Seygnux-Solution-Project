import React from 'react'
import styles from "./Section1.module.css"
import bk from "../../images/background.jpeg"

const Section1 = () => {
  return (
   <>
<section className={styles.outerCont}>
    <img src={bk} alt="bk" />
    <div className={styles.innerCont}>
        <div className={styles.textCont}>
            <h1>We crush minimal design. </h1>
            <p><span>MONOCHROME</span> is a creative agency based in chicago . We developed the Genesis Framework and build mobile optimized theme for WordPress.</p>
        </div>
    </div>
</section>
   </>
  )
}

export default Section1