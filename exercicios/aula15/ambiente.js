let num = [6,5,3,8,9]
num.push(0)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento é o ${num[0]}`)
var pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor ${pos} não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*for (var pos = 0; pos <=num.length -1; pos+=1) {
    console.log(`O ${pos+1} elelmento é ${num[pos]}`)
}
*/

/*for (let pos in num) {
    console.log(`O ${pos} elelmento é ${num[pos]}`)
}
    */