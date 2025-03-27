let a = 0
let b = 3
console.log(a ||= b)


//operador de atribuicao
//mesma coisa de :
if (!a) {
    a = b;
  }
//   A expressão a ||= b em JavaScript é um operador de atribuição lógica OR (ou OU). Ele é uma forma curta de escrever:

//   JavaScript
  
//   if (!a) {
//     a = b;
//   }
//   Em outras palavras:
  
//   Se o valor de a for "falsy" (como false, 0, "", null, undefined ou NaN), então a receberá o valor de b.
//   Se o valor de a for "truthy" (qualquer valor que não seja "falsy"), então a manterá seu valor original.
