const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
// Credenciales válidas
const validUser = 'NEXO@gmail.com';
const validPassword = 'CreandoElMañana';


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 


    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === validUser && password === validPassword) {
        errorMessage.style.display = 'none'; 
        alert('¡Inicio de sesión exitoso!');
    } else {
        errorMessage.style.display = 'block'; 
    }
});
