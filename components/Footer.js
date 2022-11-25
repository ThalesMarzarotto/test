import React from 'react'
import styles from '../styles/Footer.module.css'
let  svg = "/media/Thales.svg"
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles['Footer']}>
      
      <div className={styles['About']}> 
        <div className={styles['info_footer']}>
            <div className={styles['info_title']}>
            SOBRE
            </div>
            <div className={styles['Legal_info']}>
              Como funciona?
            </div>
            <div className={styles['Legal_info']}>
              Testemunhos
            </div>            
            <div className={styles['Legal_info']}>
               Termos de Serviço
            </div>
        </div>
        <div className={styles['info_footer']}>
          <div className={styles['info_title']}>
           INFORMAÇÕES
            </div>
            <div className={styles['Legal_info']}>
              Políticas de Privacidade
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
        </div>
        <div className={styles['info_footer']}>
        <div className={styles['info_title']}>
        PRIVACIDADE
            </div>
            <div className={styles['Legal_info']}>
              Políticas de Privacidade
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
        </div>
        <div className={styles['info_footer']}>
        <div className={styles['info_title']}>
            CONTATO
            </div>
            <div className={styles['Legal_info']}>
              Políticas de Privacidade
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
            <div className={styles['Legal_info']}>
                Aviso de cookies 
            </div>
        </div>

      </div>    
      
          
        <Image src={svg} height={500} width={500} className={styles['Thales']} />          
      

      <div className={styles['rights']}>
      © 
      </div>
          
    </div>
  )
}
export default Footer