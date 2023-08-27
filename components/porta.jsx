import { useState } from "react"
import styles from "../styles/porta.module.css"
import PortaModel from "../model/porta" 
import Presente from "./presente"

export default function Porta(props){
    let selecionada = props.selecionada ? styles.selecionada : ''
    let aberta = props.aberta ? styles.aberta : styles.estrutura
    let mostrarPresente = props.aberta ? styles.presenteVisivel : styles.presenteOculto
    let temPresente = props.temPresente? <div className={mostrarPresente}><Presente/></div> : <></>
    return(
        <div onClick={props.select} className={`${styles.area} ${selecionada}`}>
            <div className={aberta}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{props.numero}</div>
                    <div onClick={props.open} className={styles.macaneta}></div>
                    {temPresente}
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}