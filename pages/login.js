import React from 'react'
import Link  from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Login.module.css'

function Login() {
  return (
    <div>
        <div className={styles["Login"]}>      
        
        <div className={styles["loginWraper"]}>
         <div className={styles["login__wrappertitle"]}>
            Helena Rache
        </div> 

         <div className={styles["loginMain"]}>
                  <div className={styles["login__title"]}>
                    Entrar
                  </div>

                   <div className={styles["login__inputs"]}>    
                   <label for='id' className={styles["login__input"]}> 
                     <input id='id'type="text" placeholder='Usuário'/>                    
                    </label>                             
                    <label for='id1' className={styles["login__input"]}>
                          <input id='id1' type="password" placeholder='Senha'/>
                    </label>
                  
                  </div>  
                  <div className={styles["login__submitbutton"]}>
                    <p> Login  </p>                   
                  </div>
                  <div className={styles["forgottenMain"]}>
                    Esqueceu a senha?
                  </div>
                 <div className=                 {styles["login__lines"]}>
                     <span className={styles["login__line"]}>ou</span>
                 </div>                   
                  
                  <Link href='/register' className={styles["forgottenMain"]}>
                    Registre-se
                  </Link >
            </div>
        </div>
      
        
    </div>
      <Footer/>
    </div>
    
  )
}

export default Login




