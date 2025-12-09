
    const container = document.querySelector('.footer-content #rrss');

    for(let i=0; i<5; i++){
        let linkIcon = document.createElement('a'); 
        let img = document.createElement('img');
        img.src= `/css/iconsRRSS/icon${i}.png`;
        img.style.marginRight = '0.8rem';
        linkIcon.appendChild(img);
        container.appendChild(linkIcon);
    }

    const linksPag = document.querySelectorAll('.nav-bar ul a');
    const body = document.getElementById('body');
    const main = document.getElementById('main');

    linksPag.forEach( link => {

        link.addEventListener('click', e => {
            e.preventDefault();

            linksPag.forEach(l => l.classList.remove('active'));

            link.classList.add('active');
            body.classList.add('section');

            const seccion = link.dataset.section;

            console.log(link);

            switch (seccion) {
                case "curriculum" :
                    main.innerHTML = `  
                        <div class="sub-title">
                        
                        </div>

                        <div class="text-content">
                            <h2>Curriculum</h2>
                            <div>
                                <h3>¿quien soy?</h3>
                                <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                                </p>
                            </div>

                        </div>`
                        break;
                case "contactos" :
                    main.innerHTML = ""
                    main.innerHTML = 
                    ` <div class="sub-title">
                    
                    </div>

                        <div class="text-content">
                            <h2>Contacto</h2>
                            <div>
                                <h3>¿quien soy?</h3>
                                <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                                </p>
                            </div>
                        </div>`
                        break;
                case "proyectos" :
                    main.innerHTML = ` 
                        <div class="sub-title">
                        
                        </div>

                        <div class="text-content">
                            <h2>Proyectos</h2>
                            <div>
                                <h3>¿quien soy?</h3>
                                <p>Soy un desarrollador en formación con una gran pasión por la tecnología y el diseño web. Me entusiasma trabajar y aprender distintos lenguajes de programación y transformar ideas en proyectos reales con ellos. Busco mejorar cada día mis habilidades, construir soluciones funcionales, bonitas y modernas y así expandir mis experiencias digitales 
                                </p>
                            </div>

                        </div>`
                        break;
            }
        })
    })

    
