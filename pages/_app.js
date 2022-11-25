import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import App, { AppProps, AppContext, User } from 'next/app'
import {useRouter} from 'next/router'


export default function MyApp({ Component, pageProps, user}) {

  const router = useRouter()
  
  let [mPage, setmainPage] = useState(false)
    
  if (user){
    mPage = true
  } else{ 
    mPage = false  
  }
 
  useEffect (()=>{
       
 
    if(window.location.href !== ('http://localhost:3000/login')){      
      setmainPage(false)        
    } else{
      setmainPage(true)
    }    
    
    window.onpopstate = function(){ 
    if(window.location.href !== ('http://localhost:3000/login')){
      setmainPage(false)        
    } else{
      setmainPage(true)
      }    
    }

  }
  ,[])


  async function chooseMessage (message)  {  
    if (window.location.href !== 'http://localhost:3000/'){
      await router.push('http://localhost:3000/')
    }
    console.log("." + styles[message])       
    const element = document.querySelector("."+styles[message])   
    console.log(element)
    element.scrollIntoView()        
  };

  function mainPage () {
    setmainPage(!mPage)         
    console.log(mPage + 'mpage')
  }


  return (
    <>
    {mPage?'':(<Navbar chooseMessage={chooseMessage} mainPage={mainPage}/>)} 
     <Component {...pageProps}/>
    </>
   
  )
  
}



MyApp.getInitialProps = async (appContext) => {
 

  //this code can be both executed in the server and in the browser;
 let user;  
 let pathName;
  pathName = appContext.ctx.pathname
  console.log(pathName)
  switch(pathName){ 
    case '/login':
      user = true 
      break; 
    case '/register':
      user = true 
      break;
    default:
      user = false 
  }
      
    return {
      user: user
    }

}

  


