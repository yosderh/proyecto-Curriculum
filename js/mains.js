import { proyects } from "./proyects.js";

export function ShowProyects(){
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





// Generador local de HTML para iconos RRSS (usado en la plantilla de contacto)
function generateIconsHTML(count = 5){
    let html = '';
    for(let i = 0; i < count; i++){
        html += `<a href="#"><img src="/css/iconsRRSS/icon${i}.png" style="margin-right: 0.8rem;"></a>`;
    }
    return html;
}


export const mains = {
        'index':
        
            `  <div class="img-perfil"><img src='../css/perfilPortafolio.jpg' alt="imagen aleatoria"></div>

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
