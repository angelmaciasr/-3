"use strict";

class Fondo{


    getPortada(){
            var i = document.createElement("img");
            i.src = "imgs/portada.png";
            i.alt = "Portada música";
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


