let num = [5, 8, 2, 9, 3] //array
num.push(1) //adiciona algo ao array
num.sort() //organiza o array
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`) //length mede o array
console.log(`O primeiro valor do vetor é ${num[0]}`)
/*for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}*/
for (let c in num) { //repetição for simples
    console.log(num[c])
} console.log(`O número 9 está na posição ${num.indexOf(9)}`) //busca algo no array