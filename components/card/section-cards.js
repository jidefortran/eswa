import Card from "./card"
import styles from "./section-cards.module.css"

const SectionCards=(props)=>{
    const {title, text,images} = props
    
   
    console.log({title}, {text},{images})
   
    return(
        <section className={styles.container}>
            
            <div className={styles.cardWrap}>
            <div className={styles.sectionWrapper}>
   

<h2 className={styles.title}> {title}</h2>
<p className={styles.text}>{text} </p>
<button className={styles.button}>button</button>
<div className={styles.cardWrapper}>
    <div className={styles.SectionImage}>
    <Card id={0} imgUrl={images} size="large"/>
</div>

</div>

</div>




</div>
        </section>
    )
}

export default SectionCards