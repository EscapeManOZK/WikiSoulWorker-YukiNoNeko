function affiche() {
    var select = document.getElementById("Langue");
    var string = "";
    if (select.options[select.selectedIndex].value === "FR"){
        string+="lang=FR";
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
        $("#title").attr("placeholder","Ex: Info sur la dernière mise à jour");
        $("#mail").attr("placeholder","Ex : Exemple@gmail.com");
    }else {
        string+="lang=EN";
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
        $("#title").attr("placeholder","Ex: Information on the last update");
        $("#mail").attr("placeholder","Ex : Example@gmail.com");
    }
    string+="&";
    if (etatmanu){
        string+="List=on";
    }else {
        string+="List=off";
    }
    string+="&";
    if (etatmenuC){
        string+="ListC=on";
    }else {
        string+="ListC=off";
    }
    string+="&";
    if (etatmenuO){
        string+="ListO=on";
    }else {
        string+="ListO=off";
    }
    $(".Accueil").attr("href", "/?"+string);
    $("#Combats").attr("href", "/Jeu/?"+string);
    $("#Contact").attr("href", "/Contact/?"+string);
    $(".Contact").attr("href", "/Contact/?"+string);
    $("#Akasha").attr("href", "/Objets/Akasha.html?"+string);
    $("#Plan").attr("href", "/Objets/Plan.html?"+string);
    $("#Ressource").attr("href", "/Objets/Ressources.html?"+string);
    $(".Ressource").attr("href", "/Objets/Ressources.html?"+string);
    $("#Exp").attr("href","/Jeu/Experience.html?"+string);
    $("#Haru").attr("href", "/Personnage/Haru.html?"+string);
    $("#Erwin").attr("href","/Personnage/Erwin.html?"+string);
    $("#Lily").attr("href","/Personnage/Lily.html?"+string);
    $("#Stella").attr("href","/Personnage/Stella.html?"+string);
    $("#Jin").attr("href","/Personnage/Jin.html?"+string);
    $("#Univers").attr("href", "/Jeu/Univers.html?"+string);
    $("#Commerce").attr("href", "/Jeu/Commerce.html?"+string);
    $("#Defis").attr("href", "/Jeu/Defis.html?"+string);
    $("#Quetes").attr("href", "/Jeu/Quetes.html?"+string);
    $("#ATH").attr("href", "/Jeu/ATH.html?"+string);
    $("#PNJ").attr("href", "/Jeu/PNJ.html?"+string);
    $("#Communaute").attr("href", "/Jeu/Communaute.html?"+string);
}


