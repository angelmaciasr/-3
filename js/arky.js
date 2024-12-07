"use strict";

class Patito{

    getElementoSorpresa(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Sorpresa </h2> <h3> Corremos la San Silvestre </h3> <img src="imgs/sanSilvestreMapa.png"/><br>
        <img src="imgs/sanSilvestre.png"/>`
        document.body.appendChild(art);
    }

    getColgante(){
        const fechaColgante = new Date('2024-12-07T01:00:00');

        var now = new Date();
        
        
        if(now > fechaColgante){
            this.seeColgante();
        }else{
            var art = document.createElement("article");
            art.innerHTML = `<h2> TODAVÍA NO PUEDES VER EL PRIMER REGALO</h2> <p>Ratita impaciente</p> <br> <br> <p>¿O sí?
                <form>
                    <input id="password" name="password" placeholder="Contraseña" type="text" required>
                    <input type="button" value="Enviar" onclick="patito.checkPassword('colgante')">
                </form>`;
            document.body.appendChild(art);
        }
    }

    seeColgante(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Primer regalo</h2> <img src="imgs/colgante.jpg"/>`;
        document.body.appendChild(art);
    }

    getFlores(){
        const fechaFlores = new Date('2024-12-07T23:00:00');

        var now = new Date();

        if(now > fechaFlores){
            this.seeFlores()
        }else{
            var art = document.createElement("article");
            art.innerHTML = `<h2> TODAVÍA NO PUEDES VER EL SEGUNDO REGALO</h2> <p>Patito impaciente</p> <br> <br> <p>¿O sí?
                <form >
                    <input id="password" name="password" placeholder="Contraseña" type="text" required>
                    <input type="button" value="Enviar" onclick="patito.checkPassword('flores')">
                </form>`;
            document.body.appendChild(art);
        }
    }

    seeFlores(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Segundo Regalo</h2> <img src="imgs/flores.jpg" />`;

        document.body.appendChild(art);
    }

    getCarta(){
        const fechaCarta = new Date('2024-12-07T23:00:00');

        var now = new Date();

        if(now > fechaCarta){
           this.seeCarta();
        }else{
            var art = document.createElement("article");
            art.innerHTML = `<h2> TODAVÍA NO PUEDES VER EL TERCER REGALO</h2> <p>Arky impaciente</p><br><br> <p>¿O sí?
                <form >
                    <input id="password" name="password" placeholder="Contraseña" type="text" required>
                    <input type="button" value="Enviar" onclick="patito.checkPassword('carta')">
                </form>`;
            document.body.appendChild(art);
        }

    }

    seeCarta(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Primer regalo</h2> <img src="imgs/carta.jpg" />`;

        document.body.appendChild(art);
    }

    checkPassword(regalo){
        var psw = document.getElementById("password").value;

        if(psw === "070624-torre_eiffel"){
            if(regalo === "colgante"){
                this.seeColgante();
            }else if(regalo === "flores"){
                this.seeFlores();
            }else if(regalo === "carta"){
                this.seeCarta();
            }
        }else{
            alert("Contraseña incorrecta");
        }

    }

    getCarruselFotos(){
        //Cargar fotos 
        var fotos = [
            "f1.JPG", 
            "f2.JPG", 
            "f3.JPG",
            "f4.JPG",
            "f5.JPG",
            "f6.JPG",
            "f7.JPG",
            "f8.jpeg",
            "f9.JPG",
            "f10.jpg",
            "f11.JPG",
            "f12.jpeg",
            "f13.jpeg",
            "f14.jpeg",
            "f15.jpeg",
            "f16.jpeg",
            "f17.jpeg",
            "f18.jpeg",
            "f19.jpeg",
            "f20.jpeg",
            "f21.jpeg",
            "f22.jpeg",
            "f23.jpeg",
            "f24.jpeg",
            "f25.jpeg",
            "f26.jpeg",
            "f27.jpeg",
            "f28.jpeg",
            "f29.jpeg",
            "f30.jpeg",
            "f31.jpeg",
            "f33.jpeg",
            "f34.jpeg",
            "f35.jpeg",
            "f36.jpeg",
            "f_final.jpg",
        ]

        
        var art = document.createElement("article");

        var car="";

        for(var i=0;i<fotos.length;i++) {                 
            car += `<img src="imgs/${fotos[i]}" />`;
        }

        car += "<button data-action=" + "next" + "> > </button> <button data-action=" + "prev" + "> < </button></article>";
        art.innerHTML = `<h2>Nuestra historia</h2> ${car}`;

        var main = document.createElement("main");
        main.appendChild(art)
        document.body.appendChild(main);




        //FUNCIONAMIENTO CARRUSEL
        const slides = document.querySelectorAll("img");

        // select next slide button
        const nextSlide = document.querySelector("button[data-action='next']");

        // current slide counter
        let curSlide = 0;
        // maximum number of slides
        let maxSlide = slides.length - 1;

        // add event listener and navigation functionality
        nextSlide.addEventListener("click", function () {
            // check if current slide is the last and reset current slide
            if (curSlide === maxSlide) {
                curSlide = 0;
            } else {
                curSlide++;
            }

            //   move slide by -100%
            slides.forEach((slide, indx) => {
                var trans = 100 * (indx - curSlide);
                $(slide).css('transform', 'translateX(' + trans + '%)')
            });
        });

        // select next slide button
        const prevSlide = document.querySelector("button[data-action='prev']");

        // add event listener and navigation functionality
        prevSlide.addEventListener("click", function () {
            // check if current slide is the first and reset current slide to last
            if (curSlide === 0) {
                curSlide = maxSlide;
            } else {
                curSlide--;
            }

            //   move slide by 100%
            slides.forEach((slide, indx) => {
                var trans = 100 * (indx - curSlide);
                $(slide).css('transform', 'translateX(' + trans + '%)')
            });
        });
            
        
    }


