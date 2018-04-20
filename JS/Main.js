function Langue(){
    var select = document.getElementById("Langue");
    var FR = document.getElementsByClassName("textFR");
    var EN = document.getElementsByClassName("textEN");
    if (select.options[select.selectedIndex].value === "FR"){
        for(var i=0;i<FR.length;i++){
            if (FR.item(i).hasClass("NotLangue")) FR.item(i).removeClass("NotLangue");
            EN.item(i).addClass("NotLangue");
        }
    }else {
        for(var i=0;i<EN.length;i++){
            if (EN.item(i).hasClass("NotLangue")) EN.item(i).removeClass("NotLangue");
            FR.item(i).addClass("NotLangue");
        }
    }
}
$(document).ready(function(){

    var langue = document.getElementById("Langue");

}