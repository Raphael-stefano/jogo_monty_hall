import Porta from "../components/porta";
import PortaModel from "../model/porta";
import { useState } from "react";
import gerarPortas from "../functions/gerarPortas";
import atualizarPortas from "../functions/atualizarPortas";
import styles from '../styles/jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Home() {
  const parametros = useRouter()
  let num_portas = parametros.query.n
  let porta_selec = parametros.query.s
  
  let [portas, setPortas] = useState(gerarPortas(num_portas, porta_selec))
  let abridas = []
  function renderizarPortas(arr){
    for(let i = 0; i < arr.length; i++){
        abridas.push(false)
    }
    return arr.map(porta => {
        return <Porta open={e => setPortas(abrir(portas, porta.numero))} select={e => setPortas(selecionar(portas, porta.numero))} key={porta.numero} temPresente={porta.temPresente} selecionada={porta.selecionada} aberta={porta.aberta} numero={porta.numero}/>
    })
  }
  function abrir(portas, n){
    abridas[n-1] = true
    return portas.map(porta => {
      if(porta.numero == n){
        porta.aberta = true
        return porta
      } else{
        return porta
      }
    })
  }
  function selecionar(portas, n){
    return portas.map(porta => {
      if(porta.numero == n){
        if(porta.selecionada){
          porta.selecionada = false
        } else{
          porta.selecionada = true
        }
        return porta
      } else{
        if(abridas[n-1]){
          return porta
        } else{
          porta.selecionada = false
          return porta
        }
      }
    });
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas(portas)}
      </div>
      <div className={styles.botoes}>
        <Link href='/'><button>Página inicial</button></Link>
      </div>
    </div>
  )
}