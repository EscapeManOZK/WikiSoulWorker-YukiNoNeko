var etatmanu=false;
var etatmenuC=false;
var etatmenuO=false;
var lang;
var list;
var listC;
var listO;
var mobile=false;
var dateMaj="24/05/2018";

$(document).ready(function() {
    $("#date").html(dateMaj.toString());
    var taille= window.innerHeight-$("header").height()-$("footer").height()-20-30;
    if (taille>$("#content").height())
    $("#content").css("height",taille);
    if (window.innerWidth<768){
        mobile=true;
        $("#wrapper").removeClass("toggled");
        $("#wrapper").append("<div id=\"headerToggle\">" +
            "<a onclick='changeMenu();' href='#headerToggle' class=\"toggle\"></a>" +
            "</div>");

    }
    lang = $_GET("lang");
    list = $_GET("List");
    listC = $_GET("ListC");
    listO = $_GET("ListO");
    if (lang != null) {
        if (lang == "FR") {
            $("#FR").attr("selected","selected");
        } else if (lang == "EN") {
            $("#EN").attr("selected","selected");
        }
    }
    if (list == "on") {
        etatmanu = true;
        $("#Fperso").toggleClass('flip');
    } else {
        etatmanu = false;
        $("#AllPerso").css("display","none");
    }
    if (listC == "on") {
        $("#FJeu").toggleClass('flip');
        etatmenuC = true;
    } else {
        etatmenuC = false;
        $("#AllCombat").css("display","none");
    }
    if (listO == "on") {
        $("#FObjet").toggleClass('flip');
        etatmenuO = true;
    } else {
        etatmenuO = false;
        $("#AllObjets").css("display","none");
    }
    affiche();
    $("#Langue").on("change",function() {
        affiche();
        if (mobile) {
            $("#wrapper").removeClass("toggled");
        }
    });

    $("#Perso > a").hover(function(){
        $("#Fperso").addClass("imgInverse");
    },function () {
        $("#Fperso").removeClass("imgInverse");
    });

    $("#Combat > a").hover(function(){
        $("#FJeu").addClass("imgInverse");
    },function () {
        $("#FJeu").removeClass("imgInverse");
    });

    $("#Objet > a").hover(function(){
        $("#FObjet").addClass("imgInverse");
    },function () {
        $("#FObjet").removeClass("imgInverse");
    });

    $("#Mention").hover(function () {
        $("#Mention span.far").toggleClass('rotating');
    });

    $("#steam a").hover(function () {
        $("#steam span.fab").toggleClass('rotating');
    });
    $("#imgSteam").hover(function () {
        $("#steam span.fab").toggleClass('rotating');
    });

    $("#Perso > a").on("click",  function() {
        $("#AllPerso").toggle("slow");
        $("#Fperso").toggleClass('flip');
        if(etatmanu)etatmanu=false;else etatmanu=true;
            if (etatmenuC){
                $("#AllCombat").toggle("slow");
                $("#FJeu").toggleClass('flip');
                etatmenuC=false;
            }
            if (etatmenuO){
                $("#AllObjets").toggle("slow");
                $("#FObjet").toggleClass('flip');
                etatmenuO=false;
            }

        affiche();
    });
    $("#Combat > a").on("click",  function() {
        $("#AllCombat").toggle("slow");
        $("#FJeu").toggleClass('flip');
        if(etatmenuC)etatmenuC=false;else etatmenuC=true;
            if (etatmanu){
                $("#AllPerso").toggle("slow");
                $("#Fperso").toggleClass('flip');
                etatmanu=false;
            }
            if (etatmenuO){
                $("#AllObjets").toggle("slow");
                $("#FObjet").toggleClass('flip');
                etatmenuO=false;
            }

        affiche();
    });
    $("#Objet > a").on("click",  function() {
        $("#AllObjets").toggle("slow");
        $("#FObjet").toggleClass('flip');
        if(etatmenuO)etatmenuO=false;else etatmenuO=true;
            if (etatmenuC){
                $("#AllCombat").toggle("slow");
                $("#FJeu").toggleClass('flip');
                etatmenuC=false;
            }
            if (etatmanu){
                $("#AllPerso").toggle("slow");
                $("#Fperso").toggleClass('flip');
                etatmanu=false;
            }
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