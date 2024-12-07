"use strict";

class Portada{


    getPortada(){
            var i = document.createElement("img");
            i.src = "imgs/portada.jpeg";
            i.alt = "Portada Arky";
            document.body.appendChild(i);

            $('body img').css({
                'width': '100%',  
                'height': '100%', 
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'z-index': -1  
            });
        
    }
}


