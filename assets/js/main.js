
$(document).ready(function(){
    affiche();

    $("#Langue").on("change",affiche);
    $("#Perso > a").on("click",  function() {
            $("#AllPerso").toggle("slow");
        }
    );
});
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}²