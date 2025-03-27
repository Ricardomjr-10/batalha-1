const palavra1 = 'casa'
const palavra2 = 'ovo'

function isPalindromo (str) {
    const word = str.split('').reverse().join('')
   const result =  word === str ? true: false
   return result
}

console.log(isPalindromo(palavra2))