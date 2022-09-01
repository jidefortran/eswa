import Link from "next/link"
import Card from "./card"
import styles from "./section-cards.module.css"


const SectionCards=(props)=>{
    const {title, text,imgUrl,link} = props
    
   
    console.log({title}, {text},{imgUrl},{link})
   
    return(
        <section className={styles.container}>
            
            <div className={styles.cardWrap}>
            <div className={styles.sectionWrapper}>
   

<h3 className={styles.title}> {title}</h3>
<p className={styles.text}>{text} </p>
<button className={styles.button}><Link href={{pathname:`[link]`}} as={`${link}`}><a>Read more</a></Link></button>
<div className={styles.cardWrapper}>
    <div className={styles.SectionImage}>
    <Card id={0} imgUrl={imgUrl} size="large"/>
</div>

</div>

</div>




</div>
        </section>
    )
}

export default SectionCards