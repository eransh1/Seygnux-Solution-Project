import React from 'react'
import styles from "./Footer.module.css"
import {AiFillHeart} from "react-icons/ai"
const Footer = () => {
  return (
 <section className={styles.outerCont}>
    <div className={styles.innerCont}>
      <h3>M</h3>  
      <p className={styles.text}>Handcrafted with <AiFillHeart/> in chicago. Powered by StudioPress</p>
      <p className={styles.text}>FACEBOOK - TWITTER - INSTAGRAM</p>
    </div>
 </section>
  )
}

export default Footer