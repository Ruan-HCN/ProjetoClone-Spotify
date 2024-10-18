document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('message').textContent = 'Login realizado com sucesso!';
        document.getElementById('message').style.color = 'green';

        // Limpa os dados do formulário
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('message').style.color = 'red';
    }
});
