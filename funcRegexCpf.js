function isValidCpf (cpf) {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return regexCpf.test(cpf)
}

console.log(isValidCpf('012.133.295-07'))
console.log(isValidCpf('111.111.111-11'))