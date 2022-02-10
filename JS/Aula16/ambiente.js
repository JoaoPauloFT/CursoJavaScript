function parimpar(n) {
    if(n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

function soma(n1=0, n2=0) {
    return n1 + n2
}

let res = parimpar(23)

let v = function(x) {
    return x*2
}

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

console.log(v(5))

console.log(soma(7,5))