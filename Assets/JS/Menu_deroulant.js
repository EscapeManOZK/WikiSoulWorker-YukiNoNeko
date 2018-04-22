function affiche() {
    var select = document.getElementById("Langue");
    if (select.options[select.selectedIndex].value === "FR"){
        $("#Haru").attr("href", "/Personnage/Haru.html?lang=FR");
        $("#Erwin").attr("href","/Personnage/Erwin.html?lang=FR");
        $("#Lily").attr("href","/Personnage/Lily.html?lang=FR");
        $("#Stella").attr("href","/Personnage/Stella.html?lang=FR");
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
    }else {
        $("#Haru").attr("href", "/Personnage/Haru.html?lang=EN");
        $("#Erwin").attr("href","/Personnage/Erwin.html?lang=EN");
        $("#Lily").attr("href","/Personnage/Lily.html?lang=EN");
        $("#Stella").attr("href","/Personnage/Stella.html?lang=EN");
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
    }
}
function formatState (state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "../images";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value + 'Logo.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};

$("#Langue").select2({
    templateSelection: formatState,
    theme: "classic"
});

