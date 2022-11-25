import React, {useState, useEffect } from 'react'
import Link from 'next/link';
import {FaTimes, FaBars} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import styles from '../styles/Navbar.module.css'

const Navbar =({chooseMessage, mainPage})=> {


  const [scrollNav, setScrollNav] = useState(false)
  const [click, setClick] = useState(false)
  const [mobile, setMobile] = useState(false)
  const handleClick =  () => setClick(!click)  
  const closeMobileMenu = () => setClick(false)

    useEffect(()=>{     
        
        if(window.innerWidth< 700){
             setMobile(true)
       }
        window.addEventListener('resize', showMobile)
        window.addEventListener('scroll', changeNav);
      },[])
    
    
    
    const showMobile = () => {
        if(window.innerWidth<=700){
        setMobile(true)
        } else { 
        setMobile(false)
        }
    }
    const changeNav = () =>{
        if(window.scrollY>=80){
        setScrollNav(true)     
        } else{
        setScrollNav(false)
        }    

    }



 styles['nav__socialmedia']

  return (
    <div className={styles["navbar"]} >      

        <div className={click && mobile? styles['navbar__wrapper-mobile']: styles['navbar__wrapper']}>
            <div className={click && mobile? styles['nav__socialmedia--mobile'] : styles['nav__socialmedia']}> 
                    <Link href='/' className={click && mobile? styles["nav__socialmedium--mobile"] : styles["nav__socialmedium"] }> 
                        <AiFillYoutube className={styles["nav__socialmediumicon"]}/> 
                    </Link>
                    <Link href='/'  className={click && mobile? styles["nav__socialmedium--mobile"] : styles["nav__socialmedium"]}>                      
                        <AiFillInstagram className={styles["nav__socialmediumicon"]}/>                                        
                    </Link>
                    <Link href='/' className={click && mobile? styles["nav__socialmedium--mobile"] : styles["nav__socialmedium"]}>                       
                      <FaTiktok className={styles["nav__socialmediumicon"]}/>                        
                    </Link>   
                    <Link href='/' className={click && mobile? styles["nav__socialmedium--mobile"] : styles["nav__socialmedium"]}>                     
                      <AiFillFacebook className={styles["nav__socialmediumicon"]}/>                     
                  </Link> 
            </div> 
      
            <div className={click && mobile? styles["menu__mobile-active"]: styles["menu"]}>     

              <div className={styles["list-element"]} >                
                <Link href='/' onClick={handleClick} >Home</Link> 
                </div> 
                <div className={styles["list-element"]} >                
                <Link href='/course' as={'/cursos'} onClick={handleClick}>Cursos</Link> 
                </div>       
                <div className={styles["list-element"]} >                
                <p onClick={() => { 
                    handleClick()
                    chooseMessage('contactSection')}}>Contato</p> 
                </div>   
                <div className={styles["list-element"]} >                
                <Link href='/about' as="/sobre"  onClick={handleClick}>Sobre mim</Link> 
                </div>  

                            
            </div>
            <div>
              <Link className={styles["btn__link"]} href='/login' onClick={()=> {
                handleClick()
                mainPage()
                }}>
                <p className={styles["btn__mobile"]} >
                  Login
                </p>
              </Link>  

            </div>
            
            


        </div>
         <div className={styles["menu_icon"]} onClick={handleClick}>             
              {click ? <FaTimes />:<FaBars  /> } 
         </div>


    </div>
  )
}

export default Navbar