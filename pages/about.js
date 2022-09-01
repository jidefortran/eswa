import Image from "next/image";
import Footer from "../components/footer/footer"
import NavBar from "../components/nav/navbar"
import style from "../styles/about.module.css"
import logo from '/static/logo-3.png';
import about from '/static/about.jpg';
Image
const About=()=>{
    return(
        <div> 
            <NavBar/>
            <div className={style.aboutBanner}>
                <Image src={about}/>
            </div>
<div className={style.contentWrapper}>
    <div className={style.logoContainer}>
        <Image src={logo} className={style.aboutLogo}/>
    </div>
    <div className={style.contentContainer}>
        Our Story
<p>We are a registered company specializing in providing support to people living with disabilities and mental health issues. We offer a variety of services, such as community support participation, independent living, personal care, and short-term accommodation (respite and transition services). In the meantime, while we await NDIS certification, we can provide all of these services for self-managed customers as well as planned managed customers.

Staffing levels include registered nurses, enrolled nurses, disability support workers, mental health support workers, and psychosocial coaches. All of our operations adhere strictly to NDIS standards. With a team of highly enthusiastic, energetic, compassionate, and friendly employees, we are ready to assist customers within one hour of your booking. You may contact us via email or phone.
19 Junction boulevard Cockburn Central WA 616 </p>
</div>
</div>

            <Footer/>
        </div>
    )
}

export default About