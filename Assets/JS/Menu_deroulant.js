function affiche() {
    var select = document.getElementById("Langue");
    if (select.options[select.selectedIndex].value === "FR"){
        if (etatmanu){
            $(".Accueil").attr("href", "/?lang=FR&List=on");
            $("#Combats").attr("href", "/Combats/?lang=FR&List=on");
            $("#Contact").attr("href", "/Contact/?lang=FR&List=on");
            $("#Objets").attr("href", "/Objets/?lang=FR&List=on");
            $("#Haru").attr("href", "/Personnage/Haru.html?lang=FR&List=on");
            $("#Erwin").attr("href","/Personnage/Erwin.html?lang=FR&List=on");
            $("#Lily").attr("href","/Personnage/Lily.html?lang=FR&List=on");
            $("#Stella").attr("href","/Personnage/Stella.html?lang=FR&List=on");
        }else {
            $(".Accueil").attr("href", "/?lang=FR&List=off");
            $("#Combats").attr("href", "/Combats/?lang=FR&List=off");
            $("#Contact").attr("href", "/Contact/?lang=FR&List=off");
            $("#Objets").attr("href", "/Objets/?lang=FR&List=off");
            $("#Haru").attr("href", "/Personnage/Haru.html?lang=FR&List=off");
            $("#Erwin").attr("href","/Personnage/Erwin.html?lang=FR&List=off");
            $("#Lily").attr("href","/Personnage/Lily.html?lang=FR&List=off");
            $("#Stella").attr("href","/Personnage/Stella.html?lang=FR&List=off");
        }
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
    }else {
        if (etatmanu){
            $(".Accueil").attr("href", "/?lang=EN&List=on");
            $("#Combats").attr("href", "/Combats/?lang=EN&List=on");
            $("#Contact").attr("href", "/Contact/?lang=EN&List=on");
            $("#Objets").attr("href", "/Objets/?lang=EN&List=on");
            $("#Haru").attr("href", "/Personnage/Haru.html?lang=EN&List=on");
            $("#Erwin").attr("href","/Personnage/Erwin.html?lang=EN&List=on");
            $("#Lily").attr("href","/Personnage/Lily.html?lang=EN&List=on");
            $("#Stella").attr("href","/Personnage/Stella.html?lang=EN&List=on");
        }else {
            $(".Accueil").attr("href", "/?lang=EN&List=off");
            $("#Combats").attr("href", "/Combats/?lang=EN&List=off");
            $("#Contact").attr("href", "/Contact/?lang=EN&List=off");
            $("#Objets").attr("href", "/Objets/?lang=EN&List=off");
            $("#Haru").attr("href", "/Personnage/Haru.html?lang=EN&List=off");
            $("#Erwin").attr("href","/Personnage/Erwin.html?lang=EN&List=off");
            $("#Lily").attr("href","/Personnage/Lily.html?lang=EN&List=off");
            $("#Stella").attr("href","/Personnage/Stella.html?lang=EN&List=off");
        }
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
    }
}


