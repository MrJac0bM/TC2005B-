const logIn= `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <title>Login</title>
        <style>
            *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 120vh
}

.container{
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.container p{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.container span{
    font-size: 12px;
}

.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button{
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden{
    background-color: transparent;
    border-color: #fff;
}

.container form{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.container input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in{
    transform: translateX(100%);
}

.sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.active .sign-up{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move{
    0%, 49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%, 100%{
        opacity: 1;
        z-index: 5;
    }
}

.social-icons{
    margin: 20px 0;
}

.social-icons a{
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
}

.toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.container.active .toggle-container{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle{
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #5c6bc0, #512da8);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle{
    transform: translateX(50%);
}

.toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left{
    transform: translateX(-200%);
}

.container.active .toggle-left{
    transform: translateX(0);
}

.toggle-right{
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right{
    transform: translateX(200%);
}

section{
    width: 60%;
}

.preguntas{
    margin-top: 20px;
}

.preguntas h2{
    text-align: center;
}

.preguntas{
    text-justify:distribute;
    transition: all 0.3s ease;
}

#btn-color-change{
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 20px 90px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}
        </style>
    </head>

    <body>

        <div class="container" id="container">
            <div class="form-container sign-up">
                <form>
                    <h1>Crear Cuenta</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>o usa tu email para registrarte</span>
                    <input type="text" placeholder="Nombre">
                    <input type="email" placeholder="Correo">
                    <input type="password" placeholder="Contraseña">
                    <input type="password" placeholder="Confirmar Contraseña">
                    <button>Registrarse</button>
                </form>
            </div>

            <div class="form-container sign-in" >
                <form id="login-form" action="/dashboard" method="POST"> 
                    <h1>Iniciar Sesión</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>o usa tu correo y contraseña</span>
                    <input type="email" id="username" placeholder="Correo: NEXO@gmail.com"> 
                    <input type="password" id="password" placeholder="Contraseña: CreandoElMañana"> 

                    <p id="error-message" style="color: red; display: none;">Usuario o contraseña incorrectos</p> 

                    <a href="https://mrjac0bm.github.io/githubpagetest/">¿Olvidaste tu contraseña?</a>

                    <button id="btn-submit" type="submit">Iniciar Sesión</button> 
                </form>
            </div>

            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h1>Hola de vuelta!</h1>
                        <p>Inicia sesión con tus datos personales para usar esta hermosa pagina</p>
                        <button class="hidden" id="login">Iniciar Sesión</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Hola, Amigo!</h1>
                        <p>Registra tus datos personales para usar esta hermosa página</p>
                        <button class="hidden" id="register">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>

        <section class="preguntas">
            <h2>Describe el archivo package.json.</h2>
        
            <h3> El archivo package.json es un archivo de configuración en formato JSON que contiene información sobre un proyecto de Node.js</h3>
        </section>
        
        <div id="btn-color">
                <button id="btn-color-change">Presioname y ve la magia</button>
        </div>

        <script>
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


    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === validUser && password === validPassword) {
        errorMessage.style.display = 'none'; 
    } else {
        errorMessage.style.display = 'block'; 
    }
});


const btnColor = document.getElementById('btn-color-change');
const texto = document.querySelector(".preguntas");

btnColor.addEventListener('click',()=>{
    let colores = ["red", "blue", "green", "purple", "orange"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    texto.style.color = colorAleatorio;
})
        </script>
    </body>

    </html>`

const dashboard = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - NEXO</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">
</head>
<body>
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">Bienvenido a tu Dashboard, Usuario</p>
            <p class="subtitle">Aquí puedes ver información relevante</p>
        </div>
    </section>

    <div class="container mt-5">
        <div class="columns">
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-content">
                        <p class="title">📝 Tareas Pendientes</p>
                        <p class="subtitle">3 tareas por completar</p>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-content">
                        <p class="title">📅 Próxima Reunión</p>
                        <p class="subtitle">Mañana a las 10:00 AM</p>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-content">
                        <p class="title">📊 Progreso</p>
                        <p class="subtitle">80% completado</p>
                    </div>
                </div>
            </div>
        </div>

        <form action="/logout" method="post">
            <button class="button is-danger">Cerrar Sesión</button>
        </form>
    </div>
