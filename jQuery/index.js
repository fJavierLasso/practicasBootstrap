
$(document).on("keydown",function(event){
    $("h1").text(event.key);
});

$("button").on("click",function(){
    $("h1").animate({margin: "20px"});
});


