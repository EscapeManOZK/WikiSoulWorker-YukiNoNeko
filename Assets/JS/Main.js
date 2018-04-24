var etatmanu=false;

function mail() {
    var m_mail = $("#mail").val();
    var titre =$("#title").val();
    var corp =$("#corp").val();
    $.ajax({
       url: "/Contact/Mail.php",
       type:  "post",
        data: {Mail: m_mail,Titre: titre,Corp: corp}
    });
    //window.open("MAILTO:mail@soulworker-wiki.com?subject=" + titre + "&body=" + corp);
}

$(document).ready(function() {
    var lang = $_GET("lang");
    var list = $_GET("List");
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
    $("#Langue").on("change",affiche);

    $("#Perso > a").on("click",  function() {
        $("#AllPerso").toggle("slow");
        if(etatmanu)etatmanu=false;else etatmanu=true;
        affiche();
    });
    $("#sendIt").on("click", mail);
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