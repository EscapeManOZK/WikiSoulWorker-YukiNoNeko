function affiche() {
    var select = document.getElementById("Langue");
    if (select.options[select.selectedIndex].value === "FR"){
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
    }else {
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
    }
}