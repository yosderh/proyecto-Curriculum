

/** SELECCION DEL DOM */
const container = document.querySelector('.footer-content #rrss');
//let linksPag = document.querySelectorAll('[data-section]');
const body = document.getElementById('body');
const main = document.getElementById('main');
const namePag = document.getElementById('namePag');    


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
            let seccion = e.target.getAttribute('data-section');
            console.log(e.target);
          //  e.target.classList.add('active');
            body.classList.add('bodyChanged');
            switch (seccion) {
                case "curriculum" :
                    main.innerHTML = mains.curriculum
                        break;
                case "contactos" :
                    main.innerHTML = mains.contacto;
                    
                        break;
                case "proyectos" :
                    main.innerHTML = mains.proyecto;
                        break;
                case "index" :
                main.innerHTML = mains.index;
                body.classList.remove('bodyChanged');
            }
        }

/*     for(let i=0; i<linksPag.length; i++){
        console.log("vuelta"+i);
        linksPag[i].addEventListener('click', function() {
            let seccion = this.getAttribute('data-section');
            for(let y=0; y<linksPag.length; y++){
                linksPag[y].classList.remove('active');
            }
            this.classList.add('active');
            body.classList.add('bodyChanged');

            switch (seccion) {
                case "curriculum" :
                    main.innerHTML = mains.curriculum
                        break;
                case "contactos" :
                    main.innerHTML = mains.contacto;
                    
                        break;
                case "proyectos" :
                    main.innerHTML = mains.proyecto;
                        break;
                case "index" :
                main.innerHTML = mains.index;
                body.classList.remove('bodyChanged');
            }
        });
     }*/

    /** funcion para abrir las diferentes pantallas segun le des click a los enlaces */

    
   /* function changeMain(array){

 
             array.forEach( link => {

        link.addEventListener('click', e => {
            e.preventDefault();

            array.forEach(l => l.classList.remove('active'));

            link.classList.add('active');
            body.classList.add('bodyChanged');

            const seccion = link.dataset.section;

            switch (seccion) {
                case "curriculum" :
                    main.innerHTML = mains.curriculum
                        break;
                case "contactos" :
                    main.innerHTML = mains.contacto;
                    
                        break;
                case "proyectos" :
                    main.innerHTML = mains.proyecto;
                        break;
            }
        })
    })
  }*/
   
/** llamadas de funciones */


   /* namePag.addEventListener('click',()=> {
        linksPag.forEach(l => l.classList.remove('active'));
        linksPagMain.forEach(l => l.classList.remove('active'));
        body.classList.remove('bodyChanged');

        main.innerHTML = mains.index;
    }) */

}); //fin de la funcion de carga de la pagina