</body>
</html>`



const logOut = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logout</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
    <section class="section">
        <div class="container has-text-centered">
            <h1 class="title">¿Seguro que deseas cerrar sesión?</h1>
            <p class="subtitle">Tu sesión se cerrará y serás redirigido a la página de inicio.</p>
            
            <form id="logout-form" action="/bulmaPage" method="post">
                <button class="button is-danger is-medium">Cerrar sesión</button>
            </form>
        </div>
    </section>
</body>
</html>
` 


const bulmaPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Aldi Duzha" />
    <meta
      name="description"
      content="Bulma Hotel is a business hotel with unmatched hospitality, convenience &amp; comforts. Bulma Hotel is an ideal choice for your stay. Whether business trip or just a weekend leisure."
    />
    <meta name="keywords" content="bulma, hotel, website, template, free, awesome" />
    <link rel="canonical" href="https://aldi.github.io/bulma-hotel-template/index.html" />
    <title>Bulma Page </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <script defer src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
    <script defer src="js/scripts.js"></script>
  </head>
  <body>
    <section class="hero main_hero is-fullheight">
      <div class="hero-head">
        <div class="first_nav">
          <div class="container">
            <nav class="navbar">
              <div class="navbar-brand" style="display: flex; justify-content: space-between;">
                <a class="navbar-item" href="http://aldi.github.io/awesome-bulma-templates">
                  <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma Hotel" width="112" height="28" />
                </a>       
              <!-- Menu -->
              <div id="navMenuBlogHero" class="navbar-menu">
                <!-- Left Nav -->

                <div class="navbar-start">
                    <form action="/nexo" method="POST"><button class="navbar-item is-active">NEXO</button></form>
                    <form action="/pokedex" method="POST"><button class="navbar-item is-active">Pokedex</button></form>
                </div>
                <!-- ./Left Nav -->
                <!-- Right Nav -->
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="field is-grouped">
                      <p class="control">
                        <a class="button is-normal is-facebook">
                          <span class="icon">
                            <i class="fab fa-facebook-f"></i>
                          </span>
                          <span>Facebook</span>
                        </a>
                      </p>
                      <p class="control">
                        <a class="button is-normal is-success" href="tel:+302109999999">
                          <span class="icon">
                            <i class="fa fa-phone-alt"></i>
                          </span>
                          <span>Call Us</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="slider-content animated zoomIn pb-6">
            <div>
              <p class="title is-1 main-text">Welcome to Bulma Hotel</p>
              <p class="subtitle is-4 main-text">Experience The Luxury</p>
            </div>
          </div>
          <span class="scroll-down animated zoomIn">
            <svg
              width="30px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 1.5;
              "
            >
              <path id="wheel" d="M123.359,79.775l0,72.843" style="fill: none; stroke: #fff; stroke-width: 20px;" />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style="fill: none; stroke: #fff; stroke-width: 20px;"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
    <!-- Rooms Section -->
    <section class="hero" id="rooms">
      <div class="hero-body">
        <div class="container">
          <div class="rooms columns">
            <!-- Executive Gold Single -->
            <div class="column">
              <figure class="image">
                <img
                  src="https://images.unsplash.com/photo-1515510621228-30de609bbd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Executive Gold Single"
                />
              </figure>
              <div class="content">
                <div></div>
                <h1 class="title is-6">Executive Gold Single</h1>
                <p>The Executive Gold Single Rooms can hold <b>2 guests</b> (with extra bed €50).</p>
                <a class="button is-primary open-modal" href="#">View Details €119/day</a>
              </div>
            </div>
            <!-- Executive Gold Double -->
            <div class="column">
              <figure class="image">
                <img
                  src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Executive Gold Double"
                />
              </figure>
              <div class="content">
                <div></div>
                <h1 class="title is-6">Executive Gold Double</h1>
                <p>The Executive Gold Double Rooms can hold <b>3 guests</b> (with extra bed €50).</p>
                <a class="button is-primary open-modal" href="#">View Details €239/day</a>
              </div>
            </div>
            <!-- Premier Diamond Single -->
            <div class="column">
              <figure class="image">
                <img
                  src="https://images.unsplash.com/photo-1590490360836-2e3b067c082b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Premier Diamond Single"
                />
              </figure>
              <div class="content">
                <div></div>
                <h1 class="title is-6">Premier Diamond Single</h1>
                <p>The Premier Diamond Single rooms can hold <b>2 guests</b> (with extra bed €50).</p>
                <a class="button is-primary open-modal" href="#">View Details €399/day</a>
              </div>
            </div>
            <!-- Premier Diamond Double -->
            <div class="column">
              <figure class="image">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Premier Diamond Double"
                />
              </figure>
              <div class="content">
                <div></div>
                <h1 class="title is-6">Premier Diamond Double</h1>
                <p>he Premier Diamond Double rooms can hold <b>3 guests</b> (with extra bed €50).</p>
                <a class="button is-primary open-modal" href="#">View Details €499/day</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./Rooms Section -->
    <!-- Features Modal -->
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="content">
          <div class="columns">
            <div class="column">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma Hotels" width="150" />
            </div>
            <div class="column">
              <div>
                <i class="fa fa-phone"></i> &nbsp; <span>Phone Number</span> &nbsp;
                <a style="color: black;" href="tel:+30 2109999999">+30 2109999999</a>
              </div>
              <div>
                <i class="fa fa-phone"></i> &nbsp; <span>Reservation</span> &nbsp;
                <a style="color: black;" href="tel:+30 2109999997">+30 210999997</a>
              </div>
            </div>
          </div>
          <h3>Facilities &amp; Features</h3>
          <div class="columns">
            <ul class="column">
              <li>Free Wi-Fi Connectivity</li>
              <li>Complimentary Breakfast</li>
              <li>Doc on Call</li>
              <li>Board Rooms</li>
              <li>Electronic Card Locks</li>
              <li>In Room Safe</li>
            </ul>
            <ul class="column">
              <li>Laundry Facility</li>
              <li>Hair Dryer</li>
              <li>Travel Assistance</li>
              <li>24 hrs Check-in &amp; Check-out</li>
              <li>Coffee / Tea Maker in Room</li>
              <li>Mini Bar</li>
            </ul>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  `
  const getPokedexHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pokedex</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap');

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Oxanium', cursive;
            }

            body {
                text-align: center;
                background: linear-gradient(to bottom, #6ab7f5, #fff);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            main {
                display: inline-block;
                padding: 15px;
                position: relative;
                background: white;
                border-radius: 10px;
                box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
                padding: 20px;
            }

            .pokemon_placeholder {
                width: 200px;
                height: 200px;
                background: red;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 1.5rem;
                margin: auto;
                border-radius: 10px;
            }

            .pokemon_data {
                font-weight: 600;
                color: #3a444d;
                font-size: 1.5rem;
                margin-top: 10px;
            }

            .form {
                margin-top: 15px;
            }

            .input_search {
                width: 80%;
                padding: 10px;
                outline: none;
                border: 2px solid #333;
                border-radius: 8px;
                font-weight: 600;
                color: #3a444d;
                font-size: 1rem;
            }

            .buttons {
                margin-top: 15px;
                display: flex;
                gap: 10px;
                justify-content: center;
            }

            .button {
                padding: 10px 15px;
                border: 2px solid #000;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                color: white;
                background-color: #444;
                cursor: pointer;
            }

            .button:active {
                background-color: #222;
            }
        </style>
    </head>
    <body>
        <main>
            <div class="pokemon_placeholder">Pokémon</div>
            <h1 class="pokemon_data">
                <span class="pokemon_number">#</span> - 
                <span class="pokemon_name">Nombre</span>
            </h1>

            <form class="form">
                <input 
                    type="search" 
                    class="input_search" 
                    placeholder="Nombre o Número ">
            </form>

            <div class="buttons">
                <button class="button btn-prev">Prev &lt;</button>
                <button class="button btn-next">Next &gt;</button>
            </div>
        </main>

        <script>
            const pokemonName = document.querySelector('.pokemon_name');
            const pokemonNumber = document.querySelector('.pokemon_number');
            const pokemonPlaceholder = document.querySelector('.pokemon_placeholder');
            const form = document.querySelector('.form');
            const buttonPrev = document.querySelector('.btn-prev');
            const buttonNext = document.querySelector('.btn-next');
            const input = document.querySelector('.input_search');

            let searchPokemon = 1;

            const fetchPokemon = async (pokemon) => {
                try {
                    const APIResponse = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${pokemon}\`);
                    if (APIResponse.status === 200) {
                        const data = await APIResponse.json();
                        return data;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error fetching Pokémon:', error);
                    return null;
                }
            };

            const renderPokemon = async (pokemon) => {
                pokemonName.innerHTML = 'Loading...';
                pokemonNumber.innerHTML = '';
                pokemonPlaceholder.innerHTML = 'Loading...';

                const data = await fetchPokemon(pokemon);

                if (data) {
                    pokemonName.innerHTML = data.name;
                    pokemonNumber.innerHTML = data.id;

                    const pokemonSprite = data['sprites']['front_default'];
                    if (pokemonSprite) {
                        pokemonPlaceholder.style.backgroundImage = \`url(\${pokemonSprite})\`;
                        pokemonPlaceholder.style.backgroundSize = 'cover';
                        pokemonPlaceholder.style.backgroundPosition = 'center';
                    } else {
                        pokemonPlaceholder.innerHTML = 'No Image';
                        pokemonPlaceholder.style.backgroundImage = 'none';
                    }

                    input.value = '';
                    searchPokemon = data.id;
                } else {
                    pokemonPlaceholder.innerHTML = 'No encontrado :(';
                    pokemonPlaceholder.style.backgroundImage = 'none';
                    pokemonName.innerHTML = 'No encontrado :(';
                    pokemonNumber.innerHTML = '';
                }
            };

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                renderPokemon(input.value.toLowerCase());
            });

            buttonPrev.addEventListener('click', () => {
                if (searchPokemon > 1) {
                    searchPokemon -= 1;
                    renderPokemon(searchPokemon);
                }
            });

            buttonNext.addEventListener('click', () => {
                searchPokemon += 1;
                renderPokemon(searchPokemon);
            });

            renderPokemon(searchPokemon);
        </script>
    </body>
    </html>
    `;
};


