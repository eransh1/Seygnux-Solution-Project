import React from 'react'
import styles from "./Section4.module.css"
import img1 from "../../images/img4.jpg"
import img2 from "../../images/img3.jpg"
import img3 from "../../images/img1.jpg"
import img4 from "../../images/img2.jpg"
const Section4 = () => {

const data=[
    {
        id:1,
        title:"OVERCOMING CREATIVE BLOCK",
        author:"Brian Gardner",
        date:"May 1,2017",
        img:img1
    },
    {
        id:2,
        title:"WHY COMMUNICATION IS KEY",
        author:"Brian Gardner",
        date:"May 1,2017",
        img:img2
    },
    {
        id:3,
        title:"THE PATH OF LEAST RESISTANCE",
        author:"Brian Gardner",
        date:"May 1,2017",
        img:img3
    },
    {
        id:4,
        title:"HOW TO REACH NEW HEIGHTS",
        author:"Brian Gardner",
        date:"May 1,2017",
        img:img4
    },
]

  return (
    <section className={styles.outerCOnt}>
        <div className={styles.innerCont}>
            <h1>We Create Stories.</h1>
            <p>A killer narative will turn your readers into raving fans.</p>
            <p className={styles.line}></p>

            <div className={styles.buildingListCont}>
            {data.map((item)=>{
                return <>
                <div key={item.id} className={styles.buildingCont}>
                <div className={styles.top}>
                    <img src={item.img} alt="bk" />
                </div>
                <div className={styles.bottom}>
                    <h3>{item.title}</h3>
                    <p>{`${item.author} . ${item.date}`}</p>
                </div>
                </div>
                </>
            })}
                
            </div>


        </div>
    </section>
  )
}

export default Section4