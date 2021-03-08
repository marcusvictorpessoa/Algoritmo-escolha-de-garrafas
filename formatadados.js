module.exports = function formata_dado(dado){
    vetor = dado.split("")
    dado = vetor.map((a) => parseFloat(a))
    dado = parseFloat(dado[0])
    return dado
}