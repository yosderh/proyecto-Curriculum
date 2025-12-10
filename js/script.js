

/** SELECCION DEL DOM */
const container = document.querySelector('.footer-content #rrss');
const linksPag = document.querySelectorAll('header .nav-bar ul a');
const body = document.getElementById('body');
const main = document.getElementById('main');





/*imprimimos en pantalla los iconos de las redes sociales en el footer */
for(let i=0; i<5; i++){
    let linkIcon = document.createElement('a'); 
    let img = document.createElement('img');
    img.src= `/css/iconsRRSS/icon${i}.png`;
    img.style.marginRight = '0.8rem';
    linkIcon.appendChild(img);
    container.appendChild(linkIcon);
}

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
                    }
                    main.innerHTML = mains.curriculum

                        break;
                case "contactos" :
                     if(nameLink){
                        nameLink.classList.add('active');
                    }
                    main.innerHTML = mains.contacto;
                    
                        break;
                case "proyectos" :
                     if(nameLink){
                        nameLink.classList.add('active');
                    }
                    main.innerHTML = mains.proyecto;
                        break;
                case "index" :
                main.innerHTML = mains.index;
                body.classList.remove('bodyChanged');
                   linksPag.forEach(l => l.classList.remove('active'));
            }
        }



}); //fin de la funcion de carga de la pagina