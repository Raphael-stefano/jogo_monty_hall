import {useRouster, useRouter} from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function home(){
  const parametros = useRouter()
  function navegacaoComParametros(_n, _s){
    parametros.push({
        pathname: '/jogo',
        query: {
            n: _n,
            s: _s
        }
    })
  }
  let [numero, setNumero] = useState(3)
  let [selec, setSelec] = useState(2)
  function aumentar([valor, setValor]){
    if(valor < 15){
      setValor(valor + 1)
    }
  }
  function diminuir([valor, setValor]){
    if(valor > 1){
      setValor(valor - 1)
    }  
  }
  return(
    <div className={styles.layout}>

      <div className={styles.metade}>
        <div style={{background: '#c0392c'}} className={styles.quadrado}>
          <h1>Monty Hall</h1>
        </div>
        <div style={{background: 'white'}} className={styles.quadrado}>
            <h2>Quantidade de portas</h2>
            <span onChange={e => setNumero(e.target.value)}>{numero}</span>
            <div className={styles.botoes}>
            <button onClick={() => aumentar([numero, setNumero])}>+</button>
            <button onClick={() => diminuir([numero, setNumero])}>-</button>
          </div>
        </div>
        
      </div>
        
      <div className={styles.metade}>
        <div style={{background: 'white'}} className={styles.quadrado}>
          <h2>Porta premiada</h2>
          <span onChange={e => setSelec(e.target.value)}>{selec}</span>
          <div className={styles.botoes}>
            <button onClick={() => aumentar([selec, setSelec])}>+</button>
            <button onClick={() => diminuir([selec, setSelec])}>-</button>
          </div>
        </div>
        <div style={{background: '#28a085'}} className={styles.quadrado}>
          <button className={styles.buttonMain} onClick={() => {
            if(numero >= selec){
              navegacaoComParametros(numero, selec)
            } else{
              alert("O número da porta premiada deve ser menor que o número de portas")
            }
          }}>Gerar jogo</button> 
        </div>
      </div>

    </div>
  )
}

