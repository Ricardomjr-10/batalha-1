function fatorial(n) {
    if (n < 0) {
        return null
    }

    if (n === 0) {
        return 1
    }

    let result = 1
    for (let i = 0; i < n; i++) {
        result *= (n - i)
    }
    return result

}
console.log(fatorial(7))