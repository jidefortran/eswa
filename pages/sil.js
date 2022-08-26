import Footer from "../components/footer/footer"
import NavBar from "../components/nav/navbar"
import style from "../styles/sil.module.css"
import pic1 from  "../static/independent-living.jpg"
import pic2 from  "../static/independent-living2.webp"
import pic3 from  "../static/independent-living3.jpg"
import pic4 from  "../static/independent-living4.jpeg"
import Image from "next/image"

const Sil=()=>{
return(
    <div> 
        <NavBar />
        <div className={style.container}>
        <div className={style.containerImage}>
  <div className={style.pic1}><Image src ={pic1} className={ style.picSize} /></div>
  <div className={style.pic3}><Image src ={pic2} className={ style.picSize}/></div>
  <div className={style.pic2}><Image src ={pic3} className={ style.picSize}/></div>
  <div className={style.pic4}><Image src ={pic4} className={ style.picSize}/></div>

  {/* <div className={style.containerText}> */}
  <div className={style.text}>
    <p className={style.textContent}>
    ESSENCE WA offers different ranges of Supported Independent Living (SIL). participant has the choice of 
    choosing any room in our housing units. This accommodation is shared between 2-4 people co-habiting together and sharing communal areas. The accommodation is also tailored to suit the needs of the participants residing in the accommodation. The accommodation is always staffed with 1-2 staffs on 24hours basis to give support and assistance in cooking, appointments,
     shopping, etc. and teaching daily life skills to facilitate recovery into full independent living.
     <hr />

     We take into consideration the customize needs attached to every of our service users requires. We
asset our participant to maximize the full use of their living options by conducting an assessment
that determining what kind of living options is suitable for their living. All of our independent
accommodation and group home are presented with befitting design and arrangement that
promotes the living independency of our participants. Our accommodations location are in good
proximity to where services such as shops, cinemas, health centers and many social amenities are
located. Our accommodations are well equipped with top range living gadgets, equipment’s and
appliances that makes lives easy for our participants with adequate security in place.
    </p>
  </div>
  </div>
</div>
<Footer />
        </div>


)
}

export default Sil