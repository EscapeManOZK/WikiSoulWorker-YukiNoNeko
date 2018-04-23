var etatmanu =false;
$(document).ready(function(){
    affiche();

    $("#Langue").on("change",affiche);
    $("#Perso > a").on("click",  function() {
            $("#AllPerso").toggle("slow");
            if (etatmanu)etatmanu=false; else etatmanu=true;
            affiche();
        }
    );
});