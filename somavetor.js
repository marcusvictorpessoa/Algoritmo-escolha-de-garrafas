module.exports = function soma_vetor(vetor){
    let soma = 0
    for(let i = 0;i < vetor.length;i++){
        soma += vetor[i]
    }
    return soma
}
