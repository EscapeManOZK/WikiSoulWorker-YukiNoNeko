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
    $(".Accueil").attr("href", "/?"+string);
    $("#Combats").attr("href", "/Combats/?"+string);
    $("#Contact").attr("href", "/Contact/?"+string);
    $("#Objets").attr("href", "/Objets/?"+string);
    $("#Exp").attr("href","/Combats/Experience.html?"+string);
    $("#Haru").attr("href", "/Personnage/Haru.html?"+string);
    $("#Erwin").attr("href","/Personnage/Erwin.html?"+string);
    $("#Lily").attr("href","/Personnage/Lily.html?"+string);
    $("#Stella").attr("href","/Personnage/Stella.html?"+string);
    $("#Jin").attr("href","/Personnage/Jin.html?"+string);

}


