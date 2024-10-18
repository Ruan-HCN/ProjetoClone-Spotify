document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name && phone && email && password) {
        document.getElementById('message').textContent = 'Registro realizado com sucesso!';
        document.getElementById('message').style.color = 'green';
        alert('Conexão bem sucedida. Registro realizado com sucesso!');

        document.getElementById('registrado').reset();
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('message').style.color = 'red';
    }
});
