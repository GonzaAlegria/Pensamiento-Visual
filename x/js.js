$(document).ready(function(){
$("#ocultar").click(function() {
    $("#disparador").toggle(1500);
    });
})

 /* codigo adaptado de: https://www.delftstack.com/es/howto/javascript/javascript-hide-show-elements/#utilice-hide-%2f-show-de-jquery-para-ocultar-%2f-mostrar-elementos-html 
 https://norfipc.com/codigos/jquery-ejemplos-practicos-usar-paginas-web.php*/

$(document).ready(function(){
    $("#hola").mouseenter(function() {
    $("#hola").text("Se llaman Shayra y Lucy respectivamente. La Shayra tiene 9 años cumplidos el 18 del presente mes y la Lucy tiene 4 años, cumple los 5 el 18 de agosto u.u");
    });
    })


function porencima(x) {
    x.style.color = "orange";
    }
       
function alquitar(x) {
    x.style.color = "black";
   }

$document.getElementById("enlace").addEventListener("mouseover", porencima);
$document.getElementById("enlace").addEventListener("mouseout", alquitar);

/* codigo adaptado de: https://es.stackoverflow.com/questions/140333/cambiar-color-texto-javascript*/