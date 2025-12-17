/*TODOS LOS MAINS*/
// Generador local de HTML para iconos RRSS (usado en la plantilla de contacto y footer)
function generateIconsHTML(count = 5){
    let html = '';
    for(let i = 0; i < count; i++){
        html += `<a href="#"><img src="./css/iconsRRSS/icon${i}.png" style="margin-right: 0.8rem;"></a>`;
    }
    return html;
}
const mains = {
        'index':
        
            `  <div class="img-perfil"><img src='./css/perfilPortafolio.webp' alt="imagen aleatoria"></div>

        <div class="text-content">
                <h2>bienvenido</h2>
                <div>
                    <h3>¿quien soy?</h3>
                    <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                    </p>
                </div>

            <div class="enlaces">
                <ul>
                    <li><a href="#" data-section="curriculum">Curriculum</a></li>
                    <li><a href="#" data-section="proyectos">Proyectos</a></li>
                    <li><a href="#" data-section="contactos">Contactos</a></li>
                </ul>
            </div>
        </div>`,

            'curriculum':
                
                `
                    <h2>Curriculum</h2>
                        <div class="content-curriculum">
                        <section class="personal-info">
                             <h3>Experiencia Laboral</h3>
                            <ul>
                                <li>Desarrollador Web Junior - Tech Solutions (2021 - 2022)</li>
                                <li>Desarrollé y mantuve sitios web utilizando HTML, CSS y JavaScript.</li>
                                <li>Colaboré con el equipo de diseño para implementar interfaces de usuario atractivas y funcionales.</li>
                                <li>Optimicé el rendimiento del sitio web, mejorando los tiempos de carga en un 20%.</li>
                                <li>Practicante de Desarrollo de Software - SoftDev Inc. (2020 - 2021)
                                <li>Asistí en el desarrollo de aplicaciones web utilizando frameworks como React y Node.js.</li>
                                <li>Participé en revisiones de código y pruebas para garantizar la calidad del software.</li>
                                <li>Colaboré con equipos multifuncionales para cumplir con los plazos del proyecto.</li>
                            </ul>
                        </section>

                        <section class="personal-info">
                            <h3>Formación Académica</h3>
                            <ul>
                                <li>Ingeniería en Sistemas - Universidad Nacional de Colombia (2020 - Presente)</li>
                                <li>Técnico en Desarrollo de Software - Instituto Técnico Central (2018 - 2020)</li>
                            </ul>
                        </section>
                            
                        <section class="personal-info">
                            <h3>Habilidades Técnicas</h3>
                            <ul>
                                <li>Lenguajes de Programación: JavaScript, Python, HTML, CSS</li>
                                <li>Frameworks y Librerías: React, Node.js</li>
                                <li>Bases de Datos: MySQL, MongoDB</li>
                                <li>Control de Versiones: Git, GitHub</li>
                                <li>Herramientas de Desarrollo: Visual Studio Code, Postman</li>
                                <li>Metodologías Ágiles: Scrum, Kanban</li>
                                <li>Idiomas: Español (Nativo), Inglés (Intermedio)</li>
                                <li>Habilidades Blandas: Trabajo en equipo, Resolución de problemas, Comunicación efectiva</li>
                                <li>Certificaciones: Certificado de Desarrollo Web Full Stack - Codecademy (2021)</li>
                                <li>Certificado de Fundamentos de Python - Coursera (2020)</li>
                                <li>Certificado de Inglés Intermedio - Duolingo (2019)</li>
                                <li>Proyectos Personales: Portafolio en línea, Aplicación de Tareas (To-Do List)</li>
                                <li>Contribuciones a proyectos de código abierto en GitHub</li>
                                <li>Participación en hackatones y eventos de tecnología</li>
                                <li>Voluntariado en organizaciones tecnológicas locales</li>
                                <li>Intereses: Desarrollo web, Inteligencia Artificial, Diseño UX/UI, Juegos y aplicaciones móviles</li>
                                <li>Lectura de blogs y libros sobre tecnología y programación</li>
                                <li>Exploración de nuevas tecnologías y tendencias en el desarrollo de software</li>
                                <li>Asistencia a conferencias y meetups de desarrolladores</li>
                                <li>Colaboración en comunidades en línea de desarrolladores</li>
                                <li>Participación en cursos y talleres de actualización tecnológica</li>
                                <li>Redes Sociales Profesionales: LinkedIn, GitHub</li>
                                <li>Blogs y Foros: Stack Overflow, Medium</li>
                                <li>Canales de YouTube: Traversy Media, The Net Ninja</li>
                                <li>Podcasts: Syntax, CodeNewbie</li>
                                <li>Comunidades en Línea: Dev.to, Reddit (r/webdev)</li>
                                <li>Eventos y Conferencias: JSConf, React Summit</li>
                                <li>Meetups Locales: Grupos de desarrolladores en mi ciudad</li>
                                <li>Hackatones: Participación en eventos de desarrollo colaborativo</li>
                            </ul>
                        </section>
                        
                            
                            
                           

                        </div>`,

            'contacto': 

            `  <h2>Contacto</h2>
                <div class="text-content info-contact">
                    <div class="main-rrss">
                        <p>redes sociales</p>
                        <div>
                            ${generateIconsHTML()}
                        </div>
                        
                    </div>
                    <div>
                        <h3>Email </h3>
                        <p>yosderh@gmail.com</p>
                    </div>
                    </div>

                        <div class="text-content">
                            <form name="contacto" id="contacto" action="yosder@gmail.com" method="get" enctype="text/plain">
                            <div class="tag">
                                <label for="nombre">Nombre</label>
                                <input name="nombre" id="nombre" type="text">
                            </div>
                            <div class="tag">
                                <label for="apellido">Apellido</label>
                                <input name="apellido" id="apellido" type="text">
                            </div>
                            <div class="tag">
                                <label for="email">Email*</label>
                                <input name="email" id="email" type="text">
                            </div>
                            <div class="tag">
                                <label for="asunto">Asunto</label>
                                <input name="asunto" id="asunto" type="text">
                            </div>
                            <div class="tag">
                                <label for="mensaje">Mensaje</label>
                                 <textarea name="mensaje" id="mensaje"></textarea>
                            </div>
                                 <button class="button" type="submit">Enviar</button>
                            </form>
                        </div>`,

            'proyecto': 

                    `<h2 class="titulo">Proyectos</h2>
                        <div class="projects-list"></div>`
}







