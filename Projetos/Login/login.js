const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    email.value.trim();
    console.log(email.value);
    console.log(password.value);
    if (email.value === "" || password.value === "") {
        alert("O campo de email e senha são obrigatório.");
    }
})