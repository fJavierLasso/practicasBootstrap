

//Detectar click de botón
document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click",function () {
        var audio = new Audio(`sounds/${element.textContent}.mp3`);
        buttonAnimation(element.textContent);
        audio.play();
    });
    
});

//Detectar pulsación de tecla
document.addEventListener("keydown", function(event){
    //hago esto para que no dé errores cuando pulsas una tecla que no tiene sonido.
    var teclasAsignadas = ["a","s","d","w","j","k","l"];
    if(teclasAsignadas.includes(event.key)) {
        
        var audio = new Audio(`sounds/${event.key}.mp3`);
        buttonAnimation(event.key);
        audio.play();
    }
   
})

function buttonAnimation(button){
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+button).classList.remove("pressed");
    },100);
}