/** TODOS LOS DATOS DE LOS PROYECTOS */
const proyects = [
    {
        "name": 'black Jack' ,
        "img": './css/minProyect/BlackJack.webp',
        "descripcion": 'es el juego tipico de Black Jack estructurado con HTML, CSS y JavaScript Vanilla',
        "url": 'https://modest-hodgkin-32d940.netlify.app/'
    },
     {
        "name": 'calculadora de Propinas de trabajadores' ,
        "img": './css/minProyect/calculatorTips.webp   ',
        "descripcion": 'es un programa que calcula montos por igual segun las horas trabajadas de cada trabajador hecho con html, css y JavaScript Vanilla',
        "url": 'https://calculator-tips-yosderh.netlify.app/'
    },
     {
        "name": 'tarjeta con QR' ,
        "img": './css/minProyect/cardFrontendMentor.webp   ',
        "descripcion": 'es una tarjeta con QR creada para la practica de html y css',
        "url": 'https://jolly-lovelace-631f2c.netlify.app/'
    },
     {
        "name": 'control de Gastos' ,
        "img": './css/minProyect/controlDeGastospng.webp   ',
        "descripcion": 'es una APP que calcula los gastos segun tu presupuesto y puedes dividir en categorias los gastos',
        "url": 'https://hilarious-torte-c37542.netlify.app/'
    },
     {
        "name": 'Informacion de Criptos' ,
        "img": './css/minProyect/cripto.webp   ',
        "descripcion": 'esta aplicación te permite obtener informacion de ciertas criptomonedas a travez de un llamado de una API ',
        "url": 'https://visionary-pony-1156a2.netlify.app/'
    },
     {
        "name": 'pagina de Festival' ,
        "img": './css/minProyect/festival.webp ',
        "descripcion": 'es una web que simula el contenido de un festival de musica con galeria de imagenes',
        "url": 'https://wizardly-torvalds-ef9c35.netlify.app/'
    },
     {
        "name": 'freeLancer' ,
        "img": './css/minProyect/freeLancer.webp   ',
        "descripcion": 'es una web estructurada con solo html y css que simula una web de FreeLancer',
        "url": 'https://distracted-wozniak-f759e3.netlify.app/'
    },
     {
        "name": 'calculador de propinas de un menu' ,
        "img": './css/minProyect/menuCalculador.webp   ',
        "descripcion": 'proyecto que calcula las propinas por porcentajes segun la cuenta de lo consumido en algun restaurante',
        "url": 'https://chipper-monstera-ee3c1b.netlify.app/'
    },
     {
        "name": 'tienda' ,
        "img": './css/minProyect/store.webp',
        "descripcion": 'es un proyecto que simula una tienda Online estructurada con solo html y css',
        "url": 'https://pract-1-yosder.netlify.app/'
    },
]

