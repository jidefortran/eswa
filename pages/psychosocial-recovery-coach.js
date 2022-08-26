import Footer from '../components/footer/footer';
import NavBar from '../components/nav/navbar';
import styles from '../styles/psychosocial.module.css'
import Image from 'next/image';
import pic1 from "../static/psyc1.jpg"

const Psychosocial=()=>{
    return (
      
        <div>
              <NavBar/>
            <div className={styles.container}>
            <div className={styles.imageContainer }>
           
  <div className={styles.pic1}><Image src={pic1} className={styles.picSize} /></div>
  <div className={styles.pic2}><Image src={pic1} className={styles.picSize} /></div>
  <div className={styles.pic3}><Image src={pic1} className={styles.picSize} /></div>
  <div className={styles.pic4}><Image src={pic1} className={styles.picSize} /></div>
  <div className={styles.textContainer }>
 <p className={styles.text}>
               Psychosocial Recovery Coaching is a service that is funded 
               by the National Disability Insurance Scheme (NDIS) under the Capacity Building budget.
                A Psychosocial Recovery Coach helps an NDIS participant to make sense of their plan and utilise their funding.
                 Recovery Coaches connect participants to the services they require (NDIS and community supports), coach participants to 
                 achieve their goals, and prepare for and resolve crisis if it arises.</p>
            </div>
            <div className={styles.buttonWrapper}><button> Contact Us</button></div>
            
           </div>
  
            </div>
            <Footer/>
        </div>
        


    )
}
export default Psychosocial;