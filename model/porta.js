export default class PortaModel{
    numero
    temPresente 
    selecionada
    aberta
    constructor(numero, temPresente = false, selecionada = false, aberta = false){
        this.numero = numero
        this.temPresente = temPresente
        this.selecionada = selecionada
        this.aberta = aberta
    }
    desselecionar(){
        let selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }
    selecionar(){
        let selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }
    abrir(){
        return new PortaModel(this.numero, this.temPresente, this.selecionada, true)
    }
}