/** SELECCION DEL DOM */
const container = document.querySelector('.footer-content #rrss');
const linksPag = document.querySelectorAll('header .nav-bar ul a');
const body = document.getElementById('body');
const main = document.getElementById('main');





/*imprimimos en pantalla los iconos de las redes sociales en el footer */
  
container.innerHTML = generateIconsHTML(5);

document.body.addEventListener('click', function(e){

        if(e.target.matches('a[data-section]')){
            e.preventDefault();
            const seccion = e.target.getAttribute('data-section');
            const nameLink = [...linksPag].find(l => l.getAttribute('data-section') === seccion);
            linksPag.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            body.classList.add('bodyChanged');

            switch (seccion) {
                case "curriculum" :
                    if(nameLink){
                        nameLink.classList.add('active');
                        main.classList.remove('container-contac')
                        main.classList.remove('main-proyects');
                        main.classList.remove('main-container');
                        main.classList.add('main-curriculum');
                    }
                    main.innerHTML = mains.curriculum

                        break;
                case "contactos" :
                     if(nameLink){
                         main.classList.remove('main-proyects');
                         main.classList.remove('main-curriculum');
                        nameLink.classList.add('active');
                        main.classList.add('container-contac')
                        main.classList.add('main-container');
                    }
                    main.innerHTML = mains.contacto;
                    
                        break;
                case "proyectos" :
                     if(nameLink){
                         main.classList.remove('container-contac');
                         main.classList.remove('main-proyects');
                         main.classList.remove('main-curriculum');
                         nameLink.classList.add('active');
                        main.classList.add('main-container');
                        main.classList.add('main-proyects');
                    }
                    main.innerHTML = mains.proyecto;
                    ShowProyects();
                        break;
                case "index" :
                main.innerHTML = mains.index;
                body.classList.remove('bodyChanged');
                main.classList.remove('main-proyects');
                main.classList.remove('container-contac');
                main.classList.remove('main-curriculum');
                main.classList.add('main-container');
                   linksPag.forEach(l => l.classList.remove('active'));
            }
        }



function ShowProyects(){
    const list = document.querySelector('.projects-list');
    if(!list) return;
    list.innerHTML = proyects.map(proyect =>
        ` <div class="project-card">
            <h3 >${proyect.name}</h3>
            <a href="${proyect.url}" target="_blank">
                <img src="${proyect.img}" alt="${proyect.name}">
            </a>
            <p>${proyect.descripcion}</p>
        </div>`
    ).join("");
} 








}); //fin de la funcion de carga de la pagina