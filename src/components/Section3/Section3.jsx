import React from 'react'
import styles from "./Section3.module.css"
import bk from "../../images/background.jpeg"

const Section3 = () => {
  return (
    <section className={styles.outerCont}>
       <img src={bk} alt="bk" /> 
       <div className={styles.innerCont}>
        <h1>We design brands.</h1>
        <p>A simple look is all you need to crush your competition.</p>
        <p className={styles.line}></p>
        <div className={styles.brandList}>
            <p>lesacenius</p>
            <p>avec'simple</p>
            <p>WHITESPACE</p>
            <p>m'n'mal'sm</p>
            <p>bareelona33</p>
            <p>smoothVANILLA</p>
        </div>
       </div>
    </section>
  )
}

export default Section3