    getCanciones(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Canciones </h2>
            <a href="https://open.spotify.com/playlist/72OLI5m2NI6EkT1Bvx2CyK?si=C1Lta6F2Sd-q8xZHRxujw&pi=e-B6LSa8SFQveg" target="_blank"> Nuestras Canciones </a> `;
        document.body.appendChild(art);
    }



    getDailyPlanning(){
        // horario
        var article = document.createElement("article");

        //inicio estándar
        var inicioTitle = document.createElement("h2");
        inicioTitle.innerHTML = "Buenos Días Amor (?h-14:00h)";
        article.appendChild(inicioTitle);

        var ul = document.createElement("ul");
        ul.innerHTML = `<li>Despertar</li> <li>5 minutitos más</li> <li>Despertarse (esta vez en serio venga)</li>
            <li>Te has vuelto a dormir, vas tarde, venga</li> <li>Sí, estoy cambiando esto de noche, me he ido pa que no me lleve la grúa el coche (estaba muy a gusto quería dormir)</li>
            <li>Te llevo tu segundo regalo (si es muy tarde porque nos dormimos se puede aplazar al turno de tarde)</li> 
            <li>FIN del turno de mañana (trabajas a las 14:00)</li>`;

        article.appendChild(ul);

        var turnoTarde = document.createElement("h2");
        turnoTarde.innerHTML = "Turno de tarde (17:00h-20:00h)";
        article.appendChild(turnoTarde);

        var cansancio = document.createElement("p");
        cansancio.innerHTML = "Indica tu nivel de cansancio a continuación:";
        article.appendChild(cansancio);

        var botonAlto = document.createElement("button");
        botonAlto.innerHTML = "Alto";
        botonAlto.addEventListener("click", function(){
            patito.getPlanMuyCansada(article);
            patito.getPlanFinal(article);
        });
        article.appendChild(botonAlto);
        
        var botonMedio = document.createElement("button");
        botonMedio.innerHTML = "Medio";
        botonMedio.addEventListener("click", function(){
            patito.getPlanCansada(article);
            patito.getPlanFinal(article);
        });
        article.appendChild(botonMedio);

        var botonBajo = document.createElement("button");
        botonBajo.innerHTML = "Bajo";
        botonBajo.addEventListener("click", function(){
            patito.getPlanPocoCansada(article);
            patito.getPlanFinal(article);
        });
        article.appendChild(botonBajo);

        

        document.body.appendChild(article);
    }

    getPlanMuyCansada(article){

        var par = document.createElement("p");
        par.innerHTML = `[Muy Cansada] <br>Acabas de indicar que estás tiesa, para el arrastre, muerta, no puedes con el alma, etc.<br>
        El plan del día propuesto ante tal nivel de cansancio es:`;

        var ul = document.createElement("ul");
        ul.innerHTML = `<li>Comer (necesitas fuerzas)</li>
        <li>Entrega del segundo regalo si no dió tiempo en el turno de mañana</li>
        <li>Entrega del tercer regalo</li>
        <li>Ver una peli o serie juntos en casa</li>
        <li>Paseo a Sophie (opcional porque dan lluvias)</li>
        <li>Coger comida que te guste de merienda (fresas, yogur con fantasía, pasteles, ...)</li>
        <li>Decidir cena</li>
        <li>FIN del turno de tarde (trabajas a las 20:00)</li>`;
        
        article.appendChild(par);        
        article.appendChild(ul);
    }

    getPlanCansada(article){
        var par = document.createElement("p");
        par.innerHTML = `[Cansada] <br>Acabas de indicar que estás jodida, quieres plan chill pero todavía tienes sangre en el cuerpo.<br>
        El plan del día propuesto ante tal nivel de cansancio es:`;

        var ul = document.createElement("ul");
        ul.innerHTML = `<li>Comer (necesitas fuerzas)</li>
        <li>Entrega del segundo regalo si no dió tiempo en el turno de mañana</li>
        <li>Entrega del tercer regalo</li>
        <li>Opción calle: <ul>
            <li>Ir a tomar unos pasteles/churros y pasear para ver las luces</li> </ul>
        </li>
        <li>Opción coche: <ul>
            <li>Coger merienda e ir con el coche a comerla a lugar con vistas (preguntar al organizador por lugar concreto)</li> </ul>
        <li>Decidir cena</li>
        <li>FIN del turno de tarde (trabajas a las 20:00)</li>`
        
        article.appendChild(par);   
        article.appendChild(ul);  
    }

    getPlanPocoCansada(article){
        var par = document.createElement("p");
        par.innerHTML = `[Poco Cansada] <br>Acabas de indicar que estás en la flor de la vida, alegre, enérgica, entusiasmada por la velada<br>
        El plan del día propuesto ante tal nivel de emoción es:`;

        var ul = document.createElement("ul");
        ul.innerHTML = `<li>Comer (necesitas fuerzas)</li>
        <li>Entrega del segundo regalo si no dió tiempo en el turno de mañana</li>
        <li>Entrega del tercer regalo</li>
        <li>Ir a la pista de hielo</li>
        <li>Merendar por el sitio unos churros, pasteles, tortitas, ...</li>
        <li>Decidir cena</li>
        <li>FIN del turno de tarde (trabajas a las 20:00)</li>`
        
        article.appendChild(par);  
        article.appendChild(ul);
    }


    getPlanFinal(article){
        var turnoTarde = document.createElement("h2");
        turnoTarde.innerHTML = "Turno de noche (00:00h-?h)";

        var par = document.createElement("p");
        par.innerHTML = "Hemos llegado al final del día vivos (un día más un día menos)<br>El plan propuesto para cerrar el día es:";

        var ul = document.createElement("ul");
        ul.innerHTML = `<li>Ir a tu casa</li>
        <li>Cenar</li>
        <li>Ver crónicas o serie/película de preferencia</li>
        <li>Dormir juntos <3</li>`

        article.appendChild(turnoTarde);
        article.appendChild(par);
        article.appendChild(ul);

        var artPropuestos = document.createElement("article");
        var propTitle = document.createElement("h2");
        propTitle.innerHTML = "Otros Planes Propuestos";

        var pProp = document.createElement("p");
        pProp.innerHTML = `Debido al poco tiempo que tienes disponible (gracias mcDonalds) aquí dejo 
        otros planes que me gustaría hacer y fechas propuestas para cada uno`;

        var ulProp = document.createElement("ul");
        ulProp.innerHTML = `<li><a href="https://www.ocinepremiumlosfresnos.es/film-7109/p?la-cenicienta-ballet-live">Ballet Cenicienta (no se de estas cosas, échale un ojo)</a> -- 10/12</li>
        <li>Visita al Acuario -- 14/01</li>
        <li>Visita a Pueblo de Asturias -- (cualquier sábado/domingo que no trabajes y no haga malo)</li>
        <li>Paseo viendo las luces -- 09/12</li>
        <li>Sesión de Fotos (acabar cámara desechable) -- (cualquier día que quieras arreglarte y haga bueno)</li>
        <li>Visita a la Nieve -- (Se hace 100% pero tendrá que ser para Marzo o así que tiene que nevar y tengo que convencer de que me dejen el coche)</li>
        <li>Ir a Esquiar -- (Parecido a la anterior pero el plan sería diferente porque vamos a fuentes de invierno, para este necesitamos dinero)</li>`

        artPropuestos.appendChild(propTitle);
        artPropuestos.appendChild(pProp);
        artPropuestos.appendChild(ulProp);

        document.body.appendChild(artPropuestos);
    }

}
