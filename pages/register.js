import React from 'react'
import styles from '../styles/Register.module.css'
import Footer from '../components/Footer'
import Link  from 'next/link'

function Register() {
  return (
    <div>
    <div className={styles["register "]}>    
    
    <div className={styles["registerWraper"]}>
    

    <div className={styles["registerMain"]}>
              <div className={styles["register__title"]}>
                Registrar
              </div>
               <div className={styles["register__inputs"]}>    
               <label for='id' className={styles["register__input"]}> 
                 <input id='id'type={styles["text"]} placeholder='Número do celular ou email'/>
                
                </label>            
                <label for='id' className={styles["register__input"]}> 
                 <input id='id'type={styles["text"]} placeholder='Nome completo'/>
                
                </label>            
                <label for='id' className={styles["register__input"]}> 
                 <input id='id'type={styles["text"]} placeholder='Nome de usuário'/>
                
                </label>            
             
                <label for='id1' className={styles["register__input"]}>
                      <input id='id1' type={styles["password"]} placeholder='Senha'/>
                </label>
              
              </div>  
              <div className={styles["register__submitbutton"]}>
                <p> Cadastre-se  </p>                   
              </div>
              <div className={styles["register__policy"]}>
                Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.                   
              </div>

             
                             
              
        </div>
    </div>
  
    
</div>
  <Footer/>
</div>
  )
}

export default Register


