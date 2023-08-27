import Porta from "../components/porta";
import PortaModel from "../model/porta";
import { useState } from "react";
import gerarPortas from "../functions/gerarPortas";

export default function atualizarPortas(portas, portaModificada){
    return portas.map(portaAtual => {
        if(portaAtual.numero == portaModificada.numero){
            return portaModificada
        } else{
            return portaAtual
        }
    })
}