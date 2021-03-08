module.exports = function combinacoes_possiveis(galao, garrafas, parcial, combinacoes){ 

    let soma, n, restando

    parcial = parcial ?? []
    combinacoes = combinacoes ?? []
    soma = parcial.reduce((a, b) => a + b, 0)

    if(soma >= galao){
        combinacoes.push(parcial)
        return
    }

    for(let i = 0;i < garrafas.length;i++){
        n = garrafas[i]
        restando = garrafas.slice(i+1)
        combinacoes_possiveis(galao, restando, parcial.concat([n]), combinacoes)
    }

    return combinacoes
}
