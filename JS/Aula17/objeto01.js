let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

let n = 1543.5
console.log(n.toFixed('pt-BR', {style:'currency', currency: 'BRL'}))

amigo.engordar(2)
console.log(`${amigo.nome.toUpperCase()} pesa ${amigo.peso}Kg`)