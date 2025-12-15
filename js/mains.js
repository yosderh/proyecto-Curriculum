// Generador local de HTML para iconos RRSS (usado en la plantilla de contacto)
function generateIconsHTML(count = 5){
    let html = '';
    for(let i = 0; i < count; i++){
        html += `<a href="#"><img src="/css/iconsRRSS/icon${i}.png" style="margin-right: 0.8rem;"></a>`;
    }
    return html;
}
const mains = {
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
                
                `<div class="sub-title">
                        
                        </div>

                        <div class="text-content">
                            <h2>Curriculum</h2>
                            <div>
                                <h3>¿quien soy?</h3>
                                <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                                </p>
                            </div>

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
                            <form name="contacto" id="contacto" action="yosder@gmail.com" method="post" enctype="text/plain">
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
                    `<div class="sub-title">
                        
                        </div>

                        <div class="text-content">
                            <h2>Proyectos</h2>
                            <div>
                                <h3>¿quien soy?</h3>
                                <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                                </p>
                            </div>

                        </div>`
    
    }
