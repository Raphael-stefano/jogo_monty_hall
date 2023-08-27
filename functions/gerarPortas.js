import { useState } from "react"
import Porta from "../components/porta"
import PortaModel from "../model/porta"

export default function gerarPortas(qtde, selecionada){
    let portas = []
    for(let i = 1; i <= qtde; i++){
        if(i == selecionada){
            portas.push(new PortaModel(i, true, false, false))
        } else{
            portas.push(new PortaModel(i, false, false, false))
        }
    }
    return portas
}