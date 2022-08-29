import style from "../styles/contact.module.scss"
export default function Contact(){
    return(

<div className={style.conContainer}>
<h1>Contact Us</h1>
<p>Lorem Ipsum</p>
<div id={style.contactContainer}>
    <div className={style.contactInfo}>
 <h4>
            Contact Information
        </h4>
        <p>Fill up the form and click send</p>
        <div className={style.iconText}>
            <i className="fa-solid fa-phone" aria-handle="true">  </i>
            <span>0473578636</span>
        </div>
        <div className={style.iconText}> 
        <i className="fa-solid fa-envelope-open" aria-handle="true">  </i>
            <span>enquiries@uswa.org.au</span>
        </div>
        <div className={style.iconText}>
        <i className="fa-solid fa-map-location"aria-handle="true" ></i>
            <span> 19, Junction Boulevard Cockburn Central WA 6164</span>
        </div>
        <div className={style.socialMedia}>
            <a href="" className={style.iconCircle}>
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" className={style.iconCircle}>
            <i class="fa-brands fa-twitter"></i>
            </a>
            
        </div>
    </div>
    <form>
       

    </form>
</div>

</div>
    )
    
}