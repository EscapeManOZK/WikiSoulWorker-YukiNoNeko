var normal=false;
var elit=false;
var bos=false;
var Etoile=false
function normaux() {
    $("#descrip-normaux").slideToggle("slow");
    if (normal){
        $("#normaux h5").removeClass("open");
        $("#normaux h5").addClass("closed");
        normal=false;
    } else {
        $("#normaux h5").removeClass("closed");
        $("#normaux h5").addClass("open");
        normal=true;
    }
}

function elite() {
    $("#descrip-elite").slideToggle("slow");
    if (elit){
        $("#elite h5").removeClass("open");
        $("#elite h5").addClass("closed");
        elit=false;
    } else {
        $("#elite h5").removeClass("closed");
        $("#elite h5").addClass("open");
        elit=true;
    }
}
function boss() {
    $("#descrip-boss").slideToggle("slow");
    if (bos){
        $("#boss h5").removeClass("open");
        $("#boss h5").addClass("closed");
        bos=false;
    } else {
        $("#boss h5").removeClass("closed");
        $("#boss h5").addClass("open");
        bos=true;
    }
}

function etoile() {
    $("#descrip-Exp").slideToggle("slow");
    if (Etoile){
        $("#EXPETOILE h5").removeClass("open");
        $("#EXPETOILE h5").addClass("closed");
        Etoile=false;
    } else {
        $("#EXPETOILE h5").removeClass("closed");
        $("#EXPETOILE h5").addClass("open");
        Etoile=true;
    }
}

$(document).ready(function() {
    if (window.innerWidth<768){
        $("#content h5").addClass("closed");
        $("#content h5").css("cursor","pointer");
        $("#normaux").on("click",normaux);
        $("#elite").on("click",elite);
        $("#boss").on("click",boss);
        $("#EXPETOILE").on("click",etoile);
    }else {
        $("#content h5").addClass("open");
    }
});