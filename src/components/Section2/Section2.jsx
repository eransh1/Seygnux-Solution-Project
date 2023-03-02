import React from 'react'
import styles from "./Section2.module.css"

const Section2 = () => {
  return (
    <section className={styles.outerCont}>
       <div className={styles.innerCont}>
        <h1>We build experience.</h1>
        <p>A minimalist approach is the only way to design a website.</p>
        <p className={styles.line}></p>
        <div className={styles.infoCont}>

          <div className={styles.infoItem}>
            <h3>DESIGN</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugit asperiores a omnis deleniti perferendis tenetur incidunt molestiae </p>
            <button>Learn More</button>
          </div>
        
          <div className={styles.infoItem}>
            <h3>CONTENT</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugit asperiores a omnis deleniti perferendis tenetur incidunt molestiae </p>
            <button>Learn More</button>
          </div>

          <div className={styles.infoItem}>
            <h3>STRATEGY</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugit asperiores a omnis deleniti </p>
            <button>Learn More</button>
          </div>
    
</div>
       </div> 
    </section>
  )
}

export default Section2