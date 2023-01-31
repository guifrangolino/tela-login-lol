const input = document.querySelectorAll('.input-usuario')
const btnLogin = document.querySelector('#btn-login')

input.forEach(i => i.addEventListener('focus', ({target}) => {
    if (target.value == '') {
        target.nextElementSibling.classList.toggle('ativo')
    }
}))

input.forEach(i => i.addEventListener('focusout', ({target}) => {
    if (target.value == '') {
        target.nextElementSibling.classList.toggle('ativo')
    }
}))

input.forEach(i => i.addEventListener('input', ({target}) => {
    const [nome, senha] = input

    if (nome.value && senha.value) {
        btnLogin.removeAttribute('disabled')
    } else {
        btnLogin.setAttribute('disabled', '')
    }
}))