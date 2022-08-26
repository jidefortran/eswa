import Image from "next/image"
import { useState } from "react"
import styles from './card.module.css'

const Card =(props)=>{

    const {imgUrl ="/static/about-us.jpg", size="medium"}= props
    const classMap={
        'large':styles.lgItem,
        'medium': styles.mdItem
    }
    const handleOnError= ()=>{
setImgSrc("/static/about-us.jpg")
    }
    const [imgSrc, setImgSrc] = useState(imgUrl)
    return (
        <div className={styles.container}>
           
        <div className={classMap[size]}> 
       
        <Image 
        className={styles.cardImg}
        src={imgSrc}
        alt="image"
     layout="fill"
     onError={handleOnError}
      /></div></div>
    )
}

export default Card