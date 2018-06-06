function affiche() {
    var select = document.getElementById("Langue");
    var string = "";
    if (select.options[select.selectedIndex].value === "FR"){
        string+="lang=FR";
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
        $("#title").attr("placeholder","Ex: Info sur la dernière mise à jour");
        $("#mail").attr("placeholder","Ex : Exemple@gmail.com");
        $(".lienGame").attr("href","https://fr.soulworker.gameforge.com/");
    }else {
        string+="lang=EN";
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
        $("#title").attr("placeholder","Ex: Information on the last update");
        $("#mail").attr("placeholder","Ex : Example@gmail.com");
        $(".lienGame").attr("href","https://en.soulworker.gameforge.com/");
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
    var dev="";
    if (window.location.href.includes('WikiSoulWorker-YukiNoNeko'))
        dev='/WikiSoulWorker-YukiNoNeko';
    $(".Accueil").attr("href", dev+"/?"+string);
    $("#Combats").attr("href", dev+"/Jeu/?"+string);
    $("#Contact").attr("href", dev+"/Contact/?"+string);
    $(".Contact").attr("href", dev+"/Contact/?"+string);
    $("#Akasha").attr("href", dev+"/Objets/Akasha.html?"+string);
    $("#Plan").attr("href", dev+"/Objets/Plan.html?"+string);
    $("#Ressource").attr("href", dev+"/Objets/Ressources.html?"+string);
    $(".Ressource").attr("href", dev+"/Objets/Ressources.html?"+string);
    $("#Exp").attr("href",dev+"/Jeu/Experience.html?"+string);
    $("#Haru").attr("href", dev+"/Personnage/Haru.html?"+string);
    $("#Erwin").attr("href",dev+"/Personnage/Erwin.html?"+string);
    $("#Lily").attr("href",dev+"/Personnage/Lily.html?"+string);
    $("#Stella").attr("href",dev+"/Personnage/Stella.html?"+string);
    $("#Jin").attr("href",dev+"/Personnage/Jin.html?"+string);
    $("#Univers").attr("href", dev+"/Jeu/Univers.html?"+string);
    $("#Commerce").attr("href", dev+"/Jeu/Commerce.html?"+string);
    $("#Defis").attr("href", dev+"/Jeu/Defis.html?"+string);
    $("#Quetes").attr("href", dev+"/Jeu/Quetes.html?"+string);
    $("#ATH").attr("href", dev+"/Jeu/ATH.html?"+string);
    $("#PNJ").attr("href", dev+"/Jeu/PNJ.html?"+string);
    $("#Communaute").attr("href", dev+"/Jeu/Communaute.html?"+string);
}


