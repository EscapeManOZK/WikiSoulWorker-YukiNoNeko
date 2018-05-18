var normal=false;
var elit=false;
var bos=false;
var Etoile=false
function Gestion1() {
    $("#descrip1").slideToggle("slow");
    if (normal){
        $("#menu1 h5").removeClass("open");
        $("#menu1 h5").addClass("closed");
        normal=false;
    } else {
        $("#menu1 h5").removeClass("closed");
        $("#menu1 h5").addClass("open");
        normal=true;
    }
    $("#F1").toggleClass('flip');
}

function Gestion2() {
    $("#descrip2").slideToggle("slow");
    if (elit){
        $("#menu2 h5").removeClass("open");
        $("#menu2 h5").addClass("closed");
        elit=false;
    } else {
        $("#menu2 h5").removeClass("closed");
        $("#menu2 h5").addClass("open");
        elit=true;
    }
    $("#F2").toggleClass('flip');
}
function Gestion3() {
    $("#descrip3").slideToggle("slow");
    if (bos){
        $("#menu3 h5").removeClass("open");
        $("#menu3 h5").addClass("closed");
        bos=false;
    } else {
        $("#menu3 h5").removeClass("closed");
        $("#menu3 h5").addClass("open");
        bos=true;
    }
    $("#F3").toggleClass('flip');
}

function Gestion4() {
    $("#descrip4").slideToggle("slow");
    if (Etoile){
        $("#menu4 h5").removeClass("open");
        $("#menu4 h5").addClass("closed");
        Etoile=false;
    } else {
        $("#menu4 h5").removeClass("closed");
        $("#menu4 h5").addClass("open");
        Etoile=true;
    }
    $("#F4").toggleClass('flip');
}


$(document).ready(function() {
    if (window.innerWidth<768){
        $("#content h5").addClass("closed");
        $("#content h5").css("cursor","pointer");
        $("#menu1").on("click",Gestion1);
        $("#menu2").on("click",Gestion2);
        $("#menu3").on("click",Gestion3);
        $("#menu4").on("click",Gestion4);
    }else {
        $("#content h5").addClass("open");
        $(".imageListe").addClass("imageListeNull")
    }
});