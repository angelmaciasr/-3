"use strict";

class Patito{

    getElementoSorpresa(){
        var art = document.createElement("article");
        art.innerHTML = `<h2> Sorpresa </h2> <h3> Corremos la San Silvestre </h3> <img src="imgs/sanSilvestreMapa.png"/><br>
        <img src="imgs/sanSilvestre.png"/>`
        document.body.appendChild(art);
    }

    getColgante(){
        const fechaColgante = new Date('2024-12-07T23:00:00');

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

}
