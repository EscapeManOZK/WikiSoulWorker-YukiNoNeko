function affiche() {
    var select = document.getElementById("Langue");
    if (select.options[select.selectedIndex].value === "FR"){
        $("#Haru").attr("href", "/Personnage/Haru.html?lang=FR");
        $("#Erwin").attr("href","/Personnage/Erwin.html?lang=FR");
        $("#Lily").attr("href","/Personnage/Lily.html?lang=FR");
        $("#Stella").attr("href","/Personnage/Stella.html?lang=FR");
        if (etatmanu){
            $(".Accueil").attr("href", "/?lang=FR&List=on");
            $("#Combats").attr("href", "/Combats/?lang=FR&List=on");
            $("#Contact").attr("href", "/Contact/?lang=FR&List=on");
            $("#Objets").attr("href", "/Objets/?lang=FR&List=on");
        }else {
            $(".Accueil").attr("href", "/?lang=FR");
            $("#Combats").attr("href", "/Combats/?lang=FR");
            $("#Contact").attr("href", "/Contact/?lang=FR");
            $("#Objets").attr("href", "/Objets/?lang=FR");
        }
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
    }else {
        $("#Haru").attr("href", "/Personnage/Haru.html?lang=EN");
        $("#Erwin").attr("href","/Personnage/Erwin.html?lang=EN");
        $("#Lily").attr("href","/Personnage/Lily.html?lang=EN");
        $("#Stella").attr("href","/Personnage/Stella.html?lang=EN");
        if (etatmanu){
            $(".Accueil").attr("href", "/?lang=EN&List=on");
            $("#Combats").attr("href", "/Combats/?lang=EN&List=on");
            $("#Contact").attr("href", "/Contact/?lang=EN&List=on");
            $("#Objets").attr("href", "/Objets/?lang=EN&List=on");
        }else {
            $(".Accueil").attr("href", "/?lang=EN");
            $("#Combats").attr("href", "/Combats/?lang=EN");
            $("#Contact").attr("href", "/Contact/?lang=EN");
            $("#Objets").attr("href", "/Objets/?lang=EN");
        }
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
    }
}


