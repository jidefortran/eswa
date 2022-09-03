import styles from "./navbar.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from "react"
import Image  from 'next/image';
import logo from '/static/logo-3.png'
import dropDown from '/static/expand-more.svg'

const NavBar =(props)=>{
    const [showDropdown , setShowDropdown] = useState(false)
    const handleShowDropdown=(e)=>{
e.preventDefault()
setShowDropdown(!showDropdown)
    }
    const router = useRouter()
    const handleOnclickHome=(e)=>{
        e.preventDefault()
        router.push('/')
       
    }

    const handleOnclickContact=(e)=>{
        e.preventDefault()
        router.push('/contact')
       
    }

    const handleOnclickJoinUs=(e)=>{
        e.preventDefault()
        router.push('/join-us')
       
    }

    // const handleOnclickOurStory=(e)=>{
    //     e.preventDefault()
    //     router.push('/our-story')
       
    // }

    const handleOnclickCPA=(e)=>{
        e.preventDefault()
        router.push('/service-CPA')
       
    }

    const handleOnclickRA=(e)=>{
        e.preventDefault()
        router.push('/service-RA')
       
    }

    const handleOnclickSI=(e)=>{
        e.preventDefault()
        router.push('/service-SI')
       
    }
    const handleOnclickSIL=(e)=>{
        e.preventDefault()
        router.push('/service-SIL')
       
    }
    
 return (
    <div className={styles.header}>
 <div  className={styles.container}>
   
        <Link href={"/"}>
        <a className={styles.logoLink} href="/" >
            <div className={styles.logoWrapper}><div><Image src={logo} /></div></div>
        </a>
        </Link>
    <nav className={styles.mainNav}>
   <ul className={styles.navItems}>
    <li className={styles.navItem2} onClick={handleShowDropdown}><div className={styles.service}>Services
      
   <span className={styles.drop}><Image src={dropDown} alt="expand drop down " width={"32px"} height={"32px"} color="white"/></span> </div>
    <nav className={styles.navContainer}>
        
  {showDropdown && ( <div className={styles.navDropdown}>
        <div className={styles.dropDown}>
        <p  className={styles.servies}> <Link href="/respite-short-stay"><a className={styles.linkName}  >Respite / Short Stay Accomodation</a></Link></p>
       <p className={styles.servies}> <Link href="/recovery-accommodation" ><a className={styles.linkName}>Recovery  Accomodation</a></Link></p>
       <p className={styles.servies}> <Link href="/community-participation"><a className={styles.linkName}>Community Paricipation Access</a></Link></p>
      <p className={styles.servies}> <Link href="/sil">
        <a className={styles.linkName}> Supported Independent Living</a></Link></p>  
      <p  className={styles.servies} > <Link href="/psychosocial-recovery-coach" ><a className={styles.linkName} >Psychosocial Recovery Coach</a></Link></p>
    </div>
    </div>
    )} 
</nav>
    
    </li>
    <li className={styles.navItem2}> <Link href="/about"> Our Story  </Link></li>
    <li  className={styles.navItem2}> <Link href = "/contact"> Contact</Link></li>
    <li  className={styles.navItem2} >  <Link href = "/join-us">Join Us </Link></li>
   </ul>
   </nav>

 </div>
 </div>
 )
}
export default NavBar