var idade = 33
console.log(`Você tem ${idade} anos...`)
if (idade < 16) {
    console.log(`Não vota`)
}   else if (idade < 18 || idade >= 67) {
    console.log(`Voto é opicional`)
}   else {
    console.log(`Voto é obrigatorio`)
}