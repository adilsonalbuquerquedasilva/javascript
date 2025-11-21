/*function fatorial(n){
    let fat = 1
    for(let i = n; i >= 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(5))*/

function fibonacci(n) {
    if (n < 2) return n

    let a = 0 
    let b = 1 

    for (let i = 2; n >= i; n--) {
        let temp = a + b
        a = b
        b = temp
    }

    return b
}
console.log(fibonacci(4))