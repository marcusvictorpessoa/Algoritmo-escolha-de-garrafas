module.exports = function formata_elementos(vetordados){
    vetor = vetordados.split(" "||"L"||"l")
    vetornovo = vetor.map((a) => parseFloat(a))
    vetor = []
    for(let i = 0;i<vetornovo.length;i++){
        if(!isNaN(vetornovo[i])){
            vetor.push(vetornovo[i])
        }
    }
    return vetor   
}