const htmlPage = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario</title>
    </head>
    <body>
        <h1>Formulario de Registro</h1>
        <form action="/guardar" method="POST">
            <label>Nombre:</label>
            <input type="text" name="nombre" required>
            <br>
            <label>Correo:</label>
            <input type="email" name="correo" required>
            <br>
            <button type="submit">Enviar</button>
        </form>
    </body>
    </html>
`;


const page404 = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página no encontrada</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background-color: #f8d7da;
                }
                h1 {
                    color: #721c24;
                }
                a {
                    text-decoration: none;
                    color: #155724;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Error 404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
                <button>Volver a la página principal</button>
        </body>
        </html>`




const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Credenciales válidas (deberían almacenarse en una base de datos)
const validUser = 'NEXO@gmail.com';
const validPassword = 'CreandoElMañana';


app.get('/', (req, res) => {
    res.send(logIn);
});


app.post('/dashboard', (req, res) => {
    const { username, password } = req.body;

    if (username === validUser && password === validPassword) {
        res.send(dashboard); 
    } else {
        res.send(dashboard);
    }
});

app.post('/logout',(req,res)=>{
    res.send(logOut)
})


app.post('/bulmaPage',(req,res)=>{
    res.send(bulmaPage)
})


app.post('/pokedex',(req,res)=>{
    res.send(getPokedexHTML());
})

app.post('/nexo',(req,res)=>{
    res.send(htmlPage);
})


app.post('/guardar', (req, res) => {
    const { nombre, correo } = req.body;
    const data = `Nombre: ${nombre}, Correo: ${correo}\n`;

    fs.appendFile('datos.txt', data, () => {
        res.redirect('/'); 
    });
});


app.use((req,res)=>{
    res.status(404).send(page404);
})



// Servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

