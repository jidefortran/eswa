import Image from "next/image"
import Footer from "../components/footer/footer"
import NavBar from "../components/nav/navbar"
import styles from "../styles/community-participation.module.css"
import pic2 from "../static/community.jpeg";
import pic3 from "../static/community2.jpg";
import pic1 from "../static/community3.jpg";



const Community =()=>{
   
        return (
      
            <div>
                  <NavBar/>
                <div className={styles.container}>
                <div className={styles.imageContainer }>
          <div className={styles.textContainer }>
     <p className={styles.text}>
                 
Social interaction and community engagement are essential parts of daily life. That’s why we believe in supporting you to connect and participate in your own community each day.
We work closely with you and your support networks to identify community-based activities you are most interested in doing, goals you would like to achieve and the best way to achieve them. From there, we design community participation programs that support you to reach those goals. Our priority is to ensure every activity aligns with your interests and is suitable for your current
social and communication skills. These activities take place in the community and may be:

Within a group
One-to-one with Essence WA support worker.
Our experienced staff are highly skilled in working with a diverse range of disabilities, including those with complex needs and are able to work with you and your loved ones to ensure all outings and activities meet your goals and needs.</p>
                </div>       
      <div className={styles.pic1}><Image src={pic1} className={styles.picSize} /></div>
      <div className={styles.pic2}><Image src={pic2} className={styles.picSize} /></div>
      <div className={styles.pic3}><Image src={pic3} className={styles.picSize} /></div>
   
    
                <div className={styles.buttonWrapper}><button> Contact Us</button></div>
                
               </div>
      
                </div>
                <Footer/>
            </div>
            
    
    
        )
    
}

export default Community