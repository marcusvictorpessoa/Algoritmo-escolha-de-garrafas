const combinacoes_possiveis = require('./combinacoes')
const soma_vetor = require('./somavetor')

module.exports = function algoritmo(galao, garrafas){
    let combinacoes
    let sobra = 0

    combinacoes = combinacoes_possiveis(galao, garrafas)
    let somaatual = 0
    let ns = []
    let s = []
    //console.log(combinacoes)
    for(let i = 0;i < combinacoes.length;i++){
        somaatual = soma_vetor(combinacoes[i])
        //console.log(combinacoes[cont], somaatual)
        if(somaatual == galao){
            ns.push(combinacoes[i])    
        }else{
            s.push(combinacoes[i])
        }      
    }
    let nsvalor = false
    if(ns.length >= 1){
        nsvalor = true
        let vr
        let tamanho = 100000000
        for(let j=0;j<ns.length;j++){
            if(ns[j].length<tamanho){
                vr=ns[j]
                tamanho = ns[j].length
            }
        }
        return[vr, sobra]
    }

    if(s.length >= 1 && nsvalor == false){
        let sr
        let tam = 10000000
        sobraatual = 100000
        for(let k = 0;k<s.length;k++){
            sobra = soma_vetor(s[k]) - galao
            if(s[k].length<tam && sobra<sobraatual){
                sr=s[k]
                tam=s[k].length
                sobraatual = sobra
            }
        }
        return[sr, sobraatual]
    }
}
