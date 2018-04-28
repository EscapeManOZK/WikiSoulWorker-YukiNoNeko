var etatmanu=false;

var lang;
var list;
var mobile=false;

$(document).ready(function() {
    if (window.innerWidth<900){
        mobile=true;
        $("#wrapper").removeClass("toggled");
        $("#wrapper").append("<div id=\"headerToggle\">" +
            "<a onclick='changeMenu();' href='#headerToggle' class=\"toggle\"></a>" +
            "</div>");
    }
    lang = $_GET("lang");
    list = $_GET("List");
    if (lang != null) {
        if (lang == "FR") {
            $("#FR").attr("selected","selected");
        } else if (lang == "EN") {
            $("#EN").attr("selected","selected");
        }
    }
    if (list == "on") {
        etatmanu = true;
    } else {
        etatmanu = false;
        $("#AllPerso").css("display","none");
    }
    affiche();
    $("#Langue").on("change",function() {
        affiche();
        if (mobile) {
            $("#wrapper").removeClass("toggled");
        }
    });

    $("#Perso > a").on("click",  function() {
        $("#AllPerso").toggle("slow");
        if(etatmanu)etatmanu=false;else etatmanu=true;
        affiche();
    });

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
}

function changeMenu() {
    if ($("#wrapper").hasClass("toggled")) {
        $("#wrapper").removeClass("toggled");
    }
    else {
        $("#wrapper").addClass("toggled");
    }
}