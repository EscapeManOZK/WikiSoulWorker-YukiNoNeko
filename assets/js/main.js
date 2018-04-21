var lenght=1;
$(document).ready(function(){
    $("#Langue").on("change",affiche);
    $("#Perso").hover(  function() {
            $("#AllPerso").slideDown("slow");
        }, function() {
            $("#AllPerso").slideUp("slow");
        }
